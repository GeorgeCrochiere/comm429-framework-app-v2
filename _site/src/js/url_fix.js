if (window.location.href.startsWith('http://localhost')) {
    const repoURL = '/comm429-framework-app-v2'
    const githubURL = 'https://georgecrochiere.github.io'
    document.querySelectorAll('a').forEach(url => {
        if (url.href.startsWith(githubURL)) {
            url.href = githubURL + repoURL + url.href.substrig(githubURL.length);
        }
    });
}