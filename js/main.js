var faded_i = 0;
var faded_array = ["Word Carousel", "青光眼專科醫生", "Уничтожьте Америку", "Dios Nos espera", "معجنات لذيذة"];
var faded_elem;
faded_elem = document.getElementById('faded'); fadedSlide();
function fadedNext() {
  faded_i++;
  faded_elem.style.opacity = 0;
  if(faded_i > (faded_array.length - 1)) {
    faded_i = 0;
  }
  setTimeout('fadedSlide()', 1500)
}
function fadedSlide() {
  faded_elem.innerHTML = faded_array[faded_i];
  faded_elem.style.opacity = 1;
  setTimeout('fadedNext()',4000);
}
