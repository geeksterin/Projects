var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://commons.wikimedia.org/wiki/Category:Cityscapes_of_Montreal#/media/File:City_Life_1_(Unsplash).jpg";
images[1] = "https://commons.wikimedia.org/wiki/Category:Cityscapes_of_Montreal#/media/File:Cloudy_evening_in_Montreal_(Unsplash).jpg";
images[2] = "https://commons.wikimedia.org/wiki/Category:Cityscapes_of_Montreal#/media/File:Dream_(Unsplash_KeXaR92X5yQ).jpg";
images[3] = "https://commons.wikimedia.org/wiki/Category:Cityscapes_of_Montreal#/media/File:Montreal_-_Skyline_-_0035.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;