loadImage(document.getElementById("imageID").innerText)

async function loadImage(baseID) {
    const url = `https://wger.de/api/v2/exerciseimage/?exercise_base=${baseID}&limit=1`;
    const imageResult = document.getElementById("imgEx");

    await fetch(url).then(data => data.json()).then(response => {
        console.log(response);
        imageResult.innerHTML = `<img class="w-72" src="${response.results[0].image}" alt="Exercise Image">`;
    });
}