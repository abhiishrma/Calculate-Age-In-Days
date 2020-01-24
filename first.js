function inday(){
    var getAge = prompt("In which year you're born ?");
    var formula = (2020 - getAge ) * 365 ;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You Are ' + formula + ' Days Old.');
    h1.setAttribute('id' , 'formula');
    h1.appendChild(textAnswer);
    document.getElementById('resulting').appendChild(h1);
}

function reset(){
    document.getElementById('formula').remove();
}