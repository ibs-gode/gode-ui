import React, {useState} from 'react';
import EntityField from "../components/entity-field";
import {useInput} from "../hooks/input-hook";
import EntityState from "../components/entity-state";

const EntityDesign = () => {

    const [idField, setIdField] = useState({});
    const [fields, setFields] = useState([]);
    const {value: entityName, bind: bindEntityName, reset: resetEntityName} = useInput('');
    const {value: entityDesc, bind: bindEntityDesc, reset: resetEntityDesc} = useInput('');
    const {value: entityVersion, bind: bindEntityVersion, reset: resetEntityVersion} = useInput('');
    const {value: entityArtifactId, bind: bindEntityArtifactId, reset: resetEntityArtifactId} = useInput('');


    const data = {
        "artifactId": entityArtifactId,
        "description": entityDesc,
        "fields": fields,
        "idField": idField,
        "name": entityName,
        //"state":{},
        "version": entityVersion
    };

    const handleEntityDesignSubmit = () => {
        console.log("nope" + JSON.stringify(data));
        resetEntityName();
        resetEntityDesc();
        resetEntityVersion();
        resetEntityArtifactId();

    };

    const entityFieldCallback = (dataFromEntityDesign) => {
        console.log(dataFromEntityDesign.name);
        if (dataFromEntityDesign.properties.includes("ID")) {
            console.log("ID is here")
            setIdField(dataFromEntityDesign);
        } else {
            setFields([...fields, dataFromEntityDesign])
        }
    };

    return (
        <form>
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
                <EntityState/>
            </div>
            <div>
                <EntityField callbackFromEntity={entityFieldCallback}/>
            </div>

            <button type="button" onClick={handleEntityDesignSubmit}
                    className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Create Entity
            </button>

        </form>
    );
};

export default EntityDesign;