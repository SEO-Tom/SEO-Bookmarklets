let searchText = prompt("Enter text");
let fullURL = window.location.href + "#:~:text=" + encodeURI(searchText);
navigator.clipboard.writeText(fullURL).then(function() {
    console.log(fullURL);
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
