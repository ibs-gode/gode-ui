import React, {useState} from 'react';
import {useInput} from "../hooks/input-hook";
import EntityAppList from "../components/entity-app-list";
import EntityWithNameList from "../components/entity-with-name-list";
import {MyConfig} from "../config/config";
import {HandleToastMessage, StatusEnum} from "../common/utils";

const AppDesign = () => {

    const {value: appName, bind: bindAppName, reset: resetAppName} = useInput('');
    const {value: appDesc, bind: bindAppDesc, reset: resetAppDesc} = useInput('');
    const {value: appVersion, bind: bindAppVersion, reset: resetAppVersion} = useInput('');
    const {value: appArtifactId, bind: bindAppArtifactId, reset: resetAppArtifactID} = useInput('');
    const {value: funMethodName, bind: bindFunMethodName, reset: resetFunMethodName} = useInput('');
    const {value: appAvailability, bind: bindAppAvailability, reset: resetAppAvailability} = useInput('');
    const {value: appDistributes, bind: bindAppDistributes, reset: resetAppDistributes} = useInput('');
    const {value: appScalability, bind: bindAppScalability, reset: resetAppScalability} = useInput('');
    const [appDependencies, setAppDependencies] = useState([]);
    const [entities, setEntities] = useState([]);
    const [functionInputs, setFunctionInputs] = useState([]);
    const [functionOutputs, setFunctionOutputs] = useState([]);
    const [functionItems, setFunctionItems] = useState([]);
    const [resetRequired, setResetRequired] = useState('');

    const postEntityData=(data) =>{
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

        fetch(MyConfig.apiBaseUrl+ MyConfig.appDesignURI,requestOpt).then(resp =>{
            console.log(resp);
            switch (resp.status) {
                case 200:
                    HandleToastMessage("App design has been successful.",StatusEnum.SUCCESS);
                    resetAppName();
                    resetAppDesc();
                    resetAppVersion();
                    resetAppArtifactID();
                    resetAppAvailability();
                    resetAppDistributes();
                    resetAppScalability();
                    setEntities([]);
                    setFunctionItems([]);
                    setAppDependencies([]);
                    setFunctionInputs([]);
                    setFunctionOutputs([]);
                    data = {};
                    break;
                case 400:
                    HandleToastMessage("App design failed.",StatusEnum.FAIL);
                    break;
                default:
                    HandleToastMessage("App design failed.",StatusEnum.FAIL);
                    break;
            }
        })
    };

    const dependenciesCallBack = (dataFromEntityList) => {
        setAppDependencies([...appDependencies, dataFromEntityList])
    };

    const entitiesCallBack = (dataFromEntityList) => {
        setEntities([...entities, dataFromEntityList])
    };

    const functionInputCallBack = (dataFromEntityWithArgList) => {
        setFunctionInputs([...functionInputs, dataFromEntityWithArgList])
        setResetRequired("");
    };

    const functionOutputCallBack = (dataFromEntityWithArgList) => {
        setFunctionOutputs([...functionOutputs, dataFromEntityWithArgList])
        setResetRequired("");
    };

    const handleAddFunctionSubmit = (evt) => {
        evt.preventDefault();
        setFunctionItems([...functionItems, {
            methodName: funMethodName,
            input: functionInputs,
            output: functionOutputs
        }]);
        console.log(JSON.stringify(functionInputs));
        resetFunMethodName();
        setFunctionInputs([]);
        setFunctionOutputs([]);
        setResetRequired("YES")
    };

    const booleanConvert = (str) => {
        if (str === "True") {
            return true;
        } else if (str === "False") {
            return false;
        } else {
            return "";
        }
    };

    let data = {
        artifactId: appArtifactId,
        dependencies: appDependencies,
        description: appDesc,
        entities: entities,
        functions: functionItems,
        name:appName,
        usage: {
            availability:appAvailability,
            distributes:booleanConvert(appDistributes),
            scalability:appScalability
        },
        version : appVersion
    };

    const display = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        postEntityData(data);
    };

    return (
        <form onSubmit={display}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label>Name</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Name" {...bindAppName}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Description</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Description" {...bindAppDesc}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Version</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Version" {...bindAppVersion}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Artifact ID</label><span className="required">*</span>
                    <input type="text" className="form-control"
                           placeholder="App Artifact ID" {...bindAppArtifactId}/>
                </div>
            </div>
            <div>
                <label>Usage</label>
                <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
                    <div className="form-row mr-1 mt-2">
                        <div className="form-group col-md-4">
                            <label className="font-weight-light">Availability</label>
                            <select className="form-control" {...bindAppAvailability}>
                                <option value="" hidden>Select</option>
                                <option value="HIGH">High</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="LOW">Low</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="font-weight-light">Distributes</label>
                            <select className="form-control" {...bindAppDistributes}>
                                <option value="" hidden>Select</option>
                                <option value="True">Yes</option>
                                <option value="False">No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="font-weight-light">Scalability</label>
                            <select className="form-control" {...bindAppScalability}>
                                <option value="" hidden>Select</option>
                                <option value="HIGH">High</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="LOW">Low</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </div>
            <EntityAppList type={"ENTITY"} label={"Dependencies"} callBackFunction={dependenciesCallBack}/>
            <EntityAppList  type={"ENTITY"} label={"Entities"} callBackFunction={entitiesCallBack}/>
            <div>
                <div>
                    <label>Functions</label><span className="required">*</span>
                    <button type="submit"  onClick={handleAddFunctionSubmit} className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add Function</button>
                    <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
                        <div className="form-row mt-3">
                            <div className="form-group ">
                                <label className="pt-2 form-control-sm">Method Name</label>
                            </div>
                            <div className="form-group ml-3">
                                <input type="text" className="form-control" {...bindFunMethodName}
                                       placeholder="Method Name"/>
                            </div>
                        </div>
                        <div className="mr-3">
                            <EntityWithNameList label={"Input"} clearTable={resetRequired} callBackFunction={functionInputCallBack}/>
                        </div>
                        <div className="mr-3">
                            <EntityWithNameList label={"Output"} clearTable={resetRequired} callBackFunction={functionOutputCallBack}/>
                        </div>
                    </fieldset>
                </div>
                <table className="table mt-3 border border-info table-striped">
                    <thead className="table-info">
                    <tr>
                        <th className="font-weight-bold">Name</th>
                        <th className="font-weight-bold">Input</th>
                        <th className="font-weight-bold">Output</th>
                    </tr>
                    </thead>
                    <tbody>

                    {functionItems.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="font-weight-light">{item.methodName}</td>
                                <td className="font-weight-lighter small">
                                    <ul>{
                                        item.input.map((inputs , ids)=> (<li key={ids}>{inputs.argumentName}</li>))
                                    }</ul>

                                </td>
                                <td className="font-weight-lighter small">
                                    <ul>{
                                        item.output.map((outputs , ids)=> (<li key={ids}>{outputs.argumentName}</li>))
                                    }</ul>

                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <button type="submit"
                    className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Create App
            </button>
        </form>
    );

};

export default AppDesign;