/* eslint-disable */ /* 변수 만들어놓고 안 썼어요를 잡아주지 않는 코드 */


import { useState } from 'react'; /* 리액트에 있는 내장함수를 하나 쓰겠다~ */
import logo from './logo.svg';
import './App.css';

function App() { /* 이 app function도 하나의 컴포넌트이기 때문에 다른 컴포넌트 창조시 이거 밑에 나란히 만들면 된다! */
  
    let [글제목, 글제목변경함수] = useState(["푸딩 종류", "설향 딸기 라떼 만들기", "촉촉한 딸기 쇼트 케이키"]);
    let [따봉, 따봉변경함수] = useState([0, 0, 0]);
    let [글변경, 글변경함수] = useState(["커스터드 케이키", "딸기 쇼트 푸딩", "설향 바나나"]);
  let [modal, setModal] = useState(false); /* 여기에는 현재 상태를 적어주는 게 좋다고 했지만, false로 하신 걸 보니 주로 처음 웹페이지에 들어갔을 때 보였으면 좋겠는 상태를 적는 게 좋은 것 같다! 닫힘 열림 외에도 0이나 1, true나 false와 같이 상태를 표현할 수 있는 말이면 다 되는 것 같다! */
  

  function 제목변경() {
    let newItem = [...글제목]; /* 특히나 array나 object일 경우 복사를 해서 state변경. (참고 - state는 직접 변경이 안 됨) */
    newItem[0] = "커스터드 케이키";
    글제목변경함수( newItem );
  }
  
  function likeItCount() {
    let like = [...따봉];
    like[i] = like[i] + 1;
    따봉변경함수( like )
  }
  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      {/* <div className='list'>
      <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경함수(1) } }>🧡</span> { 따봉 } </h3>
        <p>2023-02-13</p>
        <hr/>
      </div>

      <div className='list'>
      <h3> { 글제목[1] } </h3>
        <p>2023-02-14</p>
        <hr/>
      </div>

      <div className='list'>
      <h3  onClick={ () => { setModal(!modal) } }> { 글제목[2] } </h3>
        <p>2023-02-15</p>
        <hr/>
      </div> */}
      
      <button onClick={ 제목변경 }>글 변경</button>

      {
        modal == true ? <Modal /> : null
      }

      {
       글제목.map(function (a, i){
         return (<div className='list' key={i}>
          <h3 /* onClick={() => { setModal(!modal) }} */> { a }
             <span onClick={() => {
               let like = [...따봉];
                like[i] = like[i] + 1;
               따봉변경함수(like)
             }}
             className="like">🧡</span>
            { 따봉[i] }
          </h3>
        <p>2023-02-15</p>
        <hr/>
      </div>)
        })
      }

    </div>
  );
}

function Modal() { /* 리액트 특징 7. 긴 html 코드를 component를 이용해서 축약 및 치환할 수 있다! => 관리가 편해진다. 그렇지만 뭐든 과하면 복잡하듯, 많이 만들면 관리가 점점 더 어려워지니 꼭 필요할 때만 만들기를!*/
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


export default App;
