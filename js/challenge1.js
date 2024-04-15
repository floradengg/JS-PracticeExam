// When the page is loaded use CSS to style the h1 heading
window.addEventListener("load", function() {
    document.querySelector("h1").classList.add("heading"); 
});

// If the visitor double-clicks anywhere on the page an alert button should pop up with the current time.
window.addEventListener("dblclick", function() {
    alert(Date());
});

// If the visitor clicks on the input for “Check to toggle the email” field, 
// modify the page so that the email field is available when the input is checked and not available when it is unchecked.
document.querySelector("#toggle").addEventListener("click", function(){
    if (this.checked) {
        document.querySelector("#emailBox").classList.remove("hidden"); 
    }
    else {
        document.querySelector("#emailBox").classList.add("hidden"); 
    }
});