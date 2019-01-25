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
		$("#testjs p").text(function(i,text){
			return text === "Click" ? "Please wait..." : "Click";
		})
	});

	// Add any additional listeners here
	$("#div-id").click(function(e){
		$('.jumbotron h2').text("Welcome");
		$("#div-id p").text(function(i,text){
			return text === "ME..." ? "Please wait..." : "ME...";
		})
	});
		
	$("a.thumbnail").click(projectClick);
}
console.log("Project clicked")

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	$(this).toggleClass("active");
	$('#paragraph').toggle();
}

var containingProject = $(this).closest(".project");
containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

