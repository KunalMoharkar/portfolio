import React, { Component} from "react";
import { Switch, Route, HashRouter} from "react-router-dom";
import {About} from "./about";
import {Home} from "./home";
import {Projects} from "./projects";
import {Skills} from "./skills";

export const Routes=()=>{

    return(

        <HashRouter>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/About/"} component={About}/>
            <Route exact path={"/Skills/"} component={Skills}/>
            <Route exact path={"/Projects/"} component={Projects}/>
        </HashRouter>
    )

}

