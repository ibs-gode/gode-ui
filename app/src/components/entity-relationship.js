import React, {useRef} from 'react';
import {useInput} from "../hooks/input-hook";

const EntityRelationship = (props) => {

    const refRelationship = useRef();
    const {value: relationName, bind: bindRelationName} = useInput('');
    const {value: relationDesc, bind: bindRelationDesc} = useInput('');
    const {value: relationVersion, bind: bindRelationVersion} = useInput('');
    const {value: relationArtifact, bind: bindRelationArtifact} = useInput('');


    const handleSaveRelationship = (evt) => {
        evt.preventDefault();
        const data = {
            artifactId: relationArtifact,
            description: relationDesc,
            name: relationName,
            version: relationVersion
        };
        props.callbackFromEntityField(data);
        refRelationship.current.disabled = true;
    };
    return (
        <div>
            <label>Relationship Details</label>
            <button type="submit" onClick={handleSaveRelationship} className="btn btn-info btn-sm ml-3 mb-3 mt-3 ">Save</button>
            <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded" ref={refRelationship}>
                <div>
                    <div className="form-row ">
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                   placeholder="Entity Name" {...bindRelationName}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Description</label>
                            <input type="text" className="form-control"
                                   placeholder="Entity Description" {...bindRelationDesc}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Version</label>
                            <input type="text" className="form-control"
                                   placeholder="Entity Version" {...bindRelationVersion}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Artifact ID</label>
                            <input type="text" className="form-control"
                                   placeholder="Entity Artifact ID" {...bindRelationArtifact}/>
                        </div>
                    </div>
                </div>

            </fieldset>
        </div>
    );
};

export default EntityRelationship;