const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyC7cy09LPaK78StpX8YGr59SwXA7I3LFWY",
    authDomain: "todomediumapp.firebaseapp.com",
    databaseURL: "https://todomediumapp.firebaseio.com",
    projectId: "todomediumapp",
    storageBucket: "todomediumapp.appspot.com",
    messagingSenderId: "457471721658"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();