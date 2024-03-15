const { html } = require('common-tags');

function ExerciseCard({ baseID, name }) {
    return html`<div class="card w-64 sm:w-96 bg-base-100 shadow-2xl border-solid border-neutral border-2 m-4 hover:border-accent transition-all ease-in-out">
        <a href="ex-base-${baseID}">
            <div class="card-body">
                <h2 class="card-title">
                    ${name}
                </h2>
            </div>
        </a>
    </div>`;
}

module.exports = ExerciseCard;