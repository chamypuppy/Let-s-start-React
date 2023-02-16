/* eslint-disable */ /* 변수 만들어놓고 안 썼어요를 잡아주지 않는 코드 */


import { useState } from 'react'; /* 리액트에 있는 내장함수를 하나 쓰겠다~ */
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState("남자 코트 추천"); 
  /* useState()를 사용하면 Array형태가 만들어지는데 그 안에 두 개의 데이터가 존재한다. 
  [state데이터(남자 코트 추천), state 데이터 변경 함수] */
  let [글제목2, 글제목변경2] = useState(["남자 코트 추천", "강남 우동 맛집"]); 
  /* state는 array, object... 모두 넣어도 됨! 위 코드처럼 */
    let [글제목3, 글제목변경3] = useState(["푸딩 종류", "설향 딸기 라떼 만들기", "촉촉한 딸기 쇼트 케이키"]); 
  

  let posts = "강남 고기 맛집";
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      <div className='list'>
      <h3> { 글제목3[0] } </h3>
        <p>2023-02-13</p>
        <hr/>
      </div>

      <div className='list'>
      <h3> { 글제목3[1] } </h3>
        <p>2023-02-14</p>
        <hr/>
      </div>

      <div className='list'>
      <h3> { 글제목3[2] } </h3>
        <p>2023-02-15</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
