// import logo from './logo.svg';
import './App.css';
import MyButton from './tests/button.js'
import AboutPage from './tests/about.js'
import LogIn from './tests/log-button.js';
import UserInfo from './tests/userInfo.js';
import { UserProvider } from './tests/userContext.js';

function App() {
  /* const [userLog, setUserLog] = useState(null); */

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <UserProvider>
          <UserInfo />
        </UserProvider>
        <LogIn />
        </div>
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
