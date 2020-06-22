import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
  
    return promiseInProgress && 
    <div
    style={{
        position: "fixed",

    top: 0,
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
      <div style={{
           display: "flex",
           marginTop: "18%",
           marginRight:"30%"
      }}><Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /></div>
    
  </div>
  };

  export default LoadingIndicator;