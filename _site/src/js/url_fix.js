const repoURL = '/comm429-framework-app-v2'
const githubURL = 'https://georgecrochiere.github.io'
document.querySelectorAll('a').forEach(url => {
    if (url.href.startsWith(githubURL) && !url.href.includes(repoURL)) {
        url.href = githubURL + repoURL + url.href.substring(githubURL.length);
        console.log(url.href);
    }
});