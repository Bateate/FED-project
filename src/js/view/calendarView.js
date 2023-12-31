import * as eventModalView from "./eventModalView.js";
let nav = 0;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];
const days = document.getElementById("calendarDays");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
class CalendarView {
  getCalendar(nav = this.nav) {
    this.nav = nav;
    const dt = new Date();
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
    const placesInCalendar =
      paddingDays + daysInMonth + (7 - ((paddingDays + daysInMonth) % 7));
    document.getElementById(
      "monthDisplay"
    ).innerText = `${dt.toLocaleDateString("en-us", {
      month: "long",
    })} ${year}`;
    days.innerHTML = ``;
    let weekDiv = document.createElement("div");
    weekDiv.classList.add("week-row");
    for (let i = 1; i <= placesInCalendar; i++) {
      const daySquare = document.createElement("div");
      daySquare.classList.add("day");

      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      const dayOfTheWeek = i % 7;

      if (i > paddingDays && i <= daysInMonth + paddingDays) {
        daySquare.innerText = i - paddingDays;
        const eventForDay = events.find((e) => e.date === dayString);
        daySquare.id = i - paddingDays;
        if (i - paddingDays === day && nav === 0) {
          daySquare.classList.add("currentDay");
        }

        if (eventForDay) {
          const eventDiv = document.createElement("div");
          eventDiv.classList.add("event");
          let title = document.createElement("h3");
          title.innerText = eventForDay.title;
          eventDiv.appendChild(title);
          let time = document.createElement("div");
          time.innerText = eventForDay.time;
          eventDiv.appendChild(time);
          let participants = document.createElement("div");
          participants.innerText = eventForDay.participants;
          eventDiv.appendChild(participants);
          let detail = document.createElement("div");
          detail.innerText = eventForDay.detail;
          eventDiv.appendChild(detail);
          // eventDiv.innerText = eventForDay.title;
          daySquare.appendChild(eventDiv);
        }

        daySquare.addEventListener("click", () =>
          eventModalView.openModalView(dayString)
        );
      } else {
        daySquare.classList.add("padding");
      }
      if (dayOfTheWeek > 0) {
        weekDiv.appendChild(daySquare);
      } else {
        weekDiv.appendChild(daySquare);
        days.appendChild(weekDiv);
        weekDiv = document.createElement("div");
        weekDiv.classList.add("week-row");
      }
    }
  }
  nextMonth() {}
}

export default new CalendarView();
