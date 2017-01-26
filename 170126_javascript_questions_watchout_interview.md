## 서론
> 해당 글은 Medium 글입니다.

자바스크립트는 현대의 최신 브라우저들에서 사용되는 공식 언어입니다. 그렇기 때문에 개발자 면접에서 다양한 형태로 질문을 받습니다. 이 글은 자바스크립트 라이브러리, 개발 방법론, ES6 의 새로운 함수 등의 내용을 다루는 게 아니라 자바스크립트 개발자 면접에서 자주 나오는 3가지 유형의 질문에 대해서 분석합니다. 물론 자바스크립트 면접을 위해 이 3가지 질문만 공부하면 되는 것은 아니지만, 면접관들은 이 3가지 질문으로 당신이 얼마나 자바스크립트의 언어 특성과 DOM 을 이해하고 있는지 판단할 것입니다. 자 그럼 본격적으로 시작하기에 앞서 말씀 드릴 것은 아래에 나오는 예제들은 모두 *바닐라 자바스크립트* 를 사용합니다. 면접관들은 당신이 jQuery 나 라이브러리의 도움 없이 얼마나 자바스크립트를 잘 구현할 수 있을지 궁금해 하기 떄문이죠.

## 질문 1 : 이벤트 위임하기
어플리케이션을 제작할 때 사용자가 페이지 요소를 조작할 수 있도록 페이지의 버튼, 텍스트, 이미지 등에 이벤트를 붙여야할 때가 있습니다.
예를들어, 면접에서 면접관이 todo 리스트 어플리케이션 제작에 대해 질문합니다. "해당 리스트의 아이템에 대해서 사용자가 클릭할 떄 이벤트가 일어나도록 구현하라" 라고 하면서 아래와 같은 샘플을 주겠죠.

``` html
<ul id="todo-app">
  <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>
```

그렇다면 아마 대부분이 아래와 같이 구현할 것입니다.

``` javascript
document.addEventListener('DOMContentLoaded', function() {

  let app = document.getElementById('todo-app');
  let items = app.getElementsByClassName('item');

  // attach event listener to each item
  for (let item of items) {
    item.addEventListener('click', function() {
      alert('you clicked on item: ' + item.innerHTML);
    });
  }

});
```

위 코드가 제대로 동작하지만 문제점은 리스트의 아이템 각각에 이벤트를 붙이고 있는 것입니다. 아이템 요소가 위와같이 4개일 때는 상관이 없지만 만약 10,000 개 라면요? 위 함수는 10,000 개의 분리된 이벤트 리스너를 생성하고 그걸 각각 DOM에 등록할 것입니다. 이는 매우 비효율적이죠.

이런 면접에서는 먼저 면접관에게 사용자가 최대로 입력할 수 있는 요소의 개수를 물어보는 것이 좋습니다. 최대 갯수가 10개가 넘지 않는다면, 위 코드는 문제가 없을테니까요. 하지만 만약 사용자가 입력할 수 있는 아이템 수가 무한개라면 더 효율적인 해결책을 찾아야 합니다.

아이템 갯수마다 이벤트 리스너를 생성, 등록 하는 것보다는 모든 아이템 리스트에 대해서 한 개의 이벤트 리스너를 생성하여 전체 영역에 등록하는 것이 훨씬 효율적이죠. 그렇게 하면 사용자가 해당 아이템을 선택했을 때 이벤트 리스너가 해당 아이템에 대해서 이벤트를 발생시킵니다. 이 것을 우리는 **이벤트 위임** 이라고 합니다. 각각의 이벤트 핸들러를 붙이는 방식보다 훨씬 효율적이죠.

아래 코드는 위의 **이벤트 위임** 을 구현한 것입니다.

``` javascript
document.addEventListener('DOMContentLoaded', function() {

  let app = document.getElementById('todo-app');

  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });

});
```

## 질문 2 : 루프에서 클로져 이용하기
클로져는 면접자가 얼마나 자바스크립트에 익숙한지, 언제 구현해야 할 줄 아는지 를 파악하기 위해 면접에서 자주 나오는 질문 중 하나 입니다.

클로져는 이너함수가 스코프 밖에 있는 변수에 접근하는 것입니다. 클로져는 보통 정보은닉을 구현하거나 함수 팩토리를 생성할 때 사용됩니다. 면접에서 자주 나오는 질문 중 하나는 다음과 같습니다.

*정수 값을 갖는 리스트를 반복하여 해당 요소마다 3초를 지연시켜 값을 출력하라*

일반적으로 개발자들은 위 질문을 아래와 같이 구현합니다.

``` javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

위 코드를 실행하면 각 인덱스에서 3초씩 지연된 후 0, 1, 2, 3 찍히는 것이 아니라, 모두 4 가 찍힙니다. 왜 그럴까요?

이 문제를 제대로 이해하기 위해서는 자바스크립트의 특성을 이해하고 있는 것이 좋습니다. 문제의 원인은 `setTimeout` 함수가 인덱스 i 를 반복하는 스코프 밖의 스코프를 갖는 클로져를 생성하기 떄문입니다. 3초가 지난 후에 클로저가 실행되고 i 값을 출력할 때 반복문의 종료 값인 4 를 출력합니다. 이는 `setTimeout` 의 스코프와 반복문 안의 스코프가 다르기 때문에 발생하는 현상이죠.

이를 해결하는 여러가지 방법 중 2가지를 아래에 써봤습니다.

``` javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}
```

``` javascript
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

## 질문 3 : 디바운싱 (Debouncing)
브라우저 이벤트 중에는 윈도우 크기를 재조정 하거나, 페이지 스크롤을 내리는 등의 매우 짧은 시간에 다수 발생하는 이벤트들이 있습니다. 예를 들어, 화면 스크롤에 이벤트 리스너를 단다고 가정합시다. 사용자가 페이지 스크롤을 빨리 내리면 이벤트는 3초의 간격 안에 몇 천번 이상의 이벤트를 발생시킬 것이고 이는 성능에 심각한 악영향을 줍니다.

면접에서 어플리케이션 제작에 대해 논할 때, 스크롤링이나 화면 재조정 그리고 키 눌림과 같은 이벤트에 대해서는 페이지 속도와 성능을 향상시키기 위한 디바운싱(Debouncing) 또는 쓰로틀링(Throttling) 를 꼭 짚고 넘어가야 합니다. 이에 대한 실제 사례를 봅시다.

> 트위터~

디바운싱은 위 같은 문제 유형에서 실제로 함수가 다시 호출되기 전까지 시간 간격을 두어 성능 이슈를 해결하는 한가지 방법입니다. 디바운싱의 올바른 구현방법은 몇가지 함수 호출을 한 개의 그룹으로 묶고 특정 시간이 지난 후에야만 호출될 수 있도록 구조화 하는 것이죠. 아래는 플레인 자바스크립트로 스코프, 클로져, this, timing 이벤트를 구현한 예제입니다.

``` javascript
// debounce function that will wrap our event
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}
```

이벤트에 감싼 위 함수는 특정 시간 후에만 실행이 됩니다. 위 함수를 실제로 사용하는 예제는 아래와 같습니다.

``` javascript
// function to be called when user scrolls
function foo() {
  console.log('You are scrolling!');
}

// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));
```

쓰로틀링 (Throttling) 은 함수가 호출되기 전에 특정 시간을 기다리는 것만 제외하고는 디바운싱과 비슷한 다른 기술입니다.
