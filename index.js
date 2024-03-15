const navBtn = document.querySelector("#nav-btn");
const navList = document.querySelector("#nav-list");
const navContainer = document.querySelector("#nav-container");
let navBtnClicked = false;

window.addEventListener("resize", reziseAdjust);

function reziseAdjust(){
      
      if(window.innerWidth < 768){
            navList.style.backgroundColor = "#2E2F31";
            navContainer.classList.replace("container", "container-fluid");
      }
      else{
            navList.style.backgroundColor = "transparent";
            navContainer.classList.replace("container-fluid", "container");
      }
}

reziseAdjust();

navBtn.addEventListener("click", () => {

      if(navBtnClicked){
            navBtnClicked = false;
            navBtn.style.backgroundColor = "transparent";
      }
      else{
            navBtnClicked = true;
            navBtn.style.backgroundColor = "#2E2F31";
      }

});

