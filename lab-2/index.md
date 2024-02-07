# ITMD-542-Lab2-Yifan's Contacts

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Lab2: building a Node JS Express app for a non-persistent contact database, focusing on CRUD

You can access the experience online by **clicking [here](http://itmd542-lab2-yifan.someget.work/)**

## Feature

This is a simple contact list application without login authentication. Its main features include

- viewing the contact lis,

-  adding new contacts 

- deleting contacts

- viewing individual contact information

- modifying contact information

The information that can be entered includes 

  - last name
  - first name 
  - email
  - notes
  - lastEdited(each time a contact is modified, the application will record the time of the last modification)

## How-to-use

#### Online-use

First I've deployed to the server，You can access the experience online by **clicking [here](http://itmd542-lab2-yifan.someget.work/)**

#### Local-compilation-use

If you wish to compile the boot locally, you need to follow these steps

1. Install nodejs, depending on your device follow the official website, official website [click](https://nodejs.org/en/download/current)

2. Clone my code and go into the lab-2 folder

   ```shell
   git clone https://github.com/oreoft/ITMD542-S24.git
   cd ITMD542-S24/lab-2
   ```
   ![image-20240207101509373](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402071015412.png)
   
3. In the lab-2 folder, run `npm install` to install the required dependencies.
![image-20240207101608374](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402071016397.png)

4. This step is optional, this project uses tailwind for css assist, if you don't have any changes, you can ignore this step, already I've typed all the compiled css into the project, if you have changes in your code, you should also run `npm run build-css` before launching.
![image-20240207103422770](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402071052461.png)

5. Finally, start the project directly using `npm start`.
![image-20240207101707273](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402071017297.png)

5. The default port is 3000, enter `localhost:3000` in the browser to access the homepage
![image-20240207101802354](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402071018377.png)

## Some-demo-screenshots
- Home page

![image-20240207095548211](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070955254.png)

- list page

![image-20240207095603358](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070956379.png)

- add page

![image-20240207095616772](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070956810.png)

- detail page

![image-20240207095631051](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070956075.png)

- edit page

![image-20240207095657021](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070956042.png)

- delete page

![image-20240207095716312](https://mypicgogo.oss-cn-hangzhou.aliyuncs.com/tuchuang202402070957332.png)
