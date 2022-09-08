const selectTitle = document.querySelector(".select-title");
const selectList = document.querySelector(".select-list");
const selectItems = document.querySelectorAll(".select-item");
const svgUp = document.querySelector(".up");
const svgDown = document.querySelector(".down");

selectTitle.value=selectItems[0].innerHTML;
selectItems[0].classList.add("active");
selectTitle.style.fontWeight="600";
selectList.style.display="none";
svgUp.style.display="none";

selectItems.forEach(elem=>{
    elem.addEventListener("click",click);
    elem.addEventListener("keyup",(e)=>{
        if (e.code === "Enter") {
            click(e)
        }
    });
    elem.focus();
})

window.addEventListener("click",(e)=>{
    if(e.target.classList.value !== "select-title") {
        closeSelect();
    }else {
       openSelect();
        e.target.focus();
    }
})

window.addEventListener("keyup",(e)=>{
    if (e.code === "Enter") {
        if(e.target.classList.value !== "select-title") {
            closeSelect();
        }else {
            openSelect();
            e.target.focus();
        }
    }
})

function click(e) {
    selectItems.forEach(elem=>{
        elem.classList.remove("active");
    })
    e.target.classList.add("active");
    selectTitle.value=e.target.innerHTML;
    e.target.focus();

    closeSelect();
}

function openSelect() {
    selectTitle.style.display="none";
    selectList.style.display="block";
    svgUp.style.display="block";
    svgDown.style.display="none";
}

function closeSelect() {
    selectTitle.style.display="block";
    selectList.style.display="none";
    svgUp.style.display="none";
    svgDown.style.display="block";
}


