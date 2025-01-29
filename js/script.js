const buttonSmartWatch = document.getElementById("buttonSmartWatch");
const clockSmartWatch = document.getElementById("canvas");
const swiperSmartWatch = document.getElementById("swiperSmartWatch");
const containerTimeDate = document.getElementById("containerTimeDate");
const buttonClock = document.getElementById("buttonClock");


// click button smart watch
buttonSmartWatch.addEventListener("click", (event) => {

    clockSmartWatch.style.display = "none";
    containerTimeDate.style.display = "block";
    swiperSmartWatch.style.display = "block";

})

// click button clock
buttonClock.addEventListener("click", (event) => {
    containerTimeDate.style.display = "none";
    swiperSmartWatch.style.display = "none";
    clockSmartWatch.style.display = "block";
});

// function time and date
const spanTime = document.getElementById("spanTime");
const spanDate = document.getElementById("spanDate");
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const time = new Date;
const mounthName = monthArray[time.getMonth()].substring(0, 3);
const mounthDay = time.getDay();
spanDate.innerText = mounthName + " " + mounthDay;
const hour = time.getHours();
const minute = time.getMinutes();
spanTime.innerHTML = hour + ":" + minute;

