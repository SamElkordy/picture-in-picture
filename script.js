const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(err) {
        // Handle Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();





// Button Script Start
$(window).ready(function(){
    $(".button").wrapInner('<div class=buttontext></div>');
        
        $(".buttontext").clone().appendTo( $(".button") );
        
        $(".button").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });
//button Script end