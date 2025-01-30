const buttonSmartWatch = document.getElementById("buttonSmartWatch");
const clockSmartWatch = document.getElementById("canvas");
const swiperSmartWatch = document.getElementById("swiperSmartWatch");
const containerTimeDate = document.getElementById("containerTimeDate");


// click button smart watch
buttonSmartWatch.addEventListener("click", (event) => {
    clockSmartWatch.style.display = "none";
    containerTimeDate.classList.remove("d-none");
    containerTimeDate.style.display = "block";
    swiperSmartWatch.style.display = "block";
    containerNote.style.display = "none";
})

// click button clock
const buttonClock = document.getElementById("buttonClock");

buttonClock.addEventListener("click", (event) => {
    containerTimeDate.classList.add("d-none");
    swiperSmartWatch.style.display = "none";
    clockSmartWatch.style.display = "block";
});



// click button note
const buttonNote = document.getElementById("buttonNote");
const containerNote = document.getElementById("containerNote");
const buttonAddNote = document.getElementById("buttonAddNote");
const formNote = document.getElementById("formNote");
const buttonFormNo = document.getElementById("buttonFormNo");
const buttonFormYes = document.getElementById("buttonFormYes");
const containerNoteNotEmpty = document.getElementById("containerNoteNotEmpty");

buttonNote.addEventListener("click", (event) => {
    containerTimeDate.classList.add("d-none");
    swiperSmartWatch.style.display = "none";
    containerNote.style.display = "block";
});

buttonAddNote.addEventListener("click", (event) => {
    containerNote.style.display = "none";
    formNote.style.display = "block";
});

buttonFormYes.addEventListener("click", (event) => {
    const arrayNotes = [];
    var count = 0;
    arrayNotes[count] = document.getElementById("textarea").value;
    count++;
    containerNote.style.display = "block";
    formNote.style.display = "none";


    if (count = 1) {
        titleNote.style.display = "none";
        buttonAddNote.style.display = "none";
        for (let i = 0; i < arrayNotes.length; i++) {

            const radioNote = document.createElement("input");
            radioNote.classList.add("note-created");
            radioNote.setAttribute("type", "radio");

            const titleNote = document.createElement("div");
            titleNote.textContent = arrayNotes[i];

            const containerListNote = document.createElement("div");
            containerListNote.classList.add("d-flex");
            containerListNote.classList.add("gap-2");
            containerListNote.classList.add("mt-4");
            containerListNote.classList.add("ms-1");
            containerListNote.classList.add("note-created");
            containerListNote.appendChild(radioNote);
            containerListNote.appendChild(titleNote);

            containerNoteNotEmpty.appendChild(containerListNote);

        }
    }
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