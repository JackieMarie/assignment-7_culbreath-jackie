// Write JQuery ready function; use JQuery to get all the <h2> elements and assign them a variable named headings
// Use heading variable to change text of the last h2 element

$(document).ready(function () {
  var h2Headings = $( 'h2' );
  h2Headings.last().text( "I'm Jackie Culbreath, and I'm learning JQuery!" )
});
