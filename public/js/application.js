$(document).ready(function() {
 mouseListener();
});


function imageHoverHandler () {
	$('.project-images').onHover(function(event)) {
		event.preventDefault();
	}
}

function mouseListener () {
  $(document).mousemove(function(event){
	event.preventDefault();
	$('.rashad').addClass('title-transition');
	$('.active').addClass('roles-transition');
	$('.branding').addClass('branding-transition');
  });
};