const EleventyFetch = require("@11ty/eleventy-fetch");

async function getBaseExercises() {
    const url = "https://wger.de/api/v2/exercise/?language=2&limit=442";

    finalResults = [];

    await EleventyFetch(url, {
        duration: "1d",
        type: "json"
    }).then(response => {
        Object.values(response.results).forEach(ex => {
            if (ex.license_author === "wger.de") {
                finalResults.push(ex);
            }
        });
    });
    return { "results": finalResults };
}

module.exports = getBaseExercises;