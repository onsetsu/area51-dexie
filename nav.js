function insertNavigation() {
    const div = document.createElement('div');
    document.currentScript.replaceWith(div);
    div.innerHTML = `
<a href="./area51.html">area51</a>
<a href="./zone.js.html">zone.js</a>
<a href="./2nd-zone.js.html">2nd-zone.js</a>
<a href="./dexie.html">Dexie Promises</a>
`;
}
