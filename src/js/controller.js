"use stict";
import calendarView from "./view/calendar/calendarView.js";

const controlerCalendar = function () {
  calendarView.render(1);
};
const init = function () {
  calendarView.addHandlerRender(controlerCalendar());
};
init();
