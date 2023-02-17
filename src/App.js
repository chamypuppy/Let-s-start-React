/* eslint-disable */ /* 변수 만들어놓고 안 썼어요를 잡아주지 않는 코드 */


import { useState } from 'react'; /* 리액트에 있는 내장함수를 하나 쓰겠다~ */
import logo from './logo.svg';
import './App.css';

function App() {
  
    let [글제목, 글제목변경함수] = useState(["푸딩 종류", "설향 딸기 라떼 만들기", "촉촉한 딸기 쇼트 케이키"]);
    let [따봉, 따봉변경함수] = useState(0);
    let [글변경, 글변경함수] = useState(["커스터드 케이키", "딸기 쇼트 푸딩", "설향 바나나"]);
  

  function 제목변경() {
    let newItem = [...글제목]; /* 특히나 array나 object일 경우 복사를 해서 state변경. (참고 - state는 직접 변경이 안 됨) */
    newItem[0] = "커스터드 케이키";
    글제목변경함수( newItem );
    }
  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      <div className='list'>
      <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경함수(따봉+1) } }>🧡</span> { 따봉 } </h3>
        <p>2023-02-13</p>
        <hr/>
      </div>

      <div className='list'>
      <h3> { 글제목[1] } </h3>
        <p>2023-02-14</p>
        <hr/>
      </div>

      <div className='list'>
      <h3> { 글제목[2] } </h3>
        <p>2023-02-15</p>
        <hr/>
      </div>
      <button onClick={ 제목변경 }>글 변경</button>
    </div>
  );
}

export default App;
