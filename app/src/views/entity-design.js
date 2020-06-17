import React, {useState} from 'react';
import EntityField from "../components/entity-field";
import {useInput} from "../hooks/input-hook";
import EntityState from "../components/entity-state";
import { HandleToastMessage, StatusEnum } from '../common/utils';
import { MyConfig } from '../config/config';

const EntityDesign = () => {

    const [idField, setIdField] = useState({});
    const [fields, setFields] = useState([]);
    const [entityState, setEntityState] = useState({});
    const {value: entityName, bind: bindEntityName, reset: resetEntityName} = useInput('');
    const {value: entityDesc, bind: bindEntityDesc, reset: resetEntityDesc} = useInput('');
    const {value: entityVersion, bind: bindEntityVersion, reset: resetEntityVersion} = useInput('');
    const {value: entityArtifactId, bind: bindEntityArtifactId, reset: resetEntityArtifactID} = useInput('');


    let data = {
        "artifactId": entityArtifactId,
        "description": entityDesc,
        "fields": fields,
        "idField": idField,
        "name": entityName,
        "state":entityState,
        "version": entityVersion
    };

    const handleEntityDesignSubmit = (e) => {
        e.preventDefault();
        console.log("nope" + JSON.stringify(data));
        postEntityData(data);
    };

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
          }
          
        fetch(MyConfig.apiBaseUrl+ MyConfig.createEntityURI,requestOpt).then(resp =>{
            console.log(resp);
            switch (resp.status) {
                case 200:
                    HandleToastMessage("Entity has been created.",StatusEnum.SUCCESS);
                    resetEntityName();
                    resetEntityDesc();
                    resetEntityVersion();
                    resetEntityArtifactID();
                    setFields([]);
                    setIdField({})
                    setEntityState({});
                    data = {};
                    break;
                case 400:
                    HandleToastMessage("Entity creation failed.",StatusEnum.FAIL);
                    break;
                default:
                    HandleToastMessage("Entity creation failed.",StatusEnum.FAIL);
                    break;
            }
          })
    }
    
    const entityStateCallback = (dataFromEntityState) => {
        console.log(JSON.stringify(dataFromEntityState));
            setEntityState(dataFromEntityState);
    };

    const entityFieldCallback = (dataFromEntityDesign) => {
        if (dataFromEntityDesign.properties.includes("ID")) {
            console.log("ID is here")
            setIdField(dataFromEntityDesign);
        } else {
            setFields([...fields, dataFromEntityDesign])
        }
    };

    return (
        <form onSubmit={handleEntityDesignSubmit}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label>Name</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="Entity Name" {...bindEntityName}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Description</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="Entity Description" {...bindEntityDesc}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Version</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="Entity Version" {...bindEntityVersion}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Artifact ID</label><span className="required">*</span>
                    <input type="text" className="form-control"
                           placeholder="Entity Artifact ID" {...bindEntityArtifactId}/>
                </div>
            </div>
            <div>
                <EntityState callbackFromEntityState={entityStateCallback} fields={fields} idField={idField} entityState={entityState}/>
            </div>
            <div>
                <EntityField callbackFromEntity={entityFieldCallback} fields={fields} idField={idField}/>
            </div>

            <button type="submit"
                    className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Create Entity
            </button>

        </form>
    );
};

export default EntityDesign;