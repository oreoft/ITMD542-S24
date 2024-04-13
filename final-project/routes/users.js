var express = require('express');
const axios = require('axios');
const {getRepository} = require("typeorm");
var router = express.Router();
const User = require("../src/entity/User");
const {v4: uuidv4} = require('uuid');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const scope = process.env.SCOPE;
const userUrl = process.env.USER_URL;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.redirect('/');
});

router.get('/login', function (req, res, next) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`)
});

router.get('/callback', async function (req, res, next) {
    const code = req.query.code; // GitHub callbacks typically pass code as a query parameter
    try {
        // go to github authentication
        const accessToken = await fetchGithubAccessToken(code);
        const userInfo = await getUserInfoFromGithub(accessToken);

        const userRepository = getRepository(User);
        const token = uuidv4().replace(/\-/g, '')
        // Find Users by ID
        const user = await userRepository.findOne({uid: userInfo.id});
        if (user) {
            user.token = token
            await userRepository.save(user);
        } else {
            const user = userRepository.create({
                uid: userInfo.id,
                user_name: userInfo.login || "Anonymous-visitors",
                token: token,
            });
            await userRepository.save(user);
        }
        res.cookie('username', user.user_name, {httpOnly: true, secure: true});
        res.cookie('token', user.token, {httpOnly: true, secure: true});
        res.redirect('/home');
    } catch (error) {
        console.error("Error fetching GitHub access token:", error);
        res.status(500).send("Internal Server Error");
    }
});

const oauthConfig = {
    github: {
        clientId: clientId,
        clientSecret: clientSecret,
        accessTokenUrl: 'https://github.com/login/oauth/access_token'
    }
};

async function getUserInfoFromGithub(accessToken) {
    try {
        console.info("Fetching GitHub user info...");
        const response = await axios.get(userUrl, {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });

        // Returns parsed user information directly
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user info:", error);
        throw error;
    }
}

async function fetchGithubAccessToken(code) {
    const githubConfig = oauthConfig.github;

    if (!githubConfig.clientId || !githubConfig.clientSecret || !githubConfig.accessTokenUrl) {
        throw new Error("GitHub OAuth configuration is missing");
    }

    const params = {
        client_id: githubConfig.clientId,
        client_secret: githubConfig.clientSecret,
        code: code
    };

    try {
        console.info("Fetching GitHub access token...");
        const response = await axios.post(githubConfig.accessTokenUrl, params, {
            headers: {
                Accept: 'application/json'
            }
        });

        const accessToken = response.data.access_token;
        if (!accessToken) {
            throw new Error("Failed to obtain access token");
        }

        return accessToken;
    } catch (error) {
        console.error("Error fetching GitHub access token:", error);
        throw error;
    }
}

module.exports = router;
