const { html } = require('common-tags');

function ExerciseCardFull({ baseID, name, description, category, primary, secondary, equipment, baseDataMuscle, baseDataEquipment }) {

    let muscleGroupTags = '';
    Object.values(baseDataMuscle.results).forEach(muscleGroup => {
        primary.forEach(muscleChoice => {
            if (muscleGroup.id === muscleChoice) {
                muscleGroupTags += `<div class="badge badge-success">${(muscleGroup.name_en == '') ? muscleGroup.name : muscleGroup.name_en}</div>`;
            }
        });
    });

    let muscleGroupTagsSecondary = '';
    Object.values(baseDataMuscle.results).forEach(muscleGroup => {
        secondary.forEach(muscleChoice => {
            if (muscleGroup.id === muscleChoice) {
                muscleGroupTags += `<div class="badge badge-accent">${(muscleGroup.name_en == '') ? muscleGroup.name : muscleGroup.name_en}</div>`;
            }
        });
    });

    let equipmentTags = '';
    Object.values(baseDataEquipment.results).forEach(equipmentGroup => {
        equipment.forEach(equipmentChoice => {
            if (equipmentGroup.id === equipmentChoice) {
                equipmentTags += `<div class="badge badge-outline">${equipmentGroup.name}</div>`;
            }
        });
    });

    return html`
    <div class="card max-w-2xl mx-auto mt-4 bg-base-100 shadow-xl">
        <figure class="bg-white" id="imgEx"></figure>
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <h6 class="hidden" id="imageID">${baseID}</h6>
            <p>${description.replace("<p>", "").replace("</p>", "").replace("\\n", "&#10;&#13;")}</p>
            <div class="card-actions flex flex-col">
                <div class="card-actions flex flex-col sm:flex-row justify-between pt-4 w-full">
                    <h2>Muscles Worked on:</h2>
                    <div class="flex flex-row justify-end">
                        ${muscleGroupTags}
                        ${muscleGroupTagsSecondary}        
                    </div>
                </div>
                <hr class="bg-slate-600 border-slate-600 w-full">
                <div class="card-actions w-full flex flex-col sm:flex-row justify-between">
                    <h2>Equipment:</h2>
                    <div class="flex flex-row justify-end">
                        ${equipmentTags}        
                    </div>
                </div
            </div>
        </div>
        </div>
    </div>`;
}

module.exports = ExerciseCardFull;