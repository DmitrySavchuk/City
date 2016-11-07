/*separate onscroll functions*/

var stars = []
var windows_array = []
var sun = document.querySelector(".sun")
var moon = document.querySelector(".moon")
var object = {
	"indent": 0,
	"houses_quantity": 0
}


stars_generate(stars)

var interval = setInterval( () => { city_draw(windows_array, object) }, 100)

window.onscroll = function() {

	var scrolled = document.body.scrollTop

	show_stars(scrolled, stars)

	show_windows(scrolled, windows_array)
	
	get_dark(scrolled)

	sun_movement(scrolled, sun)

	moon_movement(scrolled, moon)
}
