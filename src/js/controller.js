"use stict";
import calendarView from "./view/calendarView.js";
import * as eventModalView from "./view/eventModalView.js";
import * as iac from "./view/inputAutoCompleteView.js";
let nav = 0;

function load() {
  calendarView.getCalendar(nav);
}

export function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    calendarView.nextMonth();
    nav++;
    load();
  });

  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  document
    .getElementById("saveButton")
    .addEventListener("click", eventModalView.saveEvent);
  document
    .getElementById("cancelButton")
    .addEventListener("click", eventModalView.closeModal);
  document
    .getElementById("deleteButton")
    .addEventListener("click", eventModalView.deleteEvent);
  document
    .getElementById("closeButton")
    .addEventListener("click", eventModalView.closeModal);
}
export function validateKeyStrokes(e) {}

initButtons();
load();
