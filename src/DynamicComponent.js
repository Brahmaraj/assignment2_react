import React from "react";

const DynamicCpmponent = (props) =>{
    console.log(props);
    // console.log(props.data.name);
    // console.log(props.data.dept);
    // console.log(props.data.rating);
    return (
    <div>
        {props.data.name} || {props.data.dept} || {props.data.rating}
    </div>
    );
}

export default DynamicCpmponent;