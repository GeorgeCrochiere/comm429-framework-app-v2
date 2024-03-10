const { html } = require('common-tags')

function BlogCard({ title, date, description, author, categories, link }) {
    let dateData = new Date(date);
    dateData.setDate(dateData.getDate() + 1) // Account for day-1 bug

    let catData = ``;
    if (categories != null) {
        Object.values(categories).forEach(cat => {
            catData += `<div class="badge badge-outline">${cat}</div>`;
        });
    }

    return html`
    <div class="card w-64 md:w-96 bg-base-100 shadow-2xl border-solid border-neutral border-2 m-4 hover:border-accent transition-all ease-in-out">
        <a href="${link}">    
            <div class="card-body">
                <h2 class="card-title">
                    ${title}
                </h2>
                <p>${description}</p>
                <div class="flex flex-col md:flex-row justify-between pt-4">
                    <div class="badge badge-success mb-1">${dateData.toDateString()}</div>
                    <div class="badge badge-accent">${author}</div>
                </div>
                <hr class="bg-stone-600 border-stone-600">
                <div class="card-actions">
                    ${catData}
                </div>
            </div>
        </a>
    </div>
`;
}

module.exports = BlogCard;