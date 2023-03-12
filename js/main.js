addToCartButtons =  document.getElementsByClassName("games__button")
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
const back = document.getElementById("arrow")
const check = document.getElementById("cart")
let modalIsOpen = false;
let buzz = 0;
let iron = 0;
let c3po = 0;
let dog = 0;
let yoda = 0;
let buzzprijs = 0;
let ironprijs = 0;
let c3poprijs = 0;
let dogprijs = 0;
let yodaprijs = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "buzz":
                buzz += 1;
                buzzprijs += 49;
                break;
            case "ironman":
                iron += 1;
                ironprijs += 39;
                break;
            case "c3po":
                c3po += 1;
                c3poprijs += 39;
                break;
            case "dog":
                dog += 1;
                dogprijs += 19;
                break;

            case "yoda":
                yoda += 1;
                yodaprijs += 19;
                break;
        }
        if(modalIsOpen === false){
            modalIsOpen = true;
        shoppingModal.style.display = "flex";
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIsOpen = false;
        },2000);
    }}
}


const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutisOpen = false;
const searchbar = document.getElementById("js--searchBar")

checkoutButton.onclick = function(){
    if(checkoutisOpen === false){
        document.querySelector("main").style.display = "none";
        back.style.display = "block";
        checkoutWindow.style.display = "block";
        check.style.display = "none"
        checkoutisOpen = true;
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-ironman").innerHTML = iron + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        document.getElementById("js--amount-yoda").innerHTML = yoda + "x";
        document.getElementById("js--amount-dog").innerHTML = dog + "x";
        document.getElementById("buzzprijs").innerHTML = "€" + buzzprijs;
        document.getElementById("ironmanprijs").innerHTML = "€" + ironprijs;
        document.getElementById("c3poprijs").innerHTML = "€" + c3poprijs;
        document.getElementById("dogprijs").innerHTML = "€" + yodaprijs;
        document.getElementById("yodaprijs").innerHTML = "€" + dogprijs;
        document.getElementsByClassName("searchBar__glass")[0].style.display = "none";
        searchbar.style.display = "none";
        return
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    back.style.display = "none";
    check.style.display = "block"
    checkoutisOpen = false;
    searchbar.style.display = "block";
    document.getElementsByClassName("searchBar__glass")[0].style.display = "block"
    
    
}


/* start searchbar functionaliteit*/


const games = document.getElementsByClassName("games__game")

searchbar.onkeyup = function(event){
    if(event.keyCode === 13){
        let searchTerm = searchbar.value.toUpperCase().split(" ").join("");
        for(let i = 0; i < games.length; i++){
            if(games[i].dataset.title.search(searchTerm) === -1){
                games[i].style.opacity = 0.3;
            }
            else{
                games[i].style.opacity = 1;
            }
        }
    }
}



/* interactionobserver */

let observer = new IntersectionObserver(
    function(entries){
        if(entries[0].isIntersecting === true){
            document.getElementsByTagName("main")[0].classList.add("a-popup");
            observer.disconnect();
        }
        else{
            console.log("voor minder dan 50% in beeld")
        }
    }, {
        threshold: 0.1,
    }
);


observer.observe(document.getElementsByTagName("main")[0]);
