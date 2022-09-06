function loop(){
    const div = document.querySelector('[data-ssrc]')
    let ready

    if(div){
        const data = div.getAttribute("data-ssrc")
        // console.log(data)
        if(data !== 'undefined'){
            // console.log('ready!');
            const video = div.querySelector('video')
            // const video = div.firstChild

            if(video !== null){
                ready = true
                // console.log('add');
                div.addEventListener('click', el => {
                    // console.log('click');
                    if (video.requestFullscreen) {
                        video.requestFullscreen()
                    } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen()
                    } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen()
                    }
                })
            }
        }
    }

    if(!ready) setTimeout(loop, 500)
}
loop()