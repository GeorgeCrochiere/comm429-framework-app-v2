function runSearch(id1, id2) {
    event.preventDefault();
    searchData(id1, id2);
}

function searchData(idMuscleGroup, idEquipGroup) {
    const muscleGroupValue = document.getElementById(idMuscleGroup).value;
    const equipValue = document.getElementById(idEquipGroup).value;

    let param1 = '';
    if (muscleGroupValue != -1) {
        param1 += `muscles=${muscleGroupValue}&`;
    }
    if (equipValue != -1) {
        param1 += `equipment=${equipValue}&`;
    }

    const url = `https://wger.de/api/v2/exercise/?${param1}language=2&limit=442`;
    console.log(url);
    reloadData(url);
}

async function reloadData(url) {
    const reloadDataLoc = document.getElementById("dataList");
    reloadDataLoc.innerHTML = '<h3 class="text-xl">Loading...</h1>';

    let newData = ``;
    await fetch(url).then(data => data.json())
        .then(response => {
            response.results.forEach(ex => {
                if (ex.license_author === "wger.de") {
                    newData += createCard(ex.id, ex.name);
                }
            });
            if (newData == '') {
                newData = '<h3 class="text-xl">Looks like there\'s nothing here...</h1>'
            }
            reloadDataLoc.innerHTML = newData;
        });
}

function createCard(baseID, name) {
    return `<div class="card w-64 sm:w-96 bg-base-100 shadow-2xl border-solid border-neutral border-2 m-4 hover:border-accent transition-all ease-in-out">
        <a href="ex-base-${baseID}">
            <div class="card-body">
                <h2 class="card-title">
                    ${name}
                </h2>
            </div>
        </a>
    </div>
    `;
}