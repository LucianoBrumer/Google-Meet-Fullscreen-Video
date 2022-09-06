function fullScreen() {
    const video = document.querySelector('video')
    if (video.requestFullscreen) {
        video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
        video.msRequestFullscreen()
    }
}

(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: fullScreen,
    })
})()

window.close()