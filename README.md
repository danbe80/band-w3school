# W3schools

https://www.w3schools.com/w3css/tryw3css_templates_band.htm

clone coding 

```css
.header-wrapper .navi-wrap .navi:hover .navi-menu {
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

