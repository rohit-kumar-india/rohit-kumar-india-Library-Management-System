import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import adminApi from "../api/Admin";
import studentsApi from "../api/Students";
import { setUserSession } from "../utils/Session";


const Login = ()=>{
    const navigate = useNavigate();
    const location = useLocation()
    const { userType } = location.state

    console.log(location);
    console.log(userType);

    const [emailId,setEmailId]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    

    const authenticate = async(e) =>{
        setLoading(true);
        e.preventDefault();
        const user={emailId,password};
        console.log(user);

        let response={};
        if(userType==="Student")
            response = await studentsApi.get("/get/"+emailId);
        else if(userType==="Admin")
            response = await adminApi.get("/get/"+emailId);
        
        console.log(response.data.password);
        if(!response?.data){
            setError("Wrong Credentials");
            console.log("Wrong Credentials");
        }
        else if(response.data.password === password){
            console.log("Login Success");
            if(userType==="Student"){
                setUserSession(response.data,userType);
                navigate("/studentdashboard");
            }
                
            else if(userType==="Admin"){
                setUserSession(response.data,userType);
                navigate("/admindashboard");
            }
            
        }else{
            setError("Wrong Password")
            console.log("Wrong Password");
        }
        setLoading(false);
    };

    return(
        <div>
        <form class="row g-3 p-5 needs-validation" novalidate onSubmit={authenticate}>
            <div class="col"></div>
                    <div className="col-md-5 col-sm-10">
                        <h4 className="alert alert-primary text-center">{userType} Login</h4>	
                        <div className="row p-1">
                            <label for="name" className="col-sm-3 form-label"><span className="glyphicon glyphicon-user"></span> Email ID</label>
                            <div class="col-sm-9">
                                <input type="email" className="form-control" id="emailId" placeholder="Email id" required
                                value={emailId}
                                onChange={(e)=>setEmailId(e.target.value)}/>
                            </div>
                            <div class="invalid-feedback">
                                Please provide a valid email id.
                            </div>
                        </div>
                        
                        <div className="row p-1">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> Password</label>
                            <div class="col-sm-9">
                                <input type="Password" className="form-control" id="password" placeholder="Password" required
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div class="invalid-feedback">
                                Please provide a valid password.
                            </div>
                        </div>
                        {error && <div className="text-danger text-center">{error}</div>}
                        <div className="row">
                            <div class="col-sm-4"></div>
                            <div className="col-sm-4 p-3">
                                <button type="submit" className="btn btn-success btn-block" id="btn" disabled={loading}> {loading? "Loading..." : "Login"}</button>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </form>
                </div>
    );
}
export default Login;