//Javascript code to create slideshow for images//
let slideshowImages = ["slideshow-images/playing-image.jpg", "slideshow-images/sheep.jpg", "slideshow-images/countryside.jpg", "slideshow-images/hay.jpg", "slideshow-images/horses.jpg", "slideshow-images/shop.jpg"];//array list of image paths//
let index = 0; //position of slideshowImages//
//function to increment pictures from array//
function showSlides() {
    document.getElementById("slideshow-image").src = slideshowImages[index];
    index++;
    if (index==slideshowImages.length){
        index=0;
    }
}
setInterval(showSlides,5000); //interval timer for function set to 5sec//