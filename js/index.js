function addThingToSlidyThing(caption, background, page){
	var slidyThing = document.getElementById("myCarousel");
	{
		var indicatorsCon = slidyThing.getElementsByClassName("carousel-indicators")[0]
		var count = indicatorsCon.children.length;
		var element = document.createElement("li");
		if(count == 0) element.className += "active";
		element.setAttribute("data-target", "#myCarousel");
		element.setAttribute("data-slide-to", count);
		indicatorsCon.appendChild(element);
	}

	var slidesCon = slidyThing.getElementsByClassName("carousel-inner")[0];
	var element = document.createElement("a");
	element.className = "item";

	if(slidesCon.children.length == 0) element.className += " active";

	element.href = page;

		var cap = document.createElement("div");
		cap.className = "carousel-caption";

		// var h2 = document.createElement("h2");
		// h2.innerHTML = head;
		// cap.appendChild(h2);

		// var ch3 = document.createElement("h3");
		// ch3.innerHTML = captionhead;
		// cap.appendChild(ch3);

		var cp = document.createElement("p");
		cp.innerHTML = caption;
		cap.appendChild(cp);

	element.appendChild(cap);

		var img = document.createElement("img");
		img.src = background;
		console.log(img.src);
	element.appendChild(img);

	slidesCon.appendChild(element);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


$(document).ready(function(){
	var gamesInSlider = [
		["Get circles! Three in a row increases your size and multiplier. Avoid triangles! Three will take your multiplier and 25 points.", "img/Slider/CubeInfinity.png", "game1.html"],
		["Speed down the highway to catch the escaping villain in your Austin martin db5. !!Explosions!!", "img/Slider/Highway.png", "game2.html"],
		["Build a castle to protect your king from the devastating fury of the enemy's cannon fire. Hit the enemy king with a cannon ball to win.", "img/Slider/CannonKings.png", "game3.html"],
		["Make your way through this level and collect Goo to make yourself invincible.", "img/Slider/GooGoo.png", "game4.html"],
		["You've found a Chest that contains an infinite amount of loot. What are you going to do? Break it open of course!", "img/Slider/LootToBoot.png", "game5.html"],
		["Oh Shit! Aliens! is a game about saving Planet Earth.", "img/Slider/aliens.png", "game6.html"],

		["You have stolen forbidden magic from the high mages, and have been sent to a labyrinth called Renovo as punishment.", "img/Slider/Renovo.png", "game11.html"],
		["Can you solve the puzzles and lead Walter out of Walter's Wizard Warehouse.", "img/Slider/WWW.png", "game12.html"],
		["Hear the Music, be the music.", "img/Slider/Rizard.png", "game13.html"],
		["Multiplayer fun! Drink more beer than your opponent! Scour the fridges and get wasted before your opponent can!", "img/Slider/BeerHunt.png", "game14.html"],
		["Be the Loot-Goblin.", "img/Slider/Pinch.png", "game15.html"],
		["Wizards play tag in their spare time!", "img/Slider/GravitasMagi.png", "game16.html"],

		["Prevent tourists from disrupting your quiet fishing spot so that you can release the Kraken.", "img/Slider/GetKraken.png", "game21.html"],
		["Everyone knows that antivirus programs play Bomberman in their spare time!", "img/Slider/AntiVirus.png", "game22.html"],
		["This is Valour, a 2D side-scrolling prototype.", "img/Slider/Valour.png", "game23.html"],
		["How did you end up here? Too much science! Harvest sheep on this pixellated island if you want to survive the night.", "img/Slider/67.jpg", "game24.html"],
		["You are alone on an alien world and your ship is out of fuel.", "img/Slider/Galileo.png", "game25.html"],
		["Fight through waves of zombies while you collect parts to fix for your broken down car. Collect by day, fight by night.", "img/Slider/DeadWood.png", "game26.html"],
					];
	
	shuffle(gamesInSlider);

	for(i = 0; i < gamesInSlider.length; i++) {
		var temp = gamesInSlider[i];
		addThingToSlidyThing(temp[0], temp[1], temp[2]);
	}
});
