function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
function enableScrollingWithMouseWheel() {
    map.setOptions({ scrollwheel: true });
}

function disableScrollingWithMouseWheel() {
    map.setOptions({ scrollwheel: false });
}

  // Enable scrolling on click event on the map
  map.addListener('click', enableScrollingWithMouseWheel);

  // Enable scrolling on drag event on the map
  map.addListener('drag', enableScrollingWithMouseWheel);

  // Disable scrolling on mouseout from the map
  map.addListener('mouseout', disableScrollingWithMouseWheel);
