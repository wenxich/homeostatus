/** TEACHABLE MACHINE **/

// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "model/";

let model, webcam, labelContainer, maxPredictions, lastPrediction;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
    submitBtn.style.display = "block";
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

async function stop() {
    await webcam.stop();
    document.getElementById("webcam-container").removeChild(webcam.canvas);

    labelContainer = document.getElementById("label-container");

    labelContainer.removeChild(labelContainer.children[0]);

    //Hiding containers
    document.getElementById("webcam-container").className = "d-none";
    document.getElementById("label-container").className = "d-none";

}

// run the webcam image through the image model
async function predict() {
    if (!startCamFlag) {
        let highestProbability;
        let lastProbability = 0;
        // predict can take in an image, video or canvas html element

        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) > lastProbability)
                highestProbability = i;
            lastProbability = prediction[i].probability.toFixed(2);
            if (prediction[highestProbability] != null) {
                const predictionName = prediction[highestProbability].className;
                labelContainer.childNodes[0].innerHTML = "Current response: "+predictionName;
                lastPrediction = predictionName;
            }
        }
    } else {
        labelContainer.childNodes[0].innerHTML = "Your response was: "+lastPrediction;
        switch(lastPrediction) {
            case "nothing":
                invalidResponse.style.display = "block";
                break;
            case "engage":
                validResponse.style.display = "block";
                break;
            case "avoid":
                validResponse.style.display = "block";
                break;
        }
        if (document.getElementById("no-more-avoids").style.display == "block") {
            document.getElementById("no-more-avoids").style.display = "none"
        }
    }
}

/** HANDLING EVENTS **/

let startCamFlag = true;
let validResponse = document.getElementById("valid-response");
let invalidResponse = document.getElementById("invalid-response");
let submitBtn = document.getElementById("submit-btn");

function startCamHandler() {
    invalidResponse.style.display = "none";
    if (startCamFlag) {
        init();
    } else {
        stop();
        submitBtn.style.display = "none";
    }
    startCamFlag = !startCamFlag;
}

function submitHandler() {
    stop();
    submitBtn.style.display = "none";
    document.getElementById("cam-checkbox").checked = false;
    startCamFlag = !startCamFlag;
}

function handleValidYes() {
    if (lastPrediction == "avoid" && currStars.length == 0) {
        handleNoMoreAvoids()
    } else {
        if (i >= opponents.size - 1) {
            nextOpponent(lastPrediction)
        } else {
            nextOpponent(lastPrediction)

            document.getElementById("cam-checkbox").checked = true;
            init()
            startCamFlag = !startCamFlag;
            validResponse.style.display = "none";
        }
    }
}

function handleValidNo() {
    document.getElementById("cam-checkbox").checked = true;
    init()
    startCamFlag = !startCamFlag;
    validResponse.style.display = "none";
}

function handleNoMoreAvoids() {
    document.getElementById("no-more-avoids").style.display = "block";
    document.getElementById("cam-checkbox").checked = true;
    init()
    startCamFlag = !startCamFlag;
    validResponse.style.display = "none";
}