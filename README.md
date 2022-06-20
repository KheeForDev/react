# Introduction
A frontend web application built using React. The function of this web application is to allow user to create a simple note, update and delete existing note.

# What You Need
1. IDE - Visual Studio Code (Recommended)
2. Node.js - Version 16 or later
3. Backend service - https://github.com/KheeForDev/react/tree/note-keeper-backend (Optional)

# How to run
1. git clone or download project.
2. Open project using Visual Studio Code.
3. Open a new terminal. <br/>
<img width="281" alt="image" src="https://user-images.githubusercontent.com/52060358/174548492-34b45bb2-6a48-442a-b322-780810124530.png"></img>
4. Ensure the terminal working directory is in the project and run `npm install` to download packages and dependencies.
5. Once download is completed, run `npm start` to start a local node server.
6. Once the server started, access via `http://localhost:3000` on a web browser.

# Importance
### API Serivce Base URL
Current project is pointing to an API service deployed in Heroku. <br/>
<img width="464" alt="image" src="https://user-images.githubusercontent.com/52060358/174551676-a22a5a16-18be-4932-bea0-9c0078b5c365.png"></img>

It can be modified under `src/utils/axios.js` file if there is another backend service or changed in base URL.
