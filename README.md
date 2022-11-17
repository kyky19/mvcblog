# MVC Tech Blog
  
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Install](#install)
  * [Licenses](#licenses)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  An app that allows users to create an account and make posts online. Users can also delete posts as well as comment on other users posts. 
  ![techex](https://user-images.githubusercontent.com/106569591/202415586-16418477-026c-46c7-b158-eaddec3a8736.png)
  ![post](https://user-images.githubusercontent.com/106569591/202415599-d7df5471-e95e-4786-87a5-c306cd27ff1c.png)

  ## Usage
  Users can visit the deployed link and create an account to begin posting and commenting.
  ## Install
  Installation starts with cloning the repo. Copy the clone link via GitHub and open GitBash. Run the command "npm clone" followed by the copied link. Next, open the file in VS code. Open the integrated terminal and begin by running "npm install". There is a missing file that is needed to run this program, so create a ".env" file in the root directory. Fill this file with the following text: "DB_NAME=hotake_db   DB_USER=<mysql username>   DB_PW=<mysql password>". After this file is created, go back to the terminal and login to mysql using the command "mysql -u <username> -p". You will be prompted to enter your password. After logging into mysql, run the command "source db/schema.sql". Next type "exit" to leave mysql. You will then be able to seed your data by running "npm run seed" in the command line. Next run "npm start" and you are ready to go!
  ## Questions
  Any further questions?
  Email: kyky19@me.com
  Github: https://github.com/kyky19
  ## Credits
  Kyle Lane
