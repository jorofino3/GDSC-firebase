// Cant get the script tag to work
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDha1SooUPDUg_nbn_ZCUCxqd8muuYfZ_c",
  authDomain: "database-48bf3.firebaseapp.com",
  databaseURL: "https://database-48bf3-default-rtdb.firebaseio.com",
  projectId: "database-48bf3",
  storageBucket: "database-48bf3.appspot.com",
  messagingSenderId: "701969469360",
  appId: "1:701969469360:web:3a784ca119a50f24ecd075",
  measurementId: "G-TJTPNRKR91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
const db = getDatabase();
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

function insertData() {
  set(ref(db, "users/" + enterID.value), {
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
function findData() {
  const dbref = ref(db);
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
function updateData() {
  update(ref(db, "users/" + enterID.value), {
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

function removeData() {
  remove(ref(db, "users/" + enterID.value))
    .then(() => {
      console.log("Data removed successfully!");
      alert("Data removed successfully!");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Something went wrong. Please try again later.");
    });
}
insertButton.addEventListener("click", insertData);
updateButton.addEventListener("click", updateData);
removeButton.addEventListener("click", removeData);
findButton.addEventListener("click", findData);
