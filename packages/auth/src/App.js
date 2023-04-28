import React from "react";
import {Switch,Route, Router} from 'react-router-dom'
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
import Signin from './components/Signin'
import SignUp from "./components/Signup";
//import Header from "./components/Header";

// Here we create by default generate classname's using "ma" prefix
// for avoiding micro-frontend application css ambigiuity or duplication on production

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default function App({history,onSignIN}){
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history ={history}>
            <Switch>
                <Route path='/auth/signin' component={Signin}>
                    <Signin onSignIN={onSignIN} />
                </Route>
                <Route path='/auth/signup' component={SignUp}>
                    <SignUp onSignIN={onSignIN} />
                </Route>
            </Switch>
            </Router>
        </StylesProvider>
    </div>
}