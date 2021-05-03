import React, { Component} from "react";
import { Switch, Route} from "react-router-dom";
import {About} from "./about";
import {Home} from "./home";
import {Projects} from "./projects";
import {Skills} from "./skills";

export const Routes=()=>{

    return(

        <Switch>
            <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL+"/About/"} component={About}/>
            <Route exact path={process.env.PUBLIC_URL+"/Skills/"} component={Skills}/>
            <Route exact path={process.env.PUBLIC_URL+"/Projects/"} component={Projects}/>
        </Switch>
    )

}

