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
    formNote.style.display = "none";
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
const titleNote = document.getElementById("titleNote");
const formNote = document.getElementById("formNote");
const buttonFormNo = document.getElementById("buttonFormNo");
const buttonFormYes = document.getElementById("buttonFormYes");
const radioNote = document.createElement("input");
const containerListNote = document.createElement("div");
const labelNote = document.createElement("label");
const titleNoteListNotEmpty = document.getElementById("titleNoteListNotEmpty");
const arrayNotes = [];
var count = 0;

buttonNote.addEventListener("click", (event) => {
    containerTimeDate.classList.add("d-none");
    swiperSmartWatch.style.display = "none";
    containerNote.style.display = "block";
});

buttonAddNote.addEventListener("click", (event) => {
    containerNote.style.display = "none";
    formNote.style.display = "block";
});

buttonFormNo.addEventListener("click", (event) => {
    containerNote.style.display = "block";
    formNote.style.display = "none";
});

buttonFormYes.addEventListener("click", (event) => {
    titleNote.style.display = "none";
    formNote.style.display = "none";
    buttonAddNote.style.display = "none";
    containerNote.style.display = "block";
    titleNoteListNotEmpty.classList.remove("d-none");

    arrayNotes[count] = document.getElementById("textarea").value;
    count++;

    console.log(count);
    console.log(arrayNotes);

    if (count = 1) {

        for (let i = 0; i < arrayNotes.length; i++) {

            radioNote.classList.add("note-created");
            radioNote.setAttribute("type", "radio");
            radioNote.setAttribute("id", "elementNote");

            labelNote.textContent = arrayNotes[i];

            containerListNote.classList.add("d-flex", "gap-2", "mt-4", "ms-1", "note-created");
            containerListNote.appendChild(radioNote);
            containerListNote.appendChild(labelNote);

            containerNote.appendChild(containerListNote);



            containerNote.classList.remove("top-50", "start-50", "translate-middle", "position-absolute");
            containerNote.classList.add("mt-2");
        }
    }
});

radioNote.addEventListener("click", (event) => {

    if (radioNote.checked = true) {
        count = 0;
        arrayNotes.splice(1, 1);
        titleNote.style.display = "block";
        buttonAddNote.style.display = "block";
        radioNote.checked = false;
        labelNote.remove();
        radioNote.remove();
        containerListNote.remove();
        containerNote.classList.add("top-50", "start-50", "translate-middle", "position-absolute");
        containerNote.classList.remove("mt-2");
        titleNoteListNotEmpty.classList.add("d-none");
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