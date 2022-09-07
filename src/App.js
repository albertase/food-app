import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from "./components/Layout/Layouts"
import ProfileForm from './components/Profile/ProfileForm';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
         {authCtx.isLoggedIn && <UserProfile />}
         {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path='/reset'>
          <ProfileForm />
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;






// {
//   "rules": {
//     ".read": "now < 1663110000000",  // 2022-9-14
//     ".write": "now < 1663110000000",  // 2022-9-14
//     "ingredients": {
//       ".indexOn": ["title"]
//     }
//   }
// }