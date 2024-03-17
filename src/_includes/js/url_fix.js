if (window.location.href.startsWith('https://georgecrochiere.github.io/')) {
    const repoURL = '/comm429-framework-app-v2'

    document.querySelectorAll('a').forEach(url => {
        if (url.href.startsWith('/')) {
            url.href = repoURL + url.href;
        }
    });
}