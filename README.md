# Deploy on heroku
- - -

## Wat is heroku
Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Our platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.

## 1. Configure the project

1. Put the `/updates` folder out of the `/server`

2. Put the `package.json`, `.gitignore` and `index.js` out of the `/server` folder

3. In the `/server` folder leeve only the `models` and `routes` folder

4. Inside the `.gitignore` remove the `/public` line 

5. On the `index.js` file change file inports
    - models import 
    - routes require
    
6. Create the `/public` file 
    - Go to the the client and run `npm run build` or `yarn build`, this comand will create a `/build` folder inside the `/client`
    - Muve the `/build` folder outside the `client` folder
    - Change the `/build` folder name to `public`
    
7. Create the start script
    - Go to the `package.json`
    - Add `"start": "npm install && node index.js"` tho the `"scripts"`
    
## 2. Create the heroku account    

1. If you don't have one, [create a heroku account](https://dashboard.heroku.com/)

2. After login create a new app 

3. Choose the GitHub Deployment method

4. Conect to the github account and repo 

5. Choose the branch who will be deployed end eneble the Automatic Deploys

6. Before you deploy the aplication go to the settings section and set the environment variables
    - Go to de settings session 
    - On Config Vars click on Reveal Config Vars and set the variables
    
7. On deploy section click on deploy branch    
