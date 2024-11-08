/*Name this external file gallery.js*/

function upDate(previewPic) {
    console.log("upDate event triggered with:", previewPic);
    var x = document.getElementById("image");
    x.style.backgroundImage = "url('" + previewPic.src + "')";
    x.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("unDo event triggered");
    var x = document.getElementById("image");
    x.style.backgroundImage = "url('')";
    x.innerHTML = "Hover over an image below to display here.";
}

// Function to add event listeners to all images with class 'preview'
function addEventListeners() {
    console.log("addEventListeners function called");
    var previewImages = document.querySelectorAll('.preview');
    previewImages.forEach(function(img, index) {
        console.log("Adding event listeners to image:", img);
        img.setAttribute("tabindex", index);
        img.addEventListener('mouseover', function() {
            console.log("mouseover event for:", img);
            upDate(img);
        });
        img.addEventListener('mouseout', function() {
            console.log("mouseout event for:", img);
            unDo();
        });
        img.addEventListener('focus', function() {
            console.log("focus event for:", img);
            upDate(img);
        });
        img.addEventListener('blur', function() {
            console.log("blur event for:", img);
            unDo();
        });
    });
}

// Ensure the event listeners are added once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event triggered");
    addEventListeners();
});
