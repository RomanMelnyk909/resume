var name = 'Roman';
var oneSecond = 1000;

function addCustomHeader () {
    var message = prompt(name + 'write something');
    document.querySelector('h1').innerText = name + ' said ' + message;
}

setTimeout(addCustomHeader, oneSecond);