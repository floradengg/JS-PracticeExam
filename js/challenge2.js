// When the page is loaded, print the default value of the textarea to the console.  Print JUST the value, no other information.
window.addEventListener("load", function() {
    let val = document.querySelector("#billing").value;
    console.log(val);
});

// When the checkbox is checked the information from the billing field is copied into the home address field and the home element is disabled.
document.querySelector("input[type=checkbox]").addEventListener("click", function(){
    if (this.checked) {
        document.querySelector("#home").value =  document.querySelector("#billing").value; 
        document.querySelector("#home").disabled = true;
    }
    else {
        document.querySelector("#home").value =  ""; 
        document.querySelector("#home").disabled = false;
    }
});