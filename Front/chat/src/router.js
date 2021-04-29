import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chat} />
            <Route path="/create" component={Cadastro} />
        </Switch>
    </BrowserRouter>
)

export default Routes;