import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import AllBooksScreen from './AllBooksScreen.js';
import AboutUsScreen from './AboutUsScreen.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
        <Route path="/login" exact={true} component={LoginScreen} />
        <Route path="/profile" exact={true} component={ProfileScreen} />
        <Route path="/logout" exact={true} component={MainScreen} />
        <Route path="/allBooks" exact={true} component={AllBooksScreen} />
        <Route path="/aboutUs" exact={true} component={AboutUsScreen} />

      </Switch>
    </BrowserRouter>
  )
}

export default App;