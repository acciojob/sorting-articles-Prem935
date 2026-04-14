//your JS code here. If required.
const bands = ["The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", "The Bled", "Say Anything", "The Midway State", "We Came as Romans", "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"];

function trimed(band) {
	return band.replace(/^(a |an |the )/i, "").trim()
}

const sortedBand = bands.sort((a,b) => {
	return trimed(a).localeCompare(trimed(b))
})

const ul = document.querySelector("#band")

sortedBand.forEach(band => {
	const li = document.createElement("li")
	li.textContent = band
	ul.appendChild(li)
})