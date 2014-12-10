function addThingToSlidyThing(head, captionhead, caption, background, page){
	var slidyThing = document.getElementById("myCarousel");
	{
		var indicatorsCon = slidyThing.getElementsByClassName("carousel-indicators")[0]
		var count = indicatorsCon.children.length;
		var element = document.createElement("li");
		element.setAttribute("data-target", "#myCarousel");
		element.setAttribute("data-slide-to", count);
		indicatorsCon.appendChild(element);
	}

	var slidesCon = slidyThing.getElementsByClassName("carousel-inner")[0];
	var element = document.createElement("a");
	element.className = "item";
	element.href = page;

		var cap = document.createElement("div");
		cap.className = "carousel-caption";

		var h2 = document.createElement("h2");
		h2.innerHTML = head;
		cap.appendChild(h2);

		var ch3 = document.createElement("h3");
		ch3.innerHTML = captionhead;
		cap.appendChild(ch3);

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


addThingToSlidyThing("Vad?", "Värför är detta här", "Jag vet inte. Vet du?", "img/samuel.png", "game1.html");