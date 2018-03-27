var hour = 0;
var min = 0;
var sec = 0;
var miliSec = 0;
var counter;

function callTimer() {
    miliSec++;
    if (miliSec <= 100) 
    {
        if (miliSec === 100) 
        {
            miliSec = 0;
            sec++;
            if (sec === 60)  
            {
                sec = 0;
                min++;
                if(min === 60)
                {
                    min = 0;
                    hour++;
                }
            }
        }
    }
     document.getElementById("timer").innerHTML =hour + " : " + min + " : " + sec + " : " + miliSec;
}


function start() {
    if(swatch.startbtn.value === "START")
    {
    counter = setInterval(callTimer, 10);
    swatch.startbtn.value= "STOP";
    }
    else
    {
        clearInterval(counter);
        swatch.startbtn.value = "START";
    }
}

function rst() {
    clearInterval(counter);
    swatch.startbtn.value = "START";
    hour = 0;
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML =hour + " : " + min + " : " + sec + " : " + miliSec;
}