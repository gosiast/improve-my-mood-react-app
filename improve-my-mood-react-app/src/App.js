import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
Welcome!  How do you feel today? Are you <strong>energetic</strong> or do you need some energy to feel <strong>at your best</strong>?      </p>
        
        
      </header>
      <footer className="App-footer">
          This project was coded by{' '}
          <a
            href="https://github.com/gosiast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Malgorzata Stano
          </a>{' '}
          and is
          <a
            href="https://github.com/gosiast/improve-my-mood-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            open sourced{' '}
          </a>{' '}
        </footer>
    </div>
  );
}

export default App;
