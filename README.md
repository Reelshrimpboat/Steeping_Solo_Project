# Prime Solo Project - Steeping Tea Timer
This was my solo capstone project from my time at Prime Digital Academy.  Steeping is an app that allows you to track your favorite teas, the teas you own, and lets you rate and review teas.  It also has a functional timer for steeping teas, and lets you quickly pull up the teas you own for ease of access.

There are also admin privileges to allow users designated as admins to update and edit the tea database from the app instead of having to go into sql to make changes to the tea database. 

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).  Instalation instructions for the database are included in the database.sql file.


## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`
