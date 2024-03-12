const { html } = require('common-tags')

function NavbarSide({ }) {
    title = "George D. Crochiere"
    navbarText = ["Developer's Blog", "Workout App"]
    navbarLinks = ["/blog", "/workout-app"]
    navListItems = ``;

    for (let i = 0; i < navbarText.length; i++) {
        navListItems += `<li><a href="${navbarLinks[i]}">${navbarText[i]}</a></li>\n`;
    }

    // Tpp: Mobile, Bottom: Regular
    return html`
    <div class="drawer md:hidden">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">

            <!-- Navbar -->
            <div class="flex flex-col w-full h-full navbar bg-primary">
            <div class="md:hidden">
                <ul class="menu">
                    <li>
                        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                            <span class="material-symbols-outlined">subject</span>
                        </label>
                    </li>
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
    
    <div class="w-max bg-primary hidden md:block">
        <ul class="menu">
            <li class="text-lg"><a href="/"><strong>${title}</strong></a></li>
            <li></li>
            ${navListItems}
        </ul>
    </div>
    `;
}

module.exports = NavbarSide;