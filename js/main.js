// Add Ready function; variable for all paragraphs; change CSS styling for paragraphs

$(document).ready(function () {
  var allParagraphs = $( 'p' );
  allParagraphs.css( {
    'color': '#fff',
    'font-size': '20px',
    'background-color': 'grey'
  })
});
