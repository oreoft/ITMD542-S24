# Project Name: Lab-4

## Online-Visit

First I've deployed to the server，You can access the experience online by **clicking [here](http://itmd542-lab3-yifan.someget.work/)**

## Project Description

This project is a web application developed using Express and Node.js. It showcases a simple yet functional interface
for managing movie information, including operations like viewing, adding, editing, and deleting movie entries. Tailored
with a responsive design, it leverages Pug as the template engine and TailwindCSS for styling, offering a seamless user
experience across different devices.

## Development Environment

- **Operating System**: Windows 11/macOS Big Sur/Ubuntu 20.04
- **Node.js Version**: 21.6.2
- **Editors Used**: Visual Studio Code
- **Key Dependencies**:
    - Express for the web server framework
    - MongoDB and SQLite for database management
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
   cd lab-4
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Set up environment variables**:
   Create a `.env` file in the root directory and populate it with mongodb config
   variables. `MONGODB_URL=mongodb+srv://xxx:xxx`(your config)

5. **Start the application**:
    - For development:
      ```
      npm run dev
      ```
    - For production:
      ```
      npm start
      ```

## Insights and Results

Throughout the development of this project, I learned about the integration of various technologies such as Express,
MongoDB, SQLite, and TailwindCSS. One of the challenges faced was ensuring responsive design, which was addressed using
TailwindCSS. Another challenge was managing asynchronous database operations, for which async/await syntax in Node.js
proved to be invaluable.

(Feel free to add more about your personal experience, challenges, and any screenshots of working/non-working features.)

## References

- Express Documentation: https://expressjs.com/
- MongoDB Documentation: https://docs.mongodb.com/
- SQLite Documentation: https://www.sqlite.org/docs.html
- TailwindCSS Documentation: https://tailwindcss.com/docs
- Node.js Documentation: https://nodejs.org/en/docs/
