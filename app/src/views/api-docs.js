import React, {useState,useEffect} from "react";

const ApiDocs = (props) => {

    const [deployMonitorData, setDeployMonitorData] = useState({});
    const openMonitorPage =()=>{
        console.log(deployMonitorData.monitorUrl)
            window.open(deployMonitorData.monitorUrl,"_blank");
    }

    useEffect(() => {
        console.log("apidoc",props.deployMonitorData)
        setDeployMonitorData(props.deployMonitorData);
    },[props]);

    const openSwaggerPage =()=>{
        console.log(deployMonitorData.appDocsUrl)
        window.open(deployMonitorData.appDocsUrl,"_blank");
    }
    return(
        <div className=" form-row">
            <button type="button" onClick={openMonitorPage} className="btn btn-info font-weight-bold">
                App Admin Portal
            </button>

            <button type="button" onClick={openSwaggerPage} className="btn btn-info ml-5 font-weight-bold">
                App API Docs
            </button>
        </div>
    );
};

export default ApiDocs;