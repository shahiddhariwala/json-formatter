import React from 'react';
const getJsonIndented = (obj) => {
    console.log("JSON Data",obj);
    for(let key in obj)
    {
        console.log(key);
        if(typeof obj[key]==="string")
        {
            console.log("Its a String");
        }
        else if(typeof obj[key]==="number")
        {
            console.log("it a number");
        }
        else if(typeof obj[key]==="object")
        {
            if(Array.isArray(obj[key]))
            {
                console.log("it an Array");
            }
            else{
                console.log("it a Object");
            }
        }
        else if(typeof obj[key]==="function")
        {
            console.log("its a function");
        }
        else if(typeof obj[key]==="undefined")
        {
            console.log("its a undefined");
        }
    }
    return JSON.stringify(obj, null, 4);

}


const JSONDisplayer = ({children}) => (
    <div>
        <pre>{children ? getJsonIndented(children) : null}</pre>
    </div>
)
export default JSONDisplayer;