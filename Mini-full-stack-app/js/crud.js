/* <input id="name" placeholder="Enter the contact name">
    <input id="number" placeholder="Enter the contactnumber">
    <button id="Addbtn">Add</button>
    <input id="search" placeholder="Search the contact">
    <ul id="Contactlist"></ul> */
  import { url } from "../js/metadata.js";

const namey = document.getElementById("name");
const number = document.getElementById("number");
const Addbtn = document.getElementById("Addbtn");
const search = document.getElementById("search");
const contactlist = document.getElementById("Contactlist");

// CREATE
Addbtn.onclick = function () {
    const name = namey.value;

    fetch(`${url}.json`, {
        method: "POST",
        body: JSON.stringify({ name })
    })
    .then(() => {
        namey.value = "";
        rendertasks();
    });
};

// READ + RENDER
function rendertasks() {
    fetch(`${url}.json`)
    .then(res => res.json())
    .then(data => {
        contactlist.innerHTML = "";

        for (let key in data) {
            const li = document.createElement("li");
            li.textContent = data[key].name;
            contactlist.appendChild(li);
        }
    });
}

// Load the data when page opens
rendertasks();
