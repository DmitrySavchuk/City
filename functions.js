function stars_generate(stars){
	for(var i = 0; i < 100; i++) {
		stars[i] = document.createElement("div")
		stars[i].classList.add("star")
		stars[i].classList.add("hidden")
		stars[i].style.right = Math.random()*100 + "%"
		stars[i].style.top = Math.random()*80 + "%"
		stars[i].style.opacity = Math.random()
		stars[i].splash = Math.random()*3000 + 2000

		document.body.appendChild(stars[i])
	}
}

function windows_generate(hei, object, windows_quantity, windows_array){
	for(var i = windows_quantity; i < windows_quantity + 2; i++){
		windows_array[i] = document.createElement("div")
		windows_array[i].classList.add("hidden")
		windows_array[i].classList.add("window")
		windows_array[i].style.bottom = hei/2 + "px"
		windows_array[i].style.left = (object.indent - 45) + "px"
		windows_array[i].splash = Math.random()*2000 + 1000
		windows_array[i].dying = Math.random()*1250 + windows_array[i].splash

		document.body.appendChild(windows_array[i])
	}

	windows_quantity += 2
}

function city_draw(windows_array, object){
	if(++object.houses_quantity > 30) {
		clearInterval(interval)
	}

	var windows_quantity = windows_array.length

	element = document.createElement("div")
	element.classList.add("house")
	var hei = (Math.random()*50) + (Math.random()*50)
	element.style.height = hei + "px"
	element.style.left = object.indent  + "px"
	
	var width = 50
	element.style.width = width  + "px"
	
	object.indent += width;
	
	document.body.appendChild(element)

	if (hei > 30)
		windows_generate(hei, object, windows_quantity, windows_array)
}

function audio_click(name) {
	var audio = document.querySelector("." + name + "_audio")

	if(audio.paused){
		pause_music()
	    audio.play()
	} else{
		pause_music()
	}
}

function pause_music() {
	var audio = document.querySelectorAll("audio")

	for (var i = 0; i < audio.length; i++)
		audio[i].pause()
}