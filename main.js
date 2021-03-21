const images = document.querySelectorAll(".layer > img");
// console.log(images);

document.querySelector("#app").addEventListener("mousemove",(e)=>{
    let percentage = e.clientX /window.outerWidth;
    let offset = 10*percentage;
    let blur = 20;

    for(let[index,image] of images.entries()){
        offset *= 1.5;

        let blurValue = (Math.pow((index/length - percentage),2)*blur);

        image.style.setProperty('--offset','${offset}px');
        image.style.setProperty("--blur","${blurValue}px");
        // console.log(images.filter);
    }
})