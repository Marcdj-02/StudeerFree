function scrub() {
    var popup = document.getElementsByClassName("_3182a7ef6737");
    if(popup.length > 0) popup[0].remove();

    var premiumBanners1 = document.getElementsByClassName("_9ea0e861bc8e");

    for(var i = 0; i < premiumBanners1.length; i += 1){
    premiumBanners1[i].remove();
    }

    var premiumBanners2 = document.getElementsByClassName("_d18a99c0d544");

    for(var i = 0; i < premiumBanners2.length; i += 1){
    premiumBanners2[i].remove();
    }

    var length = 163;
    for(var page = 1; page <= length; page += 1){
    var hex = page.toString(16);
    var pageContents = document.getElementsByClassName(`pc${hex}`);
    var parent = document.getElementById(`pf${hex}`);

    if(pageContents.length > 0 && parent){
        parent.appendChild(pageContents[0]);
    }
    }
}

browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'datetime' in changes){
        scrub();
    }
})

scrub();