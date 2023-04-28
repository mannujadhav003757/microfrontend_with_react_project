import React from "react";
import { mount } from "marketing/MarketingApp"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/styles";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp"
import Header from "./components/Header";
import { lazy, Suspense,useState } from "react";
import Progress from "./components/Progress";
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))


// Here we create by default generate classname's using "ma" prefix
// for avoiding micro-frontend application css ambigiuity or duplication on production


const generateClassName = createGenerateClassName({
    productionPrefix : "co"
})
export default function App(){
    const [isSignedIn,setIsSignedIn] = useState(false)
    return <>
    
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
<Header isSignedIn={isSignedIn}/>
    {/* <MarketingApp /> */}
    <Suspense fallback={<Progress />}>
    <Switch>
        <Route path="/auth">
            <AuthLazy onSignIN={()=>setIsSignedIn(true)}/>
        </Route>
        <Route path="/dashboard" component={DashboardLazy} />
        <Route path="/" component={MarketingLazy} />
    </Switch>
    </Suspense>
    </div>
    </StylesProvider>
    </BrowserRouter>
    </>
}