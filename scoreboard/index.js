
let incHome = document.getElementById("inc-home-el")
let incGuest = document.getElementById("inc-guest-el")

let homeTeamTitle = document.getElementById("home-team-title")

let guestTeamTitle = document.getElementById("guest-team-title")


let countGuest = parseInt(incGuest.textContent)
let countHome = parseInt(incHome.textContent)

winner(countHome,countGuest)

function incHomeHandle(job){
    countHome += job
   incHome.textContent = countHome;
    winner(countHome, countGuest)
    
}



function incGuestHandle(job){
      countGuest += job
   incGuest.textContent = countGuest;
     winner(countHome, countGuest)
    
}


function reset() {
    countHome = 0;
    countGuest = 0;
     incHome.textContent = 0;
 incGuest.textContent = 0;
 winner(0, 0)
}

function winner(homeCount, guestCount) {

    if(guestCount !== homeCount) {

        homeCount > guestCount ? (
            // homeTeamTitle.textContent = "👑" + homeTeamTitle.textContent
           
            (check(homeTeamTitle.textContent)=== true) ? (homeTeamTitle.textContent) : ("👑" + homeTeamTitle.textContent)
         ):
         (
            //  guestTeamTitle.textContent = "👑" + guestTeamTitle.textContent
             
             check(guestTeamTitle.textContent) ? (guestTeamTitle.textContent) : ("👑" + guestTeamTitle.textContent)
         )
    }
}


// check() ? homeTeamTitle.textContent : "👑" + homeTeamTitle.textContent

function check(input) {
    console.log(input)
    return input.includes('0x1F451') 
    
}