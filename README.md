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

```css
	.main-wrapper .img-wrap .img {
		position: absolute;
		transition: all .5s;
	}
```

swiper를 사용하려다가 직접 javascript로 짜보는 것도 좋을거 같아서 slide를 구현해보았다. <br>
css에 transition을 주어 부드럽게 fade로 넘어가는 것을 표현

* 문제점 : main 이미지들을 띄우면서 높이가 0이 되는 현상이 발생 <br>
  height이 0이 되는 이유는 position: absolute로 자식 div를 띄우면서 기준점을 잡은 부모의 높이가 0이 되는 것이다. => 해결방법으론 부모한테 높이를 설정해주었다.
	<hr>
* float도 absolute랑 같은 현상이 일어난다. <br>
	float에 높이를 잡아주기 위해서는 clearfix 클래스를 float를 적용시킨 부모한테 넣어주면 된다. 또한 부모 css에 overflow: hidden 을 주어도 해결된다. (이 방법은 absolute에선 해결되지 않는다.)