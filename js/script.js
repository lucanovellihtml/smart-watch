const buttonSmartWatch = document.getElementById("buttonSmartWatch");
const clockSmartWatch = document.getElementById("canvas");
const swiperSmartWatch = document.getElementById("swiperSmartWatch");
const containerTimeDate = document.getElementById("containerTimeDate");
const buttonClock = document.getElementById("buttonClock");


// click button smart watch
buttonSmartWatch.addEventListener("click", (event) => {
    clockSmartWatch.style.display = "none";
    containerTimeDate.classList.remove("d-none");
    containerTimeDate.style.display = "block";
    swiperSmartWatch.style.display = "block";
})

// click button clock
buttonClock.addEventListener("click", (event) => {
    containerTimeDate.classList.add("d-none");
    swiperSmartWatch.style.display = "none";
    clockSmartWatch.style.display = "block";
});

// click button weather
buttonClock.addEventListener("click", (event) => {
    containerTimeDate.classList.add("d-none");
    swiperSmartWatch.style.display = "none";
    clockSmartWatch.style.display = "block";
});

// function time and date
const spanTime = document.getElementById("spanTime");
const spanDate = document.getElementById("spanDate");

function getNameMouth() {
    const time = new Date;
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const mounthName = monthArray[time.getMonth()].substring(0, 3);
    const mounthDay = time.getDay();
    spanDate.textContent = mounthName + " " + mounthDay;
}

function getHoursMinute() {
    const time = new Date;
    const hour = time.getHours();
    const minute = time.getMinutes();
    spanTime.textContent = hour + ":" + minute;
}

setInterval(getHoursMinute, 1000);

getNameMouth();
getHoursMinute();

// function number bpm
const numberBpm = document.getElementById("numberBpm");

function getNumberBpm() {
    const number = Math.floor(Math.random() * 180);
    numberBpm.textContent = number.toString() + " BPM";
}

setInterval(getNumberBpm, 1000);
getNumberBpm();