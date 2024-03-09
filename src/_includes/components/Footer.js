const { html } = require('common-tags')

function Footer({ sidebar }) {
    return html`
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <nav>
            <h6 class="footer-title text-accent">&copy; 2024. George D. Crochiere</h6> 
        </nav>
    </footer>
`;
}

module.exports = Footer;