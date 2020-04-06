function stack(omit=stack) {
    const s = {};
    Error.captureStackTrace(s, omit);
    return s.stack.split('\n').slice(1).join('\n');
}

function log(x) {
    let con = document.body.querySelector('#log');
    if (!con) {
        document.body.innerHTML += `<div id="log"></div>`;
        return log(x);
    }

    con.innerHTML += `<div class="entry">${x}</div>`.replace(/\n/gm, '<br />').replace(/<root>/gm, '&lt;root>');
}

function logStack(title) {
    let msg = title ? title + '\n' : '';
    msg += stack(logStack);
    log(msg);
}

function hr() {
    log('<hr />');
}

function cLog(c) {
    return function l(msg) {
        return log(`<span style='background-color: ${c}'>${msg}</span>`);
    }
}

