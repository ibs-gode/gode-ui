import React, {useState} from 'react';
import EntityField from "../components/entity-field";

const EntityDesign = () => {

    const [entityFieldObj, setEntityFieldObj] = useState({});

    const displayResult = () => {
        console.log(entityFieldObj.idField.name);
        console.log("nope"+JSON.stringify(entityFieldObj));
        setEntityFieldObj({});
    }

    const entityFieldCallback = (dataFromEntityDesign) => {

        // setEntityFieldObj(oldState => ({
        //     idField: {
        //         ...oldState.idField,
        //         name : dataFromEntityDesign.idField.name,
        //         description : dataFromEntityDesign.idField.description
        //     }
        // }));

        setEntityFieldObj(dataFromEntityDesign);
        console.log(dataFromEntityDesign.idField.name);
        if(dataFromEntityDesign.idField.properties.includes("ID")){
            console.log("ID is here")
        }
        //console.log(JSON.stringify(entityFieldObj)); //will not work inside the method
    };

    return (
        <form>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label htmlFor="entity-name">Name</label>
                    <input type="text" className="form-control" id="entity-name" placeholder="Entity Name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="entity-description">Description</label>
                    <input type="text" className="form-control" id="entity-description"
                           placeholder="Entity Description"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="entity-version">Version</label>
                    <input type="text" className="form-control" id="entity-version" placeholder="Entity Version"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="entity-artifact-id">Artifact ID</label>
                    <input type="text" className="form-control" id="entity-artifact-id"
                           placeholder="Entity Artifact ID"/>
                </div>
            </div>
            <div>
                <EntityField callbackFromEntity={entityFieldCallback}></EntityField>
            </div>


            <button type="button" onClick={displayResult} className="btn btn-primary  float-right mb-3">Create Entity</button>

        </form>
    );
};

export default EntityDesign;