/** SET UP ENERGY AND AVOIDANCES **/

const energyLevel = document.getElementById("u-energy");
energyLevel.setAttribute("max", opponents.size.toString());
energyLevel.setAttribute("value", (opponents.size/2).toString());

let newAvoidance;
const avoidanceList = document.getElementById("avoidance-list")
for (let i = 0; i < opponents.size/2; i++) {
    newAvoidance = document.createElement("i");
    newAvoidance.classList.add("avoidance");
    newAvoidance.classList.add("nes-icon");
    newAvoidance.classList.add("is-medium");
    newAvoidance.classList.add("star");
    avoidanceList.appendChild(newAvoidance);
}

/** INITIAL OPPONENT **/

let i = 0;

let oppName = Array.from(opponents.keys())[i]
let oppRelation = opponents.get(oppName).relation
let oppImg = opponents.get(oppName).img

document.getElementById("o-name").innerText = oppName;
document.getElementById("o-relation").innerText = oppRelation;
document.getElementById("o-img").style.backgroundImage = "url('"+oppImg+"')";

/** MOVE ON TO NEXT OPPONENT **/

function nextOpponent(response) {
    if (response == "engage") {
        engage()
    }
    if (response == "avoid") {
        avoid()
    }
}

let remainingEnergy;

function engage() {
    if (i < opponents.size) {
        let randomNum = Math.random() * 100

        remainingEnergy = energyLevel.getAttribute("value");
        remainingEnergy = parseInt(remainingEnergy)
        switch(oppRelation) {
            case "friend":
                if(randomNum < 75) {
                    if (remainingEnergy + 1 <= opponents.size) {
                        remainingEnergy += 1
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                } else {
                    if (remainingEnergy - 1 >= 0) {
                        remainingEnergy -= 1
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                }
                break;
            case "associate":
                if(randomNum < 50) {
                    if (remainingEnergy + 2 <= opponents.size) {
                        remainingEnergy += 2
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                } else {
                    if (remainingEnergy - 2 >= 0) {
                        remainingEnergy -= 2
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                }
                break;
            case "stranger":
                if(randomNum < 25) {
                    if (remainingEnergy + 3 <= opponents.size) {
                        remainingEnergy += 3
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                } else {
                    if (remainingEnergy - 3 >= 0) {
                        remainingEnergy -= 3
                    }
                    energyLevel.setAttribute("value", remainingEnergy.toString());
                }
                break;
        }
        if (remainingEnergy > opponents.size/2) {
            if (energyLevel.classList.contains("is-warning")) {
                energyLevel.classList.remove("is-warning")
            }
            if (!energyLevel.classList.contains("is-success")) {
                energyLevel.classList.add("is-success")
            }
        } else {
            if (energyLevel.classList.contains("is-success")) {
                energyLevel.classList.remove("is-success")
            }
            if (!energyLevel.classList.contains("is-warning")) {
                energyLevel.classList.add("is-warning")
            }
        }
        moveToNext()
    }
}
let currStars = document.getElementsByClassName("avoidance");
function avoid() {
    if (currStars.length > 0 && i < opponents.size) {
        currStars[currStars.length-1].classList.add("is-transparent")
        currStars[currStars.length-1].classList.remove("avoidance")
        moveToNext()
    }
}

function moveToNext() {
    i++

    if (Array.from(opponents.keys())[i] == null) {
        document.getElementsByClassName("opponent")[0].style.display = "none";
        document.getElementsByClassName("menu")[0].style.display = "none";
        let curr = energyLevel.getAttribute("value");
        document.getElementById("energyTotal").innerText = ((parseInt(curr)/opponents.size) * 100).toString() + "%";
        document.getElementById("avoidancesTotal").innerText = document.getElementsByClassName("avoidance").length.toString();
        document.getElementById("final-screen").style.display = "block";
    } else {
        oppName = Array.from(opponents.keys())[i]
        oppRelation = opponents.get(oppName).relation
        oppImg = opponents.get(oppName).img
        document.getElementById("o-name").innerText = oppName
        document.getElementById("o-relation").innerText = oppRelation
        document.getElementById("o-img").style.backgroundImage = "url('"+oppImg+"')";
    }
}