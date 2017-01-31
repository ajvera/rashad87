$(document).ready(function() {
 mouseListener();
});
function mouseListener () {
  $(document).mousemove(function(event){
	event.preventDefault();
	console.log("something is happening");
	$('.rashad').addClass('title-transition');
	$('.active').addClass('roles-transition');
	$('.branding').addClass('branding-transition');
  });
};