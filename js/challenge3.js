// When the page is loaded an alert box should pop up with the Caption from the 2nd figure.
window.addEventListener("load", function(){
    let figcaptions = document.querySelectorAll("figcaption");
    alert(figcaptions[1].innerHTML);
});

// When the mouse goes over an image three things should happen:
// The background image of the display should change to the same image being hovered over.  
// The text in the display should show the alt attribute of the image
// The image should no longer be visible – but it should still take up the same amount of space.
thumbnails = document.querySelectorAll(".thumbnail");
text = document.querySelector("#display").innerHTML;
for (let index = 0; index < thumbnails.length; index++) { 
    thumbnails[index].addEventListener('mouseover', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')";
        document.querySelector("#display").innerHTML = this.alt;
        thumbnails[index].style.display = "none";
    });

    thumbnails[index].addEventListener('mouseout', function() {
        document.querySelector("#display").style.backgroundImage = "none";
        document.querySelector("#display").innerHTML = text;
        thumbnails[index].style.display = "block";
    });
}

// Implement the same functionality for tab focus.  Make sure that it is possible to return to the original blue background.
for (let index = 0; index < thumbnails.length; index++) { 
    thumbnails[index].addEventListener('focus', function() {
        console.log("tab");
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')";
        document.querySelector("#display").innerHTML = this.alt;
        thumbnails[index].style.display = "none";
    });

    // issue: tabs then untabs immediately --> image flickers 
    thumbnails[index].addEventListener('blur', function() {
        console.log("untab");
        document.querySelector("#display").style.backgroundImage = "none";
        document.querySelector("#display").innerHTML = text;
        thumbnails[index].style.display = "block";
    });
}

// Notice that the functionality doesn’t work on the 2nd image.  Can you fix this problem using JUST JavaScript
thumbnails[1].tabIndex = 0;