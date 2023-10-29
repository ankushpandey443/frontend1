// const cards = document.querySelectorAll(".card");
// const observer = new IntersectionObserver(entries=>{
//    entries.forEach(entry=>{
//     entry.target.classList.toggle("show",entry.isIntersecting);
//    })
// },{
//     threshold:1
// })
// cards.forEach(card=>{
//     observer.observe(card);
// })
var a=document.querySelector(".image");
var img=document.querySelector("div.image img");
var two=document.querySelector(".two");
var drawing = document.querySelector(".drawing");
var flag=false;
const observer = new IntersectionObserver(entries=>{
    console.log(entries);
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        flag=true;
        ani();
        }else{
            flag=false;
        }

    })
},{
    threshold:0.1,
    rootMargin:'300px'
})
observer.observe(two);
function ani(){
    if(!flag)return;
    var rect=a.getBoundingClientRect();
    if(rect.top>window.innerHeight||rect.top<0){
        // window.innerHeight/4
    //    console.log(rect.top,window.innerHeight,window.innerHeight/2);
    }else{
        // console.log("hnji");
        // console.log(rect.top,window.innerHeight/2);
        var x=(window.innerHeight-rect.top)/window.innerHeight;
        img.style.transform=`scale(${2-x})`;
    }
    requestAnimationFrame(ani);
}
document.addEventListener("mousemove",(event)=>{
    // drawing.style.top=`${event.clientY}px`;
    // drawing.style.left=`${event.clientX}px`;
    handleMovement(event);
})
function handleMovement(event){
    setTimeout(()=>{
        drawing.style.top=`${event.clientY-10}px`;
        drawing.style.left=`${event.clientX-10}px`;
    },100);
}