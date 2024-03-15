document.getElementById("search").addEventListener('submit', event => {
    event.preventDefault();
    searchData("muscleGroup", "equipment");
});

function searchData(idMuscleGroup, idEquipGroup) {
    const muscleGroupValue = document.getElementById(idMuscleGroup).value;
    const equipValue = document.getElementById(idEquipGroup).value;

    let param1;
    if (muscleGroupValue != null) {
        param1 += `muscle=${muscleGroupValue}&`;
    }
    if (equipValue != null) {
        param1 += `equipment=${equipValue}&`;
    }

    const url = `https://wger.de/api/v2/exercise/?${param1}language=2&limit=442`;
    console.log(url);
    reloadData(url);
}

function reloadData(url) {
    const reloadDataLoc = document.getElementById("dataList");
    reloadDataLoc.innerHTML = '<h3 class="text-xl">Loading...</h1>';

    // let newData = ``;
    // await fetch(url).then(response => {
    //     Objects.values(response.results).foreach(ex => {
    //         if (ex.license_autor === "wger.de") {
    //             newData += createCard(ex.id, ex.name);
    //         }
    //     });
    // }).then(e => {
    //     reloadDataLoc.innerHTML = newData;
    // });
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