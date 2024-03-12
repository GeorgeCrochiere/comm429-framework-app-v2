const { html } = require('common-tags')

function NavbarTop({ }) {
    title = "George D. Crochiere Dev Page"
    navbarText = ["Developer's Blog", "Workout App"]
    navbarLinks = ["/blog", "/workout-app"]
    navListItems = ``;

    for (let i = 0; i < navbarText.length; i++) {
        navListItems += `<li><a href="${navbarLinks[i]}">${navbarText[i]}</a></li>\n`;
    }

    return html`
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">

            <!-- Navbar -->
            <div class="w-full navbar bg-primary"> 
            <div class="flex-1 px-2 mx-2 font-bold"><ul class="menu p-1 text-lg"><li><a href="/">${title}</a></li></ul></div>
            <div class="flex-none md:hidden">
                <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div class="flex-none hidden md:block">
                <ul class="menu menu-horizontal">
                <!-- Navbar menu content here -->
                ${navListItems}
                </ul>
            </div>
            </div>
        </div> 
        <div class="drawer-side z-40">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
            <ul class="menu p-4 w-max min-h-full bg-base-200">
            <!-- Sidebar content here -->
            <li><a href="/"><strong>${title}</strong></a></li>
            <li></li>
            ${navListItems}
            </ul>
        </div>
        </div>
    `;
}

module.exports = NavbarTop;