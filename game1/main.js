"use strict";
const GamePlatform = document.getElementById('gameplatform');
const Collector = document.querySelector('.i');
const Photos = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
const GameOver = document.querySelector('.end');
const button = document.querySelector('.end button');
let CreateInterval;
let TopAdder;
let Dragged;
let Fruits;
let start = 0;

button.onclick = function() {
this.parentElement.classList.add('d-none');
let sound = new Audio('magic-wand-1.wav');
sound.play();
start = 1;
if(start == 1){
CreateInterval = setInterval(function(){
const div = document.createElement('div');
div.setAttribute('draggable',"true");
div.style.left = Math.random(0.1) * 90 + "%";
div.style.top = 0;
div.classList.add('fruit');
const img = document.createElement('img');
img.setAttribute('draggable',"true");
img.src = Photos[GenerateRandomNumber(0, Photos.length-1)];
div.appendChild(img);
GamePlatform.appendChild(div);
let i = 0;  
Fruits = [...document.getElementsByClassName('fruit')];
TopAdder = setInterval(function () {
Fruits.map(function(item) {
if (i < 500 ){
i ++ ;
item.style.top = i +"px";
}
else{
item.remove();
}
})},1000);
Fruits.forEach(function (item){
item.ondrag= function () {
Dragged = item;
Dragged.classList.remove('fruit');
Dragged.classList.add('collected');
Dragged.classList.add('d-none');
const win = document.getElementsByClassName('collected');
if (win.length > 5){
const winner = document.getElementById('winner');
winner.classList.remove('d-none');
}
}
})
StopCreating(Fruits,CreateInterval);
function StopCreating(item,intr) {
if(item.length > 15){
clearInterval(intr);
GameOver.classList.remove('d-none');   
    }};  
},2000) 
}
}




function GenerateRandomNumber(min, max)
{return Math.round(min + Math.random() * (max - min))};

Collector.ondragover = function(e)
{
e.preventDefault();
}
Collector.ondrop = function()
{

this.appendChild(Dragged);

}
