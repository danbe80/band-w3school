/*
	jQuery
$('.navi:last-child').mouseenter(function(e){
$('.navi .navi-menu').css('display', 'block');
})
$('.navi:last-child').mouseleave(function(e){
$('.navi .navi-menu').css('display', 'none');
})

*/

/*
	JavaScript
var navi = document.getElementsByClassName('navi');
var navimeun = document.getElementsByClassName('navi-menu');

navi [4].addEventListener('mouseenter', onEnter);
navi [4].addEventListener('mouseleave', onLeave);

function onEnter(){  navimeun[0].style.display ="block";}
function onLeave(){  navimeun[0].style.display = "none";} 
*/

var index = 0;
const slides = document.getElementsByClassName('img');

setInterval(function(){
	for(let i = 0; i < slides.length; i++){
		slides[i].style.opacity = 0;
	}
	index = (index != slides.length - 1) ? index + 1 : 0;
	slides[index].style.opacity = 1;
}, 3000);
