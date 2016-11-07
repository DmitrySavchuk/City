function show_stars(scrolled, stars){
	for(var i = 0; i < stars.length; i++){
		if (scrolled >= stars[i].splash){
				stars[i].classList.remove("hidden")
			}
		else
		{
			stars[i].classList.add("hidden")
		}
	}
}

function show_windows(scrolled, windows_array) {
	for(var i = 0; i < windows_array.length; i++){
		if (scrolled >= windows_array[i].splash && scrolled <= windows_array[i].dying){
				windows_array[i].classList.remove("hidden")
		} else {
			windows_array[i].classList.add("hidden")
		}
	}
}

function get_dark(scrolled){
	if (scrolled < 1900){
		document.body.style.background = "rgba(0,0,0," + scrolled / 2000 + ")";
	} else {
		document.body.style.background = "rgba(0,0,0," + (1900 / 2000) + ")";
	}
}

function sun_movement(scrolled, sun){
	sun.style.bottom = 50 - scrolled/30 + "%"
}

function moon_movement(scrolled, moon){
	if (scrolled < 3000)
		moon.style.bottom = -15 + scrolled/40 + "%"
}