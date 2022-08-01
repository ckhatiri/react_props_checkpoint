import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {

    return (
        <div>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ fontSize: "30px",textDecorationLine:"underLine" }}>Full Name:</h1>
          <p style={{ fontSize: "25px",marginTop:"25px",marginLeft:"10px"  }} > {props.profile.fullName}</p>
        </div>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ fontSize: "30px",textDecorationLine:"underLine" }}>Bio:</h1>
         <p style={{  fontSize: "25px",marginTop:"25px",marginLeft:"10px" }}> {props.profile.bio}</p>
        </div>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ fontSize: "30px",textDecorationLine:"underLine" }}>Profession:</h1>
        <p style={{  fontSize: "25px",marginTop:"25px",marginLeft:"10px" }} >{props.profile.profession}</p>
        </div>
        <div  style={{margin:"10px 0 10px" }}> {props.children}</div>
        <button style={{textAlign: "center", fontSize: "20px",width:"120px", borderRadius:"10px",  height:"50px", margin:"10px 0 10px" }}  onClick={props.handleName}></button>
        </div>
    );
};

export default Profile;

Profile.PropTypes ={
    
        anyProp: PropTypes.any,
        booleanProp: PropTypes.bool,
        numberProp: PropTypes.number,
        stringProp: PropTypes.string,
        functionProp: PropTypes.func
}