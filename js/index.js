const select = document.querySelector(".select");
const selectTitle = document.querySelector(".select-title");
const selectList = document.querySelector(".select-list");
const selectItems = document.querySelectorAll(".select-item");

selectTitle.value=selectItems[0].innerHTML;
selectItems[0].classList.add("active")
selectTitle.style.fontWeight="600"
selectList.style.display="none"
const svgUp = document.querySelector(".up");
const svgDown = document.querySelector(".down");
svgUp.style.display="none";

selectItems.forEach(elem=>{
    elem.addEventListener("click",click)
})

window.addEventListener("click",(e)=>{
    if(e.target.classList.value !== "select-title") {
        selectTitle.style.display="block"
        selectList.style.display="none"
        svgUp.style.display="none";
        svgDown.style.display="block";
    }else {
        selectTitle.style.display="none"
        selectList.style.display="block"
        svgUp.style.display="block";
        svgDown.style.display="none";
    }
})

function click(e) {
    selectItems.forEach(elem=>{
        elem.classList.remove("active")
    })
    selectTitle.style.display="block"
    selectList.style.display="none"
    selectTitle.value=e.target.innerHTML;
    e.target.classList.add("active")
    svgUp.style.display="none";
    svgDown.style.display="block";
}


