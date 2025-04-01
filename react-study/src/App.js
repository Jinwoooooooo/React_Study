import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [a, b] = useState('프로그래밍 언어 추천');
  let [logo, setLogo] = useState('ReactStudy');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
      <div className="list">
        <h4>{ a }</h4>
        <p>2025년 04월 02일 발행</p>
      </div>
    </div>
  );
}

export default App;
