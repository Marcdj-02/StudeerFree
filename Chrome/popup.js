async function onClick() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);


    if(tab){
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
            },
            files: ["/content_script.js"],
        })
        .catch(console.error.bind(console));
    } else {
        console.error("No active tab found", tab);
    }
}

let button = document.getElementById("run__button");
button.addEventListener('click', onClick);