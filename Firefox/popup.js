async function onClick() {
    chrome.tabs.executeScript({
        file: "/content_script.js",
    })
    .catch(console.error.bind(console));
}

let button = document.getElementById("run__button");
button.addEventListener('click', onClick);