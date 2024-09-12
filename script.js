let soldiers = [];

let pageFlag = true;

const editSection = () => {
    const header = document.querySelector("body > #add-header");
    const addSection = document.querySelector("#add-section");
    const div = document.querySelector("body > div");
    const main = document.querySelector("body > main");

    header.style.display = "none";
    addSection.style.display = "none";
    div.style.display = "none";
    main.style.display = "none";

    const sectionOfEdit = document.querySelector("body > #edit-section"); 
    sectionOfEdit.style.display = "flex";
}

const editBTN = document.querySelector(".edit");
editBTN.addEventListener("click", () =>{
    pageFlag = !pageFlag;
    setPage(pageFlag);
});

const homePage = () => {
    
    const sectionOfEdit = document.querySelector("body > #edit-section"); 
    sectionOfEdit.style.display = "none";

    const header = document.querySelector("body > #add-header");
    const addSection = document.querySelector("#add-section");
    const div = document.querySelector("body > div");
    const main = document.querySelector("body > main");
    
    header.style.display = "flex";
    addSection.style.display = "block";
    div.style.display = "flex";
    main.style.display = "block";
}

const cancelBTN = document.querySelector(".cancel");
cancelBTN.addEventListener("click", () =>{
    pageFlag = !pageFlag;
    setPage(pageFlag);
});

const addSoldier = (form) => {
    const name = form["fullname"].value;
    const rank = form["rank"].value;
    const position = form["position"].value;
    const platoon = form["platoon"].value;
    const time = form["time"].value;
    const status = form["status"].value;
    if(!name || !rank || !position || ! platoon || !time || !status){
        alert("you must to fill all the fields");
        return;
    }
    const newSoldier = {
        name,
        rank,
        position,
        platoon,
        time,
        status
    };
    soldiers.push(newSoldier);
    window.localStorage.setItem("soldiers", JSON.stringify(soldiers));
}

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addSoldier(e.target)
});

const setPage = (flag) => {
    if(flag)
        homePage();
    else{
        editSection();
    }
}

window.onload = () => {
    setPage(pageFlag);
}