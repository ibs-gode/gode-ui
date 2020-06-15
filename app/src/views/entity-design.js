import React, {useState} from 'react';
import EntityField from "../components/entity-field";

const EntityDesign = () => {

    // const [entityDesignForm , setEntityDesignForm] = useState({
    //     context: {
    //         handle: 'string'
    //     },
    //     data: {
    //         artifactId: '',
    //         description: '',
    //         fields: [
    //             {
    //                 description: '',
    //                 name: '',
    //                 objectType: {
    //                     description: '',
    //                     fields: [
    //                         {
    //                             description: '',
    //                             name: '',
    //                             type: ''
    //                         }
    //                     ],
    //                     name: ''
    //                 },
    //                 properties: [],
    //                 relationship: {
    //                     artifactId: '',
    //                     description: '',
    //                     name: '',
    //                     version: ''
    //                 },
    //                 type: ''
    //             }
    //         ],
    //         idField: {
    //             description: '',
    //             name: '',
    //             objectType: {
    //                 description: '',
    //                 fields: [
    //                     {
    //                         description: '',
    //                         name: '',
    //                         type: ''
    //                     }
    //                 ],
    //                 name: ''
    //             },
    //             properties: [],
    //             relationship: {
    //                 artifactId: '',
    //                 description: '',
    //                 name: '',
    //                 version: ''
    //             },
    //             type: ''
    //         },
    //         name: '',
    //         state: {
    //             entityStateStore: {
    //                 asyncStoreSync: '',
    //                 cached: '',
    //                 storeName: ''
    //             },
    //             opsLevel: {
    //                 asyncRead: '',
    //                 read: '',
    //                 relativeRead: '',
    //                 transactional: '',
    //                 write: ''
    //             },
    //             volatileEntity: ''
    //         },
    //         version: ''
    //     }
    // });
    // const [entityField, setEntityField] = useState({
    //     idField: {
    //         description: '',
    //         name: '',
    //         objectType: {
    //             description: '',
    //             fields: [
    //                 {
    //                     description: '',
    //                     name: '',
    //                     type: ''
    //                 }
    //             ],
    //             name: ''
    //         },
    //         properties: [],
    //         relationship: {
    //             artifactId: '',
    //             description: '',
    //             name: '',
    //             version: ''
    //         },
    //         type: ''
    //     }
    // });
    const [entityFieldObj, setEntityFieldObj] = useState({
        idField: {
            description: '',
            name: ''
        }});

    const displayResult = () => {
        //console.log(JSON.stringify(entityField))
        console.log("nope"+JSON.stringify(entityFieldObj));
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
        console.log(JSON.stringify(entityFieldObj)); //will not work inside the method
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