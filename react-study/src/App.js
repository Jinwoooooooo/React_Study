import logo from './logo.svg';
import './App.css';

function App() {

  let lang = 'react';

  return (
    <div className="App">
      <div className="container">
        <h4 id={ lang } style={ {color : 'red', fontSize : '24px', fontWeight : 'lighter'} }>{ lang }</h4>
      </div>
    </div>
  );
}

export default App;
