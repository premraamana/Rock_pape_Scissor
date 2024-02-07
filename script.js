 //const audio = new Audio('animation things/caraudio.mp3'); var resp = audio.play();
 //if(resp != undefined){     resp.then(_ => {
   //      autoplay starts
     //}).catch(error => {
       //  shoe error
     //});
 //}
 //audio.loop()=true;

var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src="animation/caraudio.mp3"


document.body.addEventListener("mousemove", function(){
    audio.play();
    audio.loop();
})