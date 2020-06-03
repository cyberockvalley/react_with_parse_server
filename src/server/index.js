
import view from './view'
import error404 from './errors/error404'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import ComponentsRoutes from '../client/ComponentsRoutes'
import Paths from './utils/Paths'

var express = require("express")
var path = require("path")
var logger = require("morgan")
var ParseServer = require("parse-server").ParseServer
var ParseDashboard = require("parse-dashboard")
const dotenv = require("dotenv")
const dotenvConfig = dotenv.config({path: "env/.env"})
//logger.disableLogger()
if(dotenvConfig.error) {
    throw dotenvConfig.error

} else {
    console.log("DOT_ENV_DATA", dotenvConfig.parsed)
}
var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//app.use(cookieParser())
//app.use(API_ROOT + "stripe", Stripe)
//app.use(express.static("public", { maxAge: 31557600000 }))
app.use('/client', express.static(path.resolve(__dirname, '../client')))

var api = new ParseServer({
    databaseURI: process.env.DATABASE_URL,
    cloud: process.env.CLOUD_CODE_MAIN || __dirname + "/cloud/index.js",
    appId: process.env.appId,
    restAPIKey: process.env.restAPIKey,
    javascriptKey: process.env.javascriptKey,
    serverURL: `${process.env.serverUrl}/api/parse`,
    masterKey: process.env.masterKey,

    sessionLength: 86400,
    // Enable email verification
    verifyUserEmails: true,
    // in seconds (2 hours = 7200 seconds)
    mailVerifyTokenValidityDuration: 2 * 60 * 60, 

    // defaults to false
    preventLoginWithUnverifiedEmail: false, 

    // The public URL of your app.
    // This will appear in the link that is used to verify email addresses and reset passwords.
    // Set the mount path as it is in serverURL
    publicServerURL: `${process.env.serverUrl}/api/parse`,
    // Your apps name. This will appear in the subject and body of the emails that are sent.
    appName: 'Story Stretch',
    // The email adapter
    emailAdapter: {
        module: 'parse-server-dedicated-email-adapter',
        options: {
            host: 'smtp.storystretch.com',
            port: 465,
            secure: false,
            // The address that your emails come from
            email: 'support@storystretch.com',
            // Your domain from mailgun.com
            password: 'storystretch.com'
        }
    },

    accountLockout: {
        // duration policy setting determines the number of minutes that a locked-out account remains locked out before automatically becoming unlocked. Set it to a value greater than 0 and less than 100000.
        duration: 1, 
        // threshold policy setting determines the number of failed sign-in attempts that will cause a user account to be locked. Set it to an integer value greater than 0 and less than 1000.
        threshold: 3, 
    },
    // optional settings to enforce password policies
    /*
    passwordPolicy: {
        // Two optional settings to enforce strong passwords. Either one or both can be specified.
        // If both are specified, both checks must pass to accept the password
        // 1. a RegExp object or a regex string representing the pattern to enforce
        validatorPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, // enforce password with at least 8 char with at least 1 lower case, 1 upper case and 1 digit
        // 2. a callback function to be invoked to validate the password
        validatorCallback: (password) => { return validatePassword(password) },
        validationError: 'Password must contain at least 1 digit.', // optional error message to be sent instead of the default "Password does not meet the Password Policy requirements." message.
        doNotAllowUsername: true, // optional setting to disallow username in passwords
        maxPasswordAge: 90, // optional setting in days for password expiry. Login fails if user does not reset the password within this period after signup/last reset.
        maxPasswordHistory: 5, // optional setting to prevent reuse of previous n passwords. Maximum value that can be specified is 20. Not specifying it or specifying 0 will not enforce history.
        //optional setting to set a validity duration for password reset links (in seconds)
        resetTokenValidityDuration: 24*60*60, // expire after 24 hours
    }*/
});

// make the Parse Server available at /api/parse
app.use("/api/parse", api)

var dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: `${process.env.serverUrl}/api/parse`,
        appId: process.env.appId,
        masterKey: process.env.readOnlyMasterKey,
        appName: process.env.appName,
        iconName: "MyAppIcon.png",
        primaryBackgroundColor: "#FFA500",
        secondaryBackgroundColor: "#FF4500",
        production: false
      }
    ],
    users: [
      {
        user: process.env.masterUsername,
        pass: process.env.masterPassword
      }
    ]
  },
  { allowInsecureHTTP: true }
);

// make the Parse Dashboard available at /api/dashboard
app.use("/api/dashboard", dashboard);

app.get(Paths, (req, res) => {
  var meta = {
    title: "Get title, pre, and seo with path",
    pre: [],
    seo: []
  }

  var initialData = {
    user: null
  }

  var body = ReactDOMServer.renderToString(
    <Router location={req.url} context={{}}>
      <ComponentsRoutes initialData={initialData}/>
    </Router>
  )

  res.set("Content-Type", "text/html")
  res.status(200).send(view(meta, initialData, body))
})


app.use("*", (req, res) => {
  res.set("Content-Type", "text/html")
  res.status(404).send(error404())
})


app.listen(process.env.PORT, () => {
  console.log('parse-server-example running on port 1337.');
})