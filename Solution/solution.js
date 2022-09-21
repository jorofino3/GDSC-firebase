/******************************************************************
 ***** Copy and paste your SDK setup and configuration below *****
 ******************************************************************/

//Paste CDN here without the script tags

// Initialization
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const database = getDatabase();

// References to HTML input fields
var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");

//Buttons
var insertButton = document.querySelector("#insert");
var updateButton = document.querySelector("#update");
var removeButton = document.querySelector("#remove");
var findButton = document.querySelector("#find");

// Insert data into the database
function insertData() {
  set(ref(database, "users/" + enterID.value), {
    name: enterName.value,
    age: enterAge.value,
  })
    .then(() => {
      console.log("Data saved successfully!");
      alert("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Something went wrong. Please try again later.");
    });
}

// Finds data in the database
function findData() {
  const dbref = ref(database);
  get(child(dbref, "users/" + findID.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findName.innerHTML = "Name: " + snapshot.val().name;
        findAge.innerHTML = "Age: " + snapshot.val().age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

// Updates the data at a specific ID
function updateData() {
  update(ref(database, "users/" + enterID.value), {
    name: enterName.value,
    age: enterAge.value,
  })
    .then(() => {
      console.log("Data updated successfully!");
      alert("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Something went wrong. Please try again later.");
    });
}

// Removes the data at a specific ID
function removeData() {
  remove(ref(database, "users/" + enterID.value))
    .then(() => {
      console.log("Data removed successfully!");
      alert("Data removed successfully!");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Something went wrong. Please try again later.");
    });
}

// Event listeners for the buttons: these call the functions above when clicked
insertButton.addEventListener("click", insertData);
updateButton.addEventListener("click", updateData);
removeButton.addEventListener("click", removeData);
findButton.addEventListener("click", findData);
