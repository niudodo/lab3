'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h2').text("The world need art");
		$("#testjs").toggle("Please wait...");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
console.log("Project clicked")

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	$(this).animate({opacity:0.25},1000);
}

var containingProject = $(this).closest(".project");
containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

