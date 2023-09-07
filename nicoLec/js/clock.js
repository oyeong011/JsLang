const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;//clock.innerText = new Date().toLocaleTimeString();
}

getClock();//새로고침할때 시간을 미리띄워놓아버려
setInterval(getClock, 1000);//1초마다 업데이트 시켜버려



/*interval = 매번 일어나야 하는 무언가!
setInterval(실행할 함수, 실행할 함수의 주기)! */


/*1. setInterval(sayHello, 5000); 는 매초, 매분마다 반복되는 일을 해야할때
실행하는 함수임. 첫번째 인수에는 함수이름을 적도 두번째인수는 시간을 적어야함.
1초는 1000임

2. setTimeout(sayHello,1000);는 함수를 바로 실행하고 싶지않을때
사용하는 함수임 예시와같은 setTimeout은 1초 뒤에 sayHello를 실행시킨다는 의미임. */