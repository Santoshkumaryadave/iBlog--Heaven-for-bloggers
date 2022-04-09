const hamburger = document.querySelector(".burgger");
const navMenu = document.querySelector(".nav-manu");
const navigation = document.querySelector(".navigation");


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");    
    navigation.classList.toggle("active"); 
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navigation.classList.remove("active"); 
    }))
