let button = document.getElementById("run__button");

button.addEventListener('click', onClick);

async function onClick() {
    let datetime = new Date();
    await browser.storage.local.set({ datetime });
}

async function init() {
    onClick();
}

init().catch(e => console.error(e));