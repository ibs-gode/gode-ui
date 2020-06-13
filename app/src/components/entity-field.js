import React, {useState} from 'react';
import EntityRelationship from "./entity-relationship";
import EntityObject from "./entity-object";

const EntityField = (props) => {

    const [showObject, setShowObject] = useState(false);
    const [showRelationship, setShowRelationship] = useState(false);

    const displayObject = (e) => {
        e.preventDefault();
        if ("OBJECT" === e.target.value) {
            setShowObject(true);
            setShowRelationship(false);
        } else if ("RELATIONSHIP" === e.target.value) {
            setShowObject(false);
            setShowRelationship(true);
        } else {
            setShowObject(false);
            setShowRelationship(false);
        }
    }

    return (

        <fieldset className="form-group border border-secondary pl-3 pt-3 rounded" id={props.id}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="idfield-name">Name</label>
                    <input type="text" className="form-control" id="idfield-name"
                           placeholder="ID Field Name"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="idfield-description">Description</label>
                    <input type="text" className="form-control" id="idfield-description"
                           placeholder="ID Field Description"/>
                </div>

                <div className="form-group col-md-4" id="idfield-properties">
                    <label htmlFor="idfield-properties">Properties</label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="properties-index"
                                   value="Index"/>
                            <label className="form-check-label" htmlFor="properties-index">Index</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="properties-unique"
                                   value="Unique"/>
                            <label className="form-check-label" htmlFor="properties-unique">Unique</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="properties-mandatory"
                                   value="Mandatory"/>
                            <label className="form-check-label"
                                   htmlFor="properties-mandatory">Mandatory</label>
                        </div>
                    </div>
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="idfield-type">Type</label>
                    <select className="form-control" id="idfield-type" onChange={displayObject}>
                        <option value="TEXT">Text</option>
                        <option value="OBJECT">Object</option>
                        <option value="BOOLEAN">Boolean</option>
                        <option value="DATE">Date</option>
                        <option value="RELATIONSHIP">Relationship</option>
                        <option value="LONG_TEXT">Long Text</option>
                        <option value="NUMBER">Number</option>
                        <option value="HIGH_PRECISION_NUMBER">High Precision Number</option>
                        <option value="DECIMAL">Decimal</option>
                        <option value="HIGH_PRECISION_DECIMAL">High Precision Decimal</option>
                    </select>
                </div>
            </div>

            {showRelationship && <div>
                <label htmlFor="type-relationship">Relationship Details</label>
                <EntityRelationship></EntityRelationship>
            </div>}


            {showObject && <div>
                <label htmlFor="type-object">Object Details</label>
                <EntityObject></EntityObject>
            </div>}

        </fieldset>

    );
};

export default EntityField;
