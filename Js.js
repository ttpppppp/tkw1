let up = document.querySelector(".up");
let listLi = document.querySelectorAll(".item");
let resumeLeft = document.getElementById("resume-left");
let resumeRight = document.getElementById("resume-right");
let map = document.querySelector(".map");
let form = document.querySelector(".form");
let title = document.querySelector(".title-felling");
let contentFel = document.querySelector(".container-feeling");
let contentleft = document.querySelector(".content-left");
let contentRight = document.querySelector(".content-right");
let test = document.querySelector(".test");
contentleft.classList.add("resume-animationLeft");
contentRight.classList.add("resume-animationRight");
document.addEventListener('scroll' , function(){
    if(scrollY > 50){
        up.classList.add("up-animation");
    }else{
        up.classList.remove("up-animation");
    }
    if(scrollY < 419){
        contentleft.classList.add("resume-animationLeft");
        contentRight.classList.add("resume-animationRight");
    }else{
        contentleft.classList.remove("resume-animationLeft");
        contentRight.classList.remove("resume-animationRight");
    }
    if(scrollY > 180){
        resumeLeft.classList.add("resume-animationLeft");
        resumeRight.classList.add("resume-animationRight");
    }else{
        resumeLeft.classList.remove("resume-animationLeft");
        resumeRight.classList.remove("resume-animationRight");
    }
    if(scrollY > 670){
        title.classList.add("resume-animationLeft");
        contentFel.classList.add("resume-animationBottom");
        test.classList.add("resume-animationRight");
    }else{
        title.classList.remove("resume-animationLeft");
        contentFel.classList.remove("resume-animationBottom");
        test.classList.remove("resume-animationRight");
    }
    if(scrollY > 1450){
        map.classList.add("resume-animationLeft");
        form.classList.add("resume-animationRight");
    }else{
        map.classList.remove("resume-animationLeft");
        form.classList.remove("resume-animationRight");
    }
    console.log(scrollY);
})
listLi.forEach(item => {
    item.addEventListener('click', function() {
        listLi.forEach(otherItem => {
            otherItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});
