/******************************************************************
 ***** Copy and paste your SDK setup and configuration below *****
 ******************************************************************/

//Paste CDN here without the script tags

// Firebase imports
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// Database contains a direct reference to the Firebase Realtime Database
const database = getDatabase();

// References to HTML input feilds and buttons
var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");
var insertButton = document.querySelector("#insert");
var updateButton = document.querySelector("#update");
var removeButton = document.querySelector("#remove");
var findButton = document.querySelector("#find");

// Insert data into the database
function insertData() {}

// Finds data in the database
function findData() {}

// Updates the data at a specific ID
function updateData() {}

// Removes the data at a specific ID
function removeData() {}

// Event listeners for the buttons: these call the functions above when clicked
insertButton.addEventListener("click", insertData);
updateButton.addEventListener("click", updateData);
removeButton.addEventListener("click", removeData);
findButton.addEventListener("click", findData);
