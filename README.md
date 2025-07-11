# DIGITAL RESUME
This project is a fully responsive digital CV built with ReactJS, designed to showcase the professional journey, skills, experience, and projects in a clean and interactive format. The main purpose of this project is not only to present the resume online but also to serve as an open-source template that others can clone, customize, and use to build their own professional portfolios.


## TABLE OF CONTENTS
1. [Setup](#SETUP)
2. [Personalization](#PERSONALIZATION)
3. [Tips](#TIPS)
4. [Deploy](#DEPLOY)
5. [Install as a Mobile App](#PWA)
6. [Author](#AUTHOR)
7. [Support](#SUPPORT)


## SETUP
1. Clone or Download the Repository
    * Start by cloning this repository (```git clone https://github.com/prasanthse/digital-portfolio.git```) to your local machine using Git, or download the ZIP file and extract it.
2. Remove Existing Git History
    * After downloading or cloning, delete the hidden folders named ```.git``` and ```.github``` from the root of the project. This removes the original version control and GitHub configurations so you can initialize your own.
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
9. Create environment file
    * Create a file named ```.env``` in your project root directory
    * Paste the following line ```REACT_APP_APP_VERSION="v1.0.0"```
10. Start the Development Server
    * Once the installation is complete, start the development server using ```npm run start```.
11. You're All Set🎉!
    * The project should now be run in your browser.


## PERSONALIZATION
1. Find the ```index.html``` inside the public folder and modify,
    * Meta description
    * Meta keywords
    * Title
    * Meta theme-color
2. Replace the ```logo.png```, ```logo192.png```, ```logo512.png```, ```favicon.ico``` and ```maskable.png``` files inside the public folder with your preferences
    * To create a favicon [click here](https://favicon.io/favicon-converter)
    * To create a maskable icon [click here](https://maskable.app/editor)
3. Replace the existing images inside the ```public/images/icons``` folder if you want, But ensure that the new images have the same names, extensions ```(.png)``` when you replace, and dimensions ```(512x512)``` as the originals to prevent any scaling issues.
    * You can find more Icons in [Flaticon](https://www.flaticon.com) site
4. Add all the necessary images inside ```public/images``` folder with your preferred hierarchy and remove the existing images except ```public/images/icons``` and ```public/images/utils``` folder
5. Enter all your personal information in the ```profile.json``` file located in the ```src/data``` folder with your correct images path. This file controls the content displayed on your portfolio site, so updating it will dynamically reflect your personal details on the site.
6. To change sections' titles or labels, edit the ```translations.json``` file found in ```src/i18n/locales/en```. This file handles the textual content of your site and supports localization.
7. To change your theme color, modify the theme.js file inside ```src/theme``` folder.
8. To change your your app name, modify ```short_name``` and ```name``` properties in ```public/manifest.json```


## TIPS
1. Optimize Your Images
    * Before adding custom images to the project, make sure to compress them using tools like [TinyPNG](https://tinypng.com) or any other online image compressor. This helps reduce file sizes significantly without sacrificing quality, resulting in faster load times and better performance.


## DEPLOY
1. Create a new repository in your github account (Only for the first time)
2. Set your remote origin via ```git remote add origin https://github.com/<your-username>/<your-repo>.git```. (Only for the first time)
3. Update the homepage value in your package.json file with your repository url (Only for the first time)
    * Ex: "homepage": "https://<your-username>.github.io/<your-repo>"
4. Update your repository name in the ```BrowserRouter basename```, in the App.js file 
5. Push your code to GitHub
    * ```git add .```
    * ```git commit -m "Initial commit"```
    * ```git push -u origin main```
6. Deploy to GitHub Pages
    * Make sure you're deploying a new version (Optional) for better practice. Update your new version in your ```.env``` file
    * ```npm run deploy```
7. Access Your Portfolio
    * After successful deployment, your site will be live at: ```https://<your-username>.github.io/<your-repo>```.
    * You can find you site URL in your ```github repository -> Settings -> Pages -> Under GitHub Pages section (Top section)```
<br />
NOTE: It may take few minutes to reflect your new changes in the live site


## PWA
This is developed as a Progressive Web App (PWA), a type of web application that uses modern web technologies to deliver a native app-like experience to you, including features like offline access, and the ability to be installed on your mobile device.
1. Open your live site in your mobile browser
2. Inside the browser options find the option named ```Add to home screen```
3. Install the site


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