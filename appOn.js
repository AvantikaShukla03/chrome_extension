 (function(){
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    let media=document.querySelectorAll("img,vedio,picture");
    media.forEach((mediaItem)=>{
       mediaItem.style.filter="invert(1) hue-rotate(180deg)";
    })
 })
 ();

 