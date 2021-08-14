# W3schools

https://www.w3schools.com/w3css/tryw3css_templates_band.htm

clone coding <br>

<hr>
<img width="10%" src="https://user-images.githubusercontent.com/85651246/129460836-4918e82b-da37-4125-9ee5-6a35b382d853.PNG" /> <br>

navi에 hover 했을 시에 메뉴바가 나오는 코드는 css, javascript, jQuery로 구현이 가능하다. <br>
위 이미지는 navi에 hover했을 시

```css
.header-wrapper .navi-wrap .navi:hover .navi-menu {
	/* CSS */
	display: block;
} 
```
이 css 부분을 javascript와 jquery로도 기능구현이 가능하다.

```javascript
// JavaScript
var navi = document.getElementsByClassName('navi');
var navimeun = document.getElementsByClassName('navi-menu');
// getElementsByClassName은 배열처럼 동작하는 HTMLCollection 객체를 반환 

navi [4].addEventListener('mouseenter', onEnter);
navi [4].addEventListener('mouseleave', onLeave);

function onEnter(){  navimeun[0].style.display ="block";}
function onLeave(){  navimeun[0].style.display = "none";} 
```


```javascript
// jQuery
$('.navi:last-child').mouseenter(function(e){
	$('.navi .navi-menu').css('display', 'block');
})
$('.navi:last-child').mouseleave(function(e){
	$('.navi .navi-menu').css('display', 'none');
})
```

여기선 css로 기능을 구현



## main Slide 구현

```javascript 
var index = 0;
const slides = document.getElementsByClassName('img-wrap');

setInterval(function(){
	for(let i = 0; i < slides.length; i++){
		slides[i].style.opacity = 0;
	}
	index = (index != slides.length - 1) ? index + 1 : 0;
	slides[index].style.opacity = 1;
}, 3000);

```

swiper를 사용하려다가 직접 javascript로 fade slide를 구현해보았다.