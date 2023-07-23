import View from "../View.js";
import * as cal from "./calendar.js";

class CalendarView extends View {
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    console.log("cal.setFocusDay(new Date());", cal.setFocusDay(new Date()));
    cal.setFocusDay(new Date());
    cal.getCalendar();
    document.querySelector(".calendar").innerHTML = ``;
  }
}

export default new CalendarView();
