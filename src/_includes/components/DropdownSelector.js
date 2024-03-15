const { html } = require('common-tags')

function DropdownSelector({ title, results, altNameBool, formID }) {

    let optionList = ``;

    Object.values(results).forEach(element => {
        let optionName = element.name;
        if (altNameBool == true) {
            if (element.name_en != '') {
                optionName = element.name_en;
            }
        }
        optionList += `<option value="${element.id}">${optionName}</option>\n`
    })

    return html`
    <select class="select select-accent w-full max-w-xs" id=${formID}>
        <option selected value=-1>Filter by ${title}</option>
        ${optionList}
    </select>
`;
}

module.exports = DropdownSelector;