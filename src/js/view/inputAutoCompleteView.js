import { suggestions } from "../suggestions.js";
import { openModalView } from "../view/eventModalView.js";

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events")).map((e) => e.title)
  : suggestions;
inputBox.addEventListener("onkeypress", (e) => {
  var charCode = e.which ? e.which : e.keyCode;
  console.log("1");
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});
inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = events.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].addEventListener("click", (data) => {
        select(data);
      });
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};

function select(element) {
  openModalView(element);
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    let userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

export function setListData(data) {
  events = data;
}
