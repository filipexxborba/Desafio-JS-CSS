function accordeon(element, numElement){
    element.classList.toggle('svg-active');
    var paragrafo = document.getElementById('acordeon-' + numElement);
    paragrafo.classList.toggle('active');
}