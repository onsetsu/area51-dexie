function insertNavigation() {
    const div = document.createElement('div');
    document.currentScript.replaceWith(div);
    div.innerHTML = `
<a href="./zone.js.html">zone.js</a>
<a href="./dexie.html">Dexie Promises</a>
`;
}
