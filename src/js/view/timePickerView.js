const timePicker = document.getElementById("newEventTime");

export function getTimePicker(date) {
  timePicker.innerHTML = "";
  let hourPicker = document.createElement("select");
  hourPicker.id = "timePicker";
  hourPicker.classList = null;
  hourPicker.classList.add("hour-select");
  if (date) {
    let day = document.createElement("div");
    day.innerText = date;
    timePicker.appendChild(day);
  }

  // hourPicker.value = 1;
  for (let i = 1; i < 25; i++) {
    let option = document.createElement("option");
    hourPicker.classList = null;
    hourPicker.classList.add("hour-option");
    option.value = `${date} ${i}h`;
    option.label = `${i}h`;
    hourPicker.appendChild(option);
  }
  timePicker.appendChild(hourPicker);
}
