	var sections = [ "main", "artwork", "software_projects", "writing",
			"favorite_links", "about_me" ];
	var artworks_menu_images = [ "img_artworks_menu_drawing", "img_artworks_menu_photography", "img_artworks_menu_cartoons", "img_artworks_menu_other" ];
	var currentSection = 0;

	function atry(element) {
		var caption = document.getElementById("div_about_info_caption_1");
		var background = document.getElementById('div_background_2');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_2");
		background = document.getElementById('div_background_3');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_3");
		background = document.getElementById('div_background_4');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_4");
		background = document.getElementById('div_background_5');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_5");
		background = document.getElementById('div_background_6');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_6");
		background = document.getElementById('div_background_7');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_7");
		background = document.getElementById('div_background_8');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_8");
		background = document.getElementById('div_background_9');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}

		caption = document.getElementById("div_about_info_caption_9");
		background = document.getElementById('div_background_10');

		if (-element.scrollTop + caption.offsetTop >= 0)
			background.style.top = -element.scrollTop + caption.offsetTop
					+ "px";
		else {
			background.style.top = "0px";
		}
	}

	function navigateSection(event) {
		if (event.which == 37) {
			deactivateSectionToLeft(sections[currentSection]);
		} else if (event.which == 39) {
			deactivateSectionToRight(sections[currentSection])
		} else {
			return;
		}
		activateSection(sections[currentSection]);
	}

	function getRightSection() {
		if (currentSection > 0) {
			moveSection(sections[currentSection], 95 - 1);
			currentSection -= 1;
		}
	}

	function getLeftSection() {
		if (currentSection < 5) {
			currentSection += 1;
			moveSection(sections[currentSection], 0);
		}
	}

	function moveSection(sectionName, negativeOffset) {
		document.getElementById("sec_" + sectionName).style.right = sections.length
				- currentSection - 1 - negativeOffset + "%";
	}

	function activateSection(sectionName) {
		document.getElementById("sec_" + sectionName).className = "section_active";
	}

	function deactivateSectionToLeft(sectionName) {
		document.getElementById("sec_" + sectionName).className = "section_inactive_left";
		if (currentSection < 5) {
			currentSection += 1;
		}
	}

	function deactivateSectionToRight(sectionName) {
		document.getElementById("sec_" + sectionName).className = "section_inactive_right";
		if (currentSection > 0) {
			currentSection -= 1;
		}
	}

	function navigateToClick(section, position) {
		if (section.className == "section_inactive_left") {
			for (var i = currentSection; i > position; i--) {
				deactivateSectionToRight(sections[i]);
			}
		} else if (section.className == "section_inactive_right") {
			for (var i = currentSection; i < position; i++) {
				deactivateSectionToLeft(sections[i]);
			}
		} else {
			return; //to avoid overriding children clicks
		}
		activateSection(sections[position]);
	}

	function colorLetter(letter) {
		if (letter.style.color != "orange") {
			letter.style.color = "orange";
		} else {
			letter.style.color = null;//reverts to the CSS
		}
	}

	function getSectionSubmenu(elementName) {
		divSecContent = document.getElementById(elementName);
		divSecContent.removeAttribute("hidden");
		panSectionToSubmenu(sections[currentSection]);
		moveInactiveRightSectionsOut();
	}

	function moveInactiveRightSectionsOut() {
		for (i = currentSection + 1; i < sections.length; i++) {
			document.getElementById("sec_" + sections[i]).className = "section_out";
		}
	}

	function moveInactiveRightSectionsIn() {
		for (i = currentSection + 1; i < sections.length; i++) {
			document.getElementById("sec_" + sections[i]).className = "section_inactive_right";
		}
	}

	function panSectionToSubmenu(sectionName) {
		document.getElementById("sec_" + sectionName).className = "section_panned_submenu";
	}

	function getSectionMenu() {
		unpanSection(sections[currentSection]);
	}

	function getSectionSubMenu() {
		panSectionToSubmenu(sections[currentSection]);
	}


	function unpanSection(sectionName) {
		document.getElementById("sec_" + sectionName).className = "section_active";
		moveInactiveRightSectionsIn();
	}

	function toggleCollapseExpand(headerDivElementID) {
		idPrefix = headerDivElementID.id.replace(/_header/, "");

		submenuDivElement = document.getElementById(idPrefix + "_content");
		collapsedSignElement = document.getElementById(idPrefix
				+ "_collapsed_sign");
		expandedSignElement = document.getElementById(idPrefix
				+ "_expanded_sign");

		if (submenuDivElement.className.indexOf("collapsed", 0) > 0) {
			submenuDivElement.className = submenuDivElement.className.replace(
					/ collapsed/, "");

			expandedSignElement.removeAttribute("hidden");
			collapsedSignElement.setAttribute("hidden", "hidden");

		} else {
			submenuDivElement.style.overflowX = "hidden";
			submenuDivElement.className += " collapsed";

			collapsedSignElement.removeAttribute("hidden");
			expandedSignElement.setAttribute("hidden", "hidden")
		}
	}

	function getContentFromSubmenu(sectionName, objectTitle) {
		document.getElementById("sec_" + sectionName).className = "section_panned_content";

		//Using AJAX.
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				/*xhr.responseXML return null for anything but XML or HTML. 
				That's why I am using xhr.response to return JSON.*/
				document.getElementById("img_artwork").src = JSON
						.parse(xhr.response).image;
				document.getElementById("img_artwork").alt = JSON
						.parse(xhr.response).title;
				document.getElementById("lbl_artwork_caption").innerText = JSON
						.parse(xhr.response).title;
			}
		}

		xhr.open("GET", "./objects/" + objectTitle + ".json", true);
		xhr.send();
	}

	var initial_aphorisms_left=null;
	var initial_aphorisms_top=null;
	
	function moveBackground(element) {
		//If condition to reduce the processing time.
		if(event.clientX%2==0){
			return;
		}
		var backElement = element.firstElementChild;
		
		
		//TODO: Improve by eleminating the need for computed styles.
		if(initial_aphorisms_left==null){
			initial_aphorisms_left=window.getComputedStyle(backElement).getPropertyValue(
			"left").slice(0,-2);
		}
		if(initial_aphorisms_top==null){
			initial_aphorisms_top=window.getComputedStyle(backElement).getPropertyValue(
			"top").slice(0,-2);
		}
		
		var elementHorCenter=(
				Number(window.getComputedStyle(element).getPropertyValue("width").slice(0,-2))/2+
				element.getBoundingClientRect().left);
		var elementVerCenter=(
				Number(window.getComputedStyle(element).getPropertyValue("height").slice(0,-2))/2+
				element.getBoundingClientRect().top);
		
		var numLeft = Number(window.getComputedStyle(backElement).getPropertyValue(
				"left").slice(0, -2));
		var numTop = Number(window.getComputedStyle(backElement).getPropertyValue(
				"top").slice(0, -2));

		
		if (numLeft < 0&&event.clientX>elementHorCenter) {
			backElement.style.left = ++numLeft + "px";
		}
		if (numLeft > initial_aphorisms_left&&event.clientX<elementHorCenter) {
			backElement.style.left = --numLeft + "px";
		}
		
		if (numTop < 0&&event.clientY>elementVerCenter) {
			backElement.style.top = ++numTop + "px";
		}
		if (numTop > initial_aphorisms_top&&event.clientY<elementVerCenter) {
			backElement.style.top = --numTop + "px";
		}
	}

	function showArtworkMenuItem(chosenItemImageId) {
		for (i = 0; i < artworks_menu_images.length; i++) {
			if (artworks_menu_images[i] == chosenItemImageId)
				document.getElementById(chosenItemImageId).removeAttribute("hidden");
			else
				document.getElementById(artworks_menu_images[i]).setAttribute("hidden", "hidden");
		}
	}
