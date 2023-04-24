import React from "react";
import { mount } from "marketing/MarketingApp"
import { BrowserRouter } from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

// Here we create by default generate classname's using "ma" prefix
// for avoiding micro-frontend application css ambigiuity or duplication on production


const generateClassName = createGenerateClassName({
    productionPrefix : "co"
})
export default function App(){
    return <>
    
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
    <Header/>
    <MarketingApp />
    </div>
    </StylesProvider>
    </BrowserRouter>
    </>
}