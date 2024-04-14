# Project Name: AI Waste Sorting

## Online-Visit

First I've deployed to the server，You can access the experience online by
clicking [here](http://itmd542-fp-yifan.someget.work/)

## Project Description

In today's world, sorting our trash correctly is super important for keeping our planet healthy. But, let's be honest,
it can be pretty confusing sometimes. That's why I'm working on a new website to help everyone out. This site is all
about making waste sorting simple and clear.

Here's the deal: if you're not sure where to throw your trash, just ask our website. We're using some smart AI
technology to give you quick answers on how to sort your waste. You can ask up to 5 questions every day for free. And if
you check in on the site daily, you get to ask 10 questions a day!

I really hope this website will make waste sorting easier for everyone. By getting better at this, we can all do our
part for the environment and our community.

This project stands as a testament to the cutting-edge skills and knowledge acquired in the ITMD542 course, brilliantly
woven into its fabric. Developed with Express and Node.js, it not only showcases a simple yet profoundly functional
interface but also embodies the essence of responsive design. By integrating Pug as the template engine and TailwindCSS
for styling, this web application transcends ordinary user experiences, offering a seamless and captivating interaction
across various devices. It's a vivid demonstration of how classroom learning can be transformed into real-world
solutions, illuminating the path for future innovations.

## Technology Stack

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, facilitating the execution of JavaScript
  code server-side.
- **Express**: A minimal and flexible Node.js web application framework, providing a robust set of features for web and
  mobile applications.

### Frontend

- **Pug**: A high-performance template engine implemented with JavaScript for Node.js and browsers, known for its clean
  and simple syntax.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs directly in your markup.

### Database

- **SQLite**: A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL
  database engine.

### AI Model

- **OpenAI GPT-4**: The latest generation of artificial intelligence language models developed by OpenAI, capable of
  understanding and generating human-like text.

### ORM Tool

- **TypeORM**: An ORM that can run in Node.js, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and
  Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).

### Authentication Framework

- **GitHub Authentication**: Utilizes GitHub's OAuth 2.0 authentication system to enable users to authenticate with
  GitHub credentials, providing a secure and streamlined sign-in process.

This technology stack has been curated to support the development of a modern, efficient, and user-friendly web
application, leveraging the latest advancements in web technology and artificial intelligence.

## Data Structure

```sql
create table user
(
    id        bigint unsigned auto_increment comment 'pk' primary key,
    uid       bigint unsigned default 0 not null comment 'uid',
    user_name varchar(128) default ''                not null comment 'jwt token',
    token     varchar(128) default ''                not null comment 'jwt token',
    mtime     timestamp    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'update time',
    ctime     timestamp    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'create time',
    constraint uk_uid unique (uid),
    index     ix_token (token),
    index     ix_mtime (mtime),
    index     ix_ctime (ctime)
) comment 'user';

create table qa_record
(
    id       bigint unsigned auto_increment comment 'pk' primary key,
    uid      bigint unsigned default 0 not null comment 'uid',
    question varchar(500) default ''                not null comment 'question',
    answer   varchar(500) default ''                not null comment 'answer',
    mtime    timestamp    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'update time',
    ctime    timestamp    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'create time',
    index    ix_mtime (mtime),
    index    ix_ctime (ctime)
) comment 'qa_record';

create table daily_check
(
    id         bigint unsigned auto_increment comment 'pk' primary key,
    uid        bigint unsigned default 0 not null comment 'uid',
    check_date varchar(32) default ''                not null comment 'check_date e.g. 20230204',
    mtime      timestamp   default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'update time',
    ctime      timestamp   default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'create time',
    index      ix_mtime (mtime),
    index      ix_ctime (ctime),
    index      ix_uid_date (uid, check_date)
) comment 'qa_record';
```

## Function Introduction

![img_1.png](imgs/img_1.png)

## Waste Sorting core flow chart

![img_2.png](imgs/img_2.png)

## Waste Sorting Core Timing Chart

![img.png](imgs/img.png)

## 接口文档

## Development Environment

- **Operating System**: Windows 11/macOS Big Sur/Ubuntu 20.04
- **Node.js Version**: 21.6.2
- **Editors Used**: Visual Studio Code
- **Key Dependencies**:
    - Express for the web server framework
    - SQLite for database management
    - Pug for server-side template rendering
    - TailwindCSS for utility-first CSS styling
- **Other Tools**:
    - Nodemon for automatic server restarts during development
    - Debug for debugging purposes

## Installation/Running Instructions

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/oreoft/ITMD542-S24.git
   ```
2. **Navigate to the project directory**:
   ```
   cd final-project
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Set up environment variables**:
   Create a `.env` file in the root directory and populate it with ai config variables. such as `QA_TOKEN=xxxx`(your
   config), This .evn content I will submit to the dashboard

4**Start the application**:

- For development:

```
npm run dev
```

- For production:

```
npm start
```

## References

- Express Documentation: https://expressjs.com/
- SQLite Documentation: https://www.sqlite.org/docs.html
- TailwindCSS Documentation: https://tailwindcss.com/docs
- Node.js Documentation: https://nodejs.org/en/docs/
