let thisYearMonths = getMonths(new Date());
let calendar = {
  month: { id: 0, name: "" },
  days: [
    {
      id: 0,
      date: {
        weekDay: 0,
        day: 0,
        month: 0,
      },
      class: "day",
      events: [],
    },
  ],
  weekDays: [
    { name: "Sunday", title: "Sun", id: 0 },
    { name: "Monday", title: "Mon", id: 1 },
    { name: "Tuesday", title: "Tus", id: 2 },
    { name: "Wednesday", title: "Wed", id: 3 },
    { name: "Thusday", title: "Thu", id: 4 },
    { name: "Friday", title: "Fri", id: 5 },
    { name: "Saturday", title: "Sat", id: 6 },
  ],
};
let focusedDay;
export function getCalendar(day = focusedDay) {
  const fd = new Date(day.getFullYear() + "-" + (day.getMonth() + 1) + "-01");
  let idZeroDay = new Date();
  let month = 1;
  for (let i = 0; i < 42; i++) {
    if (day.getMonth() - 1 >= 0) {
      idZeroDay = new Date(
        day.getFullYear() +
          "-" +
          day.getMonth() +
          "-" +
          (thisYearMonths[fd.getMonth()].days - fd.getDay)
      );
      month = thisYearMonths[day.getMonth() - 1].id;
    } else {
      month = 11;
    }
    calendar[i] = new Date(day.getFullYear() + "-" + month + idZeroDay);
  }
  console.log("CALsENDAR", calendar);
}

export function getMonths(day) {
  let months = [
    { id: 0, name: "January", title: "Jan", days: 31 },
    { id: 1, name: "February", title: "Feb", days: 28 },
    { id: 2, name: "March", title: "Mar", days: 31 },
    { id: 3, name: "April", title: "Apr", days: 30 },
    { id: 4, name: "May", title: "May", days: 31 },
    { id: 5, name: "June", title: "Jun", days: 30 },
    { id: 6, name: "July", title: "Jul", days: 31 },
    { id: 7, name: "August", title: "Aug", days: 31 },
    { id: 8, name: "September", title: "Sep", days: 30 },
    { id: 9, name: "October", title: "Oct", days: 31 },
    { id: 10, name: "November", title: "Nov", days: 30 },
    { id: 11, name: "December", title: "Dec", days: 31 },
  ];
  let leapyear =
    new Date(day.getFullYear() + "-02-29").getMonth() == 1 ? true : false;
  if (leapyear) {
    months[1].days = 29;
  }
  return months;
}

export function setFocusDay(day) {
  let res = new Date();
  if (day) {
    res = new Date(
      day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
    );
  }
  focusedDay = res;
  getCalendar();
  return res;
}

export function getDay(year, month, day) {
  return new Date(year + "-" + month + "-" + day);
}
