const hourElement = document.getElementById("hour")
const minuteElement = document.getElementById("minutes")
const secondElement = document.getElementById("seconds")
const amPMelement = document.getElementById("AmPM")

function updateClock (){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if (h > 12){
    h = h - 12
    ampm = "PM"
  }

  // The below three lines places a "0" in from of numbers less than 10. Gives it more of a "clock feel".
  h = h < 10 ? "0" + h: h;
  m = m < 10 ? "0" + m: m;
  s = s < 10 ? "0" + s: s;

// Places the get Time sources (hour, minutes, seconds) into the inner HTML text.
  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  amPMelement, (innerHTML = ampm);
  setTimeout(()=>{
  updateClock()
  },1000)
}

updateClock();