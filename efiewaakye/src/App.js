import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify'

function App() {
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user: ', user)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button onClick={() => Auth.federatedSignIn({
          provider: "Facebook"
        })}>Sign in with Facebook</button> */}
        <button onClick={checkUser}>Check User</button>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default App;
