/* eslint-disable */ //Warning 메세지 지우는 코드

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'ReactStudy';
  let [글제목, b] = useState(['프로그래밍 언어 추천','Java','Python']);
  let zero = 0;
  let [simpleCount, simpleCountFunc] = useState(0);
  let [count, changeCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ post }</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { changeCount(count+1) }}>👍</span> { count } </h4>
        <p>2025년 04월 02일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2025년 04월 02일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2025년 04월 02일 발행</p>
      </div>
      <div className="list">
        <h4>현재 카운트 :</h4>
        <p>{ simpleCount }</p>
        <div className="btnContainer">
          <button onClick={() => { simpleCountFunc(simpleCount-1) }}>-1</button>
          <button onClick={() => { simpleCountFunc(simpleCount-10) }}>-10</button>
          <button onClick={() => { simpleCountFunc(simpleCount-100) }}>-100</button>
          <button onClick={() => { simpleCountFunc(simpleCount+100) }}>+100</button>
          <button onClick={() => { simpleCountFunc(simpleCount+10) }}>+10</button>
          <button onClick={() => { simpleCountFunc(simpleCount+1) }}>+1</button>
        </div>
      </div>
    </div>
  );
}

export default App;
