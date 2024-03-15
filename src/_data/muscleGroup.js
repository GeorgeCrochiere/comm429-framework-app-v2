const EleventyFetch = require("@11ty/eleventy-fetch");

async function getMuscleGroups() {
    const url = "https://wger.de/api/v2/muscle/";

    return EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
}

module.exports = getMuscleGroups;