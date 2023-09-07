
//자바스크립트 다아는 얼굴들이구먼,, 파트
/*const mon= "mon"

const daysOfWeek = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"];

console.log(daysOfWeek);

const playerName = "nico"
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = {
    name : "nico",
    points : 10,
    fat : true,
    sayPray: function(){
        console.log("hello!");
    },
};
console.log(player);

function sayHello(){
    console.log("Hello!");
}
function sayMyName(nameOfPerson){
    console.log("Hello My name is " + nameOfPerson);
}
sayMyName("oyeong");
sayMyName("minji");

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}


const toBuy = ["potato", "pizza", "event"];

toBuy.push("meat");
toBuy[2] = "water";

const lyer = {
    name: "oyeong",
    age: 21,
};
lyer.tall = 170;
console.log(lyer, console);
function divide(a , b){
    console.log(a/b);
}
divide(5, 10);

const cal = {
    plus : function(a, b){
        return (a+b);
    },
    minus : function(a,b){
        return (a-b);
    },
    square: function(a,b){
        return (a**b);
    },
    div : function(a,b){
        return (a/b);
    },
    multi:function(a,b){
        return (a*b);
    }
}
cal.plus(5,5);
cal.minus(5,5);
cal.square(5,5);
cal.div(5,5);
cal.multi(5,5);

const nai = 96;
function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const KrAge = calculatorKrAge(nai);

console.log(KrAge);*/
/*
// if/else문
const age = parseInt(prompt("How old are you?"));//사용자에게 창을 띄울수있도록해줌 !!!문자랑!!! 디폴트인자가 있음
//그래서 이거 개구림
//parseInt int로 바꿔드려요오옹
//추가로 NaN은 Not a Number 나 숫자 아니다라는 뜻


//console.log(age);//typeof : 이건 변수의 타입을 확인하는것


// 음주 가능 나이 계산기 만들기
//console.log(isNaN(age));//isNaN은 boolean을 반환한다잉


//if문 조건 이거시 NaN인가?
condition = isNaN(age);

if(condition || age < 0){
    //condition==true
    console.log("Please write a number");
} else if(age < 18){
    //condition ==false
    //나이가 어리네?
    console.log("You are too young");
} else if(age <=50){
    console.log("You can drink");
}else if(age<=80){
    console.log("You should exercise");
}   else if(age===100){// 만약에 age가 100이라면?
    console.log("wow you are wise")
} 
    else{
    console.log("You can do whatever you want");
} 
*/

// 본격 html과 상호작용하는 자바스크립트



//const h1 = document.getElementById("h1");

//const h1 = document.getElementsByTagName()
//h1.innerText = "Got you!";

//const hellos = document.getElementsByClassName("hello");//많은 element를 가져오기

//console.log(hellos);

//const h1 = document.getElementsByTagName("h1");

//const h11 = document.querySelector(".hello h1");// css맹끼로 클래스를 찾는것 .을 잘붙이장

//console.log(h11);

/*- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)

- getElementsByTagName() : name을 할당할 수 있음(array를 반환)

- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
단 하나의 element를 return해줌
⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
⇒ 세개의 h1이 들어있는 array를 가져다 줌

- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다 */
   
//const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(h1);

//h1.innerText = "Hello";

//이벤트란????

/*function handleh1Click(){
    console.log("h1 was clicked!");
    h1.style.color = "blue";
}
h1.addEventListener("click", handleh1Click);
*?
/*- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir()
기본적으로 object로 표시한 element를 보여줌(전부 js object임)
그 element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것
모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- h1.addEventListener("click") : 누군가가 h1을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
h1.style.color = "blue";
}
h1.addEventListener("click",handleh1Click);
//click하면 handleh1Click이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!

- function이 js에게 넘겨주고 유저가 h1을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleh1Click(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임 */

/*function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}
 
function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

h1.onclick = handleh1Click;//h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

/* listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름, 예를들어 h1 html element mdn을 검색.
우리는 javascript의 element를 원하니, 링크에 Web APIs라는 문장이 포함된 페이지를 찾아. 왜냐면 이건 JS관점의 HTML Heading Element란 의미야.
너무 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용하면 됨.

function handleMouseEnter() {
h1.innerText = "Mouse is here!"
}
function handleMouseLeave() {
h1.innerText = "Mouse is gone!"
}
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

하지만 대부분의 경우에는 style은 CSS를 통해 변경되어야 해. 우리는 CSS파일을 어떻게 사용하지는 배워볼거야. */

/*function handleWindowResize(){
    document.body.style.backgroundColor = "event";
}
function handleWindowCopy(){
    alert("copier");
}
function handleWindowOffLine(){
    alert("SOS no WIFI");
}
function handleWindowOnLine(){
    alert("SOS no WIFI");
}

window.addEventListener("resize", handleWindowResize);//움직이면 바뀐다
window.addEventListener("copy", handleWindowCopy);//카피감지기
window.addEventListener("offline", handleWindowOffLine);
*/
/*title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공
function handleWindowResize(){
document.body.style.backgroundColor = “event”;
}
function handleWindowCopy(){
alert(“copier”);
}

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy); */

//const h1 = document.querySelector("div.hello:first-child h1");

/*function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "event";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

/*function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
*/
/*
style에 적합한 도구는 CSS
animation에 적합한 도구는 JS
css파일에
h1 {
color: cornflowerblue;
}
.clicked {
color: event;
}
를 적고

js에서는 h1에 active class를 전달하는거다.


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
if(h1.className === "clicked") {
h1.className = "";
} else {
h1.className = "clicked";
}
}

h1.addEventListener("click", handleTitleClick);
여기서 JS는 HTML을 변경할거고, CSS는 HTML을 바라보고 style을 변경한다.

근데 조금 문제가 있는 active는 우리가 지어준 이름이다. raw value라고 하는데, 이름을 바꾸다가 에러가 발생할 수도 있다. const로 지정해라.

function handleTitleClick() {
const clickedClass = "clicked";
if(h1.className === clickedClass) {
h1.className = "";
} else {
h1.className = clickedClass;
}
}

이렇게 작성하면 에러가 발생할 수 있는 부분을 축소한다.

그런데, html의 h1에 sexy-font라는 class name이 있었는데 js를 실행하니 교체되었다.
최초의 class name이 사라졌고.., sexy-font라는 class name을 간직하고 싶은데 이건 어떻게 해야하는가.
const clickedClass = "clicked sexy-font";에 추가하면 되긴 하는데 좋은 방법은 아니다. class를 추가할 때마다 js랑 css에서 업데이트를 계속 해야하니까.
우리가 해야하는건 js로 모든 class name을 변경하지 않는거다. 이 sexy-font를 삭제하지 않고 clicked class를 변경하고 싶다는거지. 다음영상에서. */
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick)*/

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked");
    h1.classList.toggle("sexy-font");//토글 : 클래스를 넣어주고 뺴줘요오옹
}

h1.addEventListener("click", handleTitleClick)*/

//로그인창을 만들어보자잉
/*const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("Button");// const loginButton = document.querySelector("#login-form button");

function onLoginClick(){
    console.dir(loginInput.value);
    console.log("click!!");
}
loginButton.addEventListener("click", onLoginClick);
*/
// 로그인했을 때 암것도 안쳤을 경우

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();                      //브라우저가 기본동작을 시뢩하지 못하게 막는 것 event object는 preventDefault함수를 기본적으로 갖고 있다
    loginForm.classList.add(HIDDEN_CLASSNAME);   //로그인 폼을 숨겨준다
    const username = loginInput.value;           //로그인 아이디 값을 받아주는 변수
    localStorage.setItem(USERNAME_KEY, username);//로컬 저장소에 아이디를 저장 
    paintGreetings();                    ////h1에 있는 텍스트를 집어넣어준다
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);//submit이벤트가 발생 했을 때 onLoginInput함수를 실행시킨다는 의미 JS는 onLoginSubmit함수 호출시 인자를 담아서 호출한다 해당인자는 event object를 담은 정보들임

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}


/*★ 중요 ★
form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
 */
/* preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음*/


