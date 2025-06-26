# DIGITAL RESUME
This project is a fully responsive digital CV built with ReactJS, designed to showcase the professional journey, skills, experience, and projects in a clean and interactive format. The main purpose of this project is not only to present the resume online but also to serve as an open-source template that others can clone, customize, and use to build their own professional portfolios.

## TABLE OF CONTENTS
1. [Setup in your local machine](#SETUP)
2. [Areas to personalize](#PERSONALIZATION)
3. [Tips](#TIPS)
4. [Deploy](#DEPLOY)
4. [Author](#AUTHOR)
5. [Support](#SUPPORT)

## SETUP
1. Clone or Download the Repository
    * Start by cloning this repository (```git clone https://github.com/prasanthse/digital-portfolio.git```) to your local machine using Git, or download the ZIP file and extract it.
2. Remove Existing Git History
    * After downloading or cloning, delete the hidden folders named .git and .github from the root of the project. This removes the original version control and GitHub configurations so you can initialize your own.
3. Use a Code Editor (Recommended: VS Code)
    * Open the project in a code editor of your choice. If you don’t have one, it’s recommended to install [Visual Studio Code](https://code.visualstudio.com/download).
4. Ensure Node.js and npm are Installed
    * Verify that Node.js and npm are installed by running the following commands in your terminal:
        - ```node -v```
        - ```npm -v```
    * If you see version numbers, you're good to go for step 5. If not, proceed to the step 4.
5. Install Node.js and npm
    * If Node.js and npm are not installed, download and install the latest version from the [official website](https://nodejs.org/en/download/current).
    * After installation, run the above commands again to confirm they are installed correctly.
6. Open the cloned/downloaded project in your code editor.
7. Initialize a Git Repository with ```git init```.
8. Install Project Dependencies (Only for the first time)
    * Install all required dependencies by running ```npm install``` in your code editor's terminal.
9. Start the Development Server
    * Once the installation is complete, start the development server using ```npm run start```.
10. You're All Set🎉!
    * The project should now be run in your browser.

## PERSONALIZATION
1. Find the index.html inside the public folder and modify,
    * Meta description
    * Meta keywords
    * Title
2. Replace the logo.png, logo192.png, logo512.png, favicon.ico and maskable.png files inside the public folder with your preferences
    * To create a favicon: https://favicon.io/favicon-converter
    * To create a maskable icon: https://maskable.app/editor
3. Replace the existing images or Add new images inside the public/images folder. Ensure that the new images have the same names, extensions when you replace, and dimensions as the originals to prevent any scaling issues.
4. Enter all your personal information in the profile.json file located in the src/data folder. This file controls the content displayed on your portfolio site, so updating it will dynamically reflect your personal details on the site.
5. To change sections' titles or labels, edit the translations.json file found in src/i18n/locales/en. This file handles the textual content of your site and supports localization.
6. To change your theme color, modify the theme.js file inside src/theme folder.

## TIPS
1. Optimize Your Images
    * Before adding custom images to the project, make sure to compress them using tools like [TinyPNG](https://tinypng.com) or any other online image compressor. This helps reduce file sizes significantly without sacrificing quality, resulting in faster load times and better performance.

## DEPLOY
1. Create a new repository in your github account (Only for the first time)
2. Set your remote origin via ```git remote add origin https://github.com/<your-username>/<your-repo>.git```. (Only for the first time)
3. Update the homepage value in your package.json file with your repository url (Only for the first time)
    * Ex: "homepage": "https://<your-username>.github.io/<your-repo>"
4. Push your code to GitHub
    * ```git add .```
    * ```git commit -m "Initial commit"```
    * ```git push -u origin main```
5. Deploy to GitHub Pages
    * ```npm run deploy```
6. Access Your Portfolio
    * After successful deployment, your site will be live at: [https://<your-username>.github.io/<your-repo>]

## AUTHOR
![Prasanth Logo](public/readme/author.png)<br />
[Sivakumar Prasanth](www.linkedin.com/in/prasanthse1996)<br />
Co-Founder & CEO<br /> 
[Techserw Labs (PVT) Ltd](https://techserw.com)<br />
Senior Game Developer<br />
B.Sc. (Hons) in Software Engineering (First Class)<br />
University of Kelaniya

## SUPPORT
* Make sure you show some love by giving ⭐ to my repository
* Support my project? [Buy me a coffee](https://github.com/sponsors/prasanthse?frequency=recurring&sponsor=prasanthse)