import React, {useRef, useState} from 'react';
import axios from "axios";
import {useInput} from "../hooks/input-hook";
import {MyConfig} from "../config/config";
import {HandleToastMessage, StatusEnum} from "../common/utils";

const AppDeploy = () => {

    const refAppSelect = useRef();
    const [dataList, setDataList] = useState([]);
    const [artifactId, setArtifactId] = useState('');
    const [requirementData, setRequirementData] = useState({});
    const [requirementDataOutput, setRequirementDataOutput] = useState({});
    const {value: deployType, bind: bindDeployType, reset: resetDeployType} = useInput('');

    const getEntityList=() => {
        async function fetchData() {
            // You can await here
            const response = await axios(
                MyConfig.apiBaseUrl + MyConfig.fetchEntityApp +'?type=APP'
            );
            setDataList(response.data.data);
        }
        fetchData().then(r => console.log("App fetched successfully for App deploy"));
    };

    const saveObject = (event) => {
        event.preventDefault();
        setArtifactId(event.target.value);
    };

    const handleRequirementSubmit = (e) => {
        e.preventDefault();
        const data = {
                "app": {
                    "artifactId": artifactId
                },
                "type": deployType
            };
        postAppRequirement(data);

    };
    const postAppRequirement=(data) =>{
        const requestOpt ={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "context": {
                    "handle": "string"
                },
                "data":data})
        };

        fetch(MyConfig.apiBaseUrl+ MyConfig.appRequirement,requestOpt).then(response => response.json())
            .then(data => {
                console.log("hi"+ JSON.stringify(data))
                setRequirementData(data);
            });
    };

    const bindValue = (e) => {
        setRequirementDataOutput({
            ...requirementDataOutput,
            [e.target.name] : e.target.value
        })
    };

    const handleAppDeploySubmit = (e) => {
        e.preventDefault();
        const data = {
            "app": {
                "artifactId": artifactId
            },
            "localDeploymentRequired": requirementDataOutput,
            "type": deployType
        };
        postAppDeploy(data);
        console.log(JSON.stringify(requirementDataOutput))
    };

    const postAppDeploy=(data) =>{
        const requestOpt ={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "context": {
                    "handle": "string"
                },
                "data":data})
        };

        fetch(MyConfig.apiBaseUrl+ MyConfig.appDeploy,requestOpt).then(resp =>{
            console.log(resp);
            switch (resp.status) {
                case 200:
                    HandleToastMessage("App Deployment successfully triggered",StatusEnum.SUCCESS);
                    resetDeployType();
                    refAppSelect.current.value="";
                    setRequirementData({});
                    setRequirementDataOutput({});
                    data = {};
                    break;
                case 400:
                    HandleToastMessage("App Deploy failed",StatusEnum.FAIL);
                    break;
                default:
                    HandleToastMessage("App Deploy failed",StatusEnum.FAIL);
                    break;
            }
        })
        //     .then(resp => resp.json()).then(data => {
        //     console.log("deploy response"+ JSON.stringify(data))
        // })
    };

    return (
        <form onSubmit={handleAppDeploySubmit}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label>App</label><span className="required">*</span>
                    <select className="form-control" onClick={getEntityList} onChange={saveObject} ref={refAppSelect}>
                        <option value="" defaultValue="">Select Entity</option>
                        {dataList.map((data, ids) => (<option key={ids} value={data.artifactId}>{data.label}</option>))}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label>Deployment Type</label><span className="required">*</span>
                    <select className="form-control" {...bindDeployType}>
                        <option value="" defaultValue="">Select Entity</option>
                        <option value="LOCAL" >Local Deployment</option>
                        <option value="REMOTE" >Remote Deployment</option>
                        <option value="DOCKER_IMG" >Docker Deployment</option>

                    </select>
                </div>
                <button type="submit" onClick={handleRequirementSubmit} className="btn btn-info float-right btn-sm ml-3 mb-3 mt-3 "> Get Requirement </button>
            </div>

            <div className="form-row">
                {
                    Object.keys(requirementData).map((key, i) => (
                        <div key={i} className="form-group col-md-6">
                            <label>{requirementData[key]}</label>
                            <input  name={key}  type="text" onChange={bindValue} className="form-control"/>
                        </div>
                    ))
                }
            </div>

            <button type="submit" className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">
                Deploy App
            </button>
        </form>

    );
};

export default AppDeploy;