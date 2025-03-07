const btn = document.querySelector("button");
const jokeContainer = document.querySelector("#joke-container");
const loadingPara = document.querySelector("p");
const jokePara = document.createElement("p");
const APIKEY = "EACPPhqMH4hQwbyYWnkfuw==6eGCb9ERKgRYHoxZ";

btn.addEventListener("click", getJoke);

async function getJoke() {
    btn.disabled = true;
    loadingPara.classList.add("visible");
    jokePara.innerText = "";
    try {
        const header = {
            headers: { "X-Api-Key": "EACPPhqMH4hQwbyYWnkfuw==6eGCb9ERKgRYHoxZ" },
        };
        const url = "https://api.api-ninjas.com/v1/dadjokes";
        const dadjoke = await fetch(url, header);
        const result = await dadjoke.json();
        displayJoke(result);
    }catch(error){
        console.log(error);
        loadingPara.innerText = "An error happened, try again later";
        loadingPara.style.color = "red";
    }
}

function displayJoke(result) {
    loadingPara.classList.remove("visible");
    loadingPara.classList.add("hidden");
    jokeContainer.innerHTML = "";
    console.log(result[0].joke);

    jokePara.innerText = result[0].joke;
    jokeContainer.append(jokePara);
    btn.disabled = false;
}
