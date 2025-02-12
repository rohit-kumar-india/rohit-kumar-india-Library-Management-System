import React, { Component } from "react";
import { getToken } from "./Session";

const PublicRoute = ({component:Component,...rest}) =>{
    return(
        <Route
        {...rest}
        render={props =>{
            !getToken() ? <Component {...props} />
            : <Redirect to={}/>
        }
        />
    )
}

export default PublicRoute;