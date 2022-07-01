const dayInfo = document.getElementById("day-info");
const temp = document.getElementsByClassName("temp");
const minMaxTemp = document.getElementsByClassName("temp1");
const countryName = document.getElementsByClassName("country");
const weatherImage = document.getElementsByClassName("weather-image");
const btn = document.getElementsByClassName("btn");

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDay();
const month = date.getMonth();
const todayDate = date.getDate();
let meridian = "";

if (hours < 12) {
  meridian = "AM";
} else {
  meridian = "PM";
}

const allDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
currentDay = allDay[day];

const allMonth = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
currentMonth = allMonth[month];

dayInfo.innerHTML = `${currentDay} | ${currentMonth} ${todayDate} | ${hours} : ${minutes} ${meridian}`;

btn[0].addEventListener("click", async () => {
  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=haldwani&appid=4f27a2e8c82ed11fbb94c973dc52fd52";
  try {
    let data = await fetch(api);
    let realData = await data.json();
    let arrData = [realData];
    const value = arrData.map((val) => {
      changetemp(val);
    });
  } catch (error) {
    console.log("404 error");
  }
});

const changetemp = (realValue) => {
  temp[0].innerHTML = `<h4>${realValue.main.temp} &deg;K</h4>`;
  minMaxTemp[0].innerHTML = `<p>Min ${realValue.main.temp_min} &deg;K | Max ${realValue.main.temp_max} &deg;K
  </p>`;
  countryName[0].innerHTML = `<h1>${realValue.name} , ${realValue.sys.country}</h1>`;
};
