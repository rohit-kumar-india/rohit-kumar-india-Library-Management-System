import React from "react";
import { getUser } from "../../utils/Session";


const StudentDashboard=()=>{
    const user=getUser();
    return(
        <div className="text-center">
          <h1>{user.name} Welcome to Student Dashboard</h1>
          <h2> by Rohit Kumar</h2>
        </div>
    );
}
export default StudentDashboard;