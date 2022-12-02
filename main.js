let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let huerotate = document.getElementById("hue-rotate")
let download = document.getElementById("image")
let uplaod = document.getElementById("uplaod")
let img = document.getElementById("img")
let reset = document.getElementById("reset")
let imgbox = document.getElementById("img-box")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
function resetvalue(){
    img.style.filter = "none"
    contrast.value= "100"
    brightness.value="100"
    saturate.value = "100"
    sepia.value="0"
    grayscale.value = "0"
    blur.value = "0"
    huerotate.value = "0"
}

window.onload = function(){
  
    reset.style.display = "none";
    download.style.display = "none";
    // imgbox.style.display = "none";
}
uplaod.onchange =function(){
    resetvalue()
    download.style.display = "block";
    reset.style.display = "block";
    let file = new FileReader();
    file.readAsDataURL(uplaod.files[0])
    file.onload= function(){
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)
        img.style.display = "none"
    }
}



let filters = document.querySelectorAll("ul li input");
filters.forEach( filter=>{
    filter.addEventListener('input' , function(){
       ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        `
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)
    })
})
download.onclick = function(){
    download.href = canvas.toDataURL()
}