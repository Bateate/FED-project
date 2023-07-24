import calendarView from "./calendarView.js";
import * as timePicker from "./timePickerView.js";

const backDrop = document.getElementById("modalBackDrop");

let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

export function openModalView(date) {
  clicked = date;
  timePicker.getTimePicker(clicked);
  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    document.getElementById("eventTitle").innerText = eventForDay?.title;
    document.getElementById("eventTime").innerText = eventForDay.time
      ? eventForDay.time
      : "";
    document.getElementById("eventParticipants").innerText =
      eventForDay.participants ? eventForDay.participants : " ";
    document.getElementById("eventDetails").innerText = eventForDay.detail
      ? eventForDay.detail
      : "";

    deleteEventModal.style.display = "block";
  } else {
    newEventModal.style.display = "block";
  }

  backDrop.style.display = "block";
  backDrop.addEventListener("click", () => closeModal());
}

export function closeModal() {
  eventTitleInput.classList.remove("error");
  newEventModal.style.display = "none";
  deleteEventModal.style.display = "none";
  backDrop.style.display = "none";
  eventTitleInput.value = "";
  clicked = null;
  calendarView.getCalendar();
}

export function deleteEvent() {
  events = events.filter((e) => e.date !== clicked);
  localStorage.setItem("events", JSON.stringify(events));
  closeModal();
}

export function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove("error");

    events.push({
      date: clicked,
      title: eventTitleInput.value,
      time: timePicker.value,
      participants: newParticipants.value,
      detail: newDetail.value,
    });

    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add("error");
  }
}
