import React, { useState } from "react";
import studentApi from "../api/Students";

const SignUp=()=>{
    const [student,setStudent]=useState({
        emailId:"",
        name:"",
        password:"",
        mobileNo:"",
        address:"",
        dob:"",
        gender:""
    });

    let name,value;

    const handleInput=(e)=>{
        name=e.target.id;
        value=e.target.value;

        setStudent({...student,[name]:value})
    }
    console.log(student);
    const addStudent = async(e)=>{
        e.preventDefault();
        const response= await studentApi.post("/add",student);
        alert(response.data);
    };
    
    
    return(
        <div>
        <form class="row g-3 p-5 needs-validation" novalidate onSubmit={addStudent}>
            <div class="col"></div>
                    <div className="col-md-5 col-sm-10">
                        <h4 className="alert alert-info text-center">Student Registration</h4>	
                        <div className="row">
                            <label for="name" className="col-sm-3 form-label"><span className="glyphicon glyphicon-user"></span> Email ID</label>
                            <div class="col-sm-9">
                                <input type="email" className="form-control" id="emailId" placeholder="Email id" required 
                                value={student.emailId}
                                onChange={handleInput}/>
                            </div>
                            <div class="invalid-feedback">
                                Please provide a valid email id.
                            </div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> Name</label>
                            <div class="col-sm-9">
                                <input type="text" className="form-control" id="name" placeholder="Name" required 
                                value={student.name}
                                onChange={handleInput}/>
                            </div>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> Password</label>
                            <div class="col-sm-9">
                                <input type="Password" className="form-control" id="password" placeholder="Password" required 
                                value={student.password}
                                onChange={handleInput}/>
                            </div>
                            <div class="invalid-feedback">
                                Please provide a valid password.
                            </div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> Mobile Number</label>
                            <div class="col-sm-9">
                                <input type="number" className="form-control" id="mobileNo" placeholder="Mobile No" required 
                                value={student.mobileNo}
                                onChange={handleInput}/>
                            </div>
                            <div id="dmobile_error"></div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span>Address</label>
                            <div class="col-sm-9">
                                <input type="text" className="form-control" id="address" placeholder="Address" required 
                                value={student.address}
                                onChange={handleInput}/>
                            </div>
                            <div id="dresaddress_error"></div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> DOB</label>
                            <div class="col-sm-9">
                                <input type="date" className="form-control" id="dob" required 
                                value={student.dob}
                                onChange={handleInput}/>
                            </div>
                            <div id="ddob_error"></div>
                        </div>
                        <div className="row">
                            <label for="name" className="col-sm-3 control-label"><span className="glyphicon glyphicon-user"></span> Gender</label>
                            <div class="col-sm-9">
                                <select id="gender" className="form-control" 
                                value={student.gender}
                                onChange={handleInput}>
                                    <option value="" selected disabled>--Select Gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div id="dgender_error"></div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-sm-4"></div>
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-success btn-block" id="doctorregisterbtn"><span className="glyphicon glyphicon-log-in"></span> Register</button>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </form>
                </div>
    );
}
export default SignUp;