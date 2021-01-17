import fullpage from "fullpage.js"
import "./css/style.css"
import "../node_modules/fullpage.js/dist/fullpage.min.css"

var fullPageInstance = new fullpage("#fullpage", {
    autosScrolling: true,
    navigation: true,
    controlArrows: false,
    slidesNavigation: true
});

let hours_input = document.querySelector(".hours");
let minutes_input = document.querySelector(".minutes");
let seconds_input = document.querySelector(".seconds");

let button = document.querySelector(".boom");
button.addEventListener("click", Start);

function GetTimeInSeconds()
{
    let hours = hours_input.value;
    let minutes = minutes_input.value;
    let seconds = seconds_input.value;

    return hours*3600 + minutes*60 + seconds;
}

function Start()
{
    button.removeEventListener("click", Start);
    button.innerText = "Wait till the end";
    let timer = new Promise(function(resolve, reject)
    {
        let start_time = Date.now();
        let ref_time = start_time;
        let time_left_in_ms = GetTimeInSeconds()*1000;
        setInterval(function()
        {
            let dt = Date.now() - ref_time;
            ref_time += dt;
            time_left_in_ms = time_left_in_ms - dt;
            console.log(time_left_in_ms);
            if(time_left_in_ms < 0)
            {
                resolve();
            }

        }, 100);
    })

    timer.then(function()
    {
        alert('Time passed');
        button.addEventListener("click", Start);
        button.innerText = "Start";
        ms_timer.innerText = "";
    });
}

    const holes = document.querySelectorAll('.hole');
    let lastHole;
    let time;
    var points;
    function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole){
    return randomHole(holes);
}
    lastHole = hole;
    return hole;
}

    function pointsPlus()
    {
        points++;
        document.getElementById('points').innerHTML = "Score: " + points;
    }

    function timeIsUp()
    {
        time--;
        document.getElementById('timer').innerHTML = "Time: " + time;
    }

    document.getElementById('Start').addEventListener("click", () => {
    points = 0;
    time = 15;
    const startGame = setInterval(() =>
{

    let hole = randomHole(holes);

    document.getElementById('points').style.display='block';
    document.getElementById('points').innerHTML = "Score: " + points;
    document.getElementById('Grid').style.display='grid';
    document.getElementById('timer').innerHTML = "Time: " + time;
    document.getElementById('timer').hidden = false;
    let image = document.createElement("img");

    image.setAttribute("class", "mole")
    /*image.setAttribute("onclick", "pointsPlus()");*/
    image.addEventListener("click", pointsPlus);
    hole.appendChild(image);

    setTimeout(() => {
    hole.removeChild(image);
}, 545);
    timeIsUp();
    if (time === 0)
{
    clearInterval(startGame);
    document.getElementById('Grid').style.display='none';
    document.getElementById('timer').hidden = true;

}
}, 1000);
});