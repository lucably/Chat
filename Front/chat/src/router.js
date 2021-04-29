import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chat} />
        </Switch>
    </BrowserRouter>
)

export default Routes;