document.querySelectorAll("code.language-njk").forEach(codeBlock => {
    let str = codeBlock.innerHTML;
    str = str.replaceAll('---', '<span class="njk-layout-boundry">---</span>');
    str = str.replaceAll(/([a-z]+:)( [a-zA-Z \/.]+)/g, '<span class="njk-layout-name">$1</span><span class="njk-layout-parameter">$2</span>');
    str = str.replaceAll(/([a-z]+:)( [0-9]+)/g, '<span class="njk-layout-name">$1</span><span class="njk-layout-number">$2</span>');
    str = str.replaceAll(/([a-z]+:\n)/g, '<span class="njk-layout-name">$1</span>');
    str = str.replaceAll('{/{', '<span class="njk-layout-boundry">{{</span>');
    str = str.replaceAll('}}', '<span class="njk-layout-boundry">}}</span>');
    str = str.replaceAll(/(&lt;\/*)([hr1p]+)(\/*&gt;)/g, '<span class="njk-layout-boundry">$1</span><span class="njk-layout-name">$2</span><span class="njk-layout-boundry">$3</span>');
    str = str.replaceAll(/\[([0-9]+)\]/g, '<span class="njk-layout-indexing">[</span>$1<span class="njk-layout-indexing">]</span>');
    codeBlock.innerHTML = str;
});