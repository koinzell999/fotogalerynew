/*Name this external file gallery.js*/

function upDate(previewPic) {
    console.log("upDate event triggered");
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
    var previewImages = document.querySelectorAll('.preview');
    previewImages.forEach(function(img, index) {
        img.setAttribute("tabindex", index);
        img.addEventListener('mouseover', function() {
            upDate(img);
        });
        img.addEventListener('mouseout', unDo);
        img.addEventListener('focus', function() {
            upDate(img);
        });
        img.addEventListener('blur', unDo);
    });
}

// Ensure the event listeners are added once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addEventListeners);
