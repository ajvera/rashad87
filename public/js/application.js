$(document).ready(function() {
 mouseListener();
});
function mouseListener () {
  $(document).mousemove(function(event){
	event.preventDefault();
	console.log("something is happening");
	$('.rashad').addClass('title-transition');
	$('.fixed-list').addClass('roles-transition');

  });
};