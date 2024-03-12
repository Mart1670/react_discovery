// import logo from './logo.svg';
import './App.css';
import MyButton from './tests/button.js'
import AboutPage from './tests/about.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to my House !</h1>
          <MyButton />
        </div>
      </header>
      <main>
        <AboutPage />
      </main>
    </div>
  );
}

export default App;
