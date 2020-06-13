import React, {useState} from 'react';
import EntityRelationship from "./entity-relationship";
import EntityObject from "./entity-object";
import {useInput} from "../hooks/input-hook";

const EntityField = (props) => {

    const [showObject, setShowObject] = useState(false);
    const [showRelationship, setShowRelationship] = useState(false);
    const [fieldItems, setFieldItems] = useState([]);
    const {value: entityFieldName, bind: bindEntityFieldName, reset: resetEntityFieldName} = useInput('');
    const {value: entityFieldDesc, bind: bindEntityFieldDesc, reset: resetEntityFieldDesc} = useInput('');
    const {value: entityFieldProp1, setValue: setEntityFieldProp1} = useInput('');
    const {value: entityFieldProp2, setValue: setEntityFieldProp2} = useInput('');
    const {value: entityFieldProp3, setValue: setEntityFieldProp3} = useInput('');
    const [fieldType, setFieldType] = useState('');

    const handleAddFieldSubmit = (evt) => {
        evt.preventDefault();

        setFieldItems([...fieldItems, {
            name: entityFieldName,
            desc: entityFieldDesc,
            property1: entityFieldProp1,
            property2: entityFieldProp2,
            property3: entityFieldProp3,
            type: fieldType
        }]);
        resetEntityFieldName();
        resetEntityFieldDesc();
        setFieldType('')
    }

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
        setFieldType(e.target.value)
    }

    const handleProperty = (e, str) => {
        if (e.target.checked === true) {
            if (str === "Index") {
                setEntityFieldProp1(str)
            } else if (str === "Unique") {
                setEntityFieldProp2(str)
            } else if (str === "Mandatory") {
                setEntityFieldProp3(str)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleAddFieldSubmit}>
                <label htmlFor="entity-field">{props.label}</label>
                {props.showAddButton &&
                <button type="submit" className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add Field</button>}
                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded" id={props.id}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="idfield-name">Name</label>
                            <input type="text" className="form-control" id="idfield-name"
                                   placeholder="ID Field Name" {...bindEntityFieldName}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="idfield-description">Description</label>
                            <input type="text" className="form-control" id="idfield-description"
                                   placeholder="ID Field Description" {...bindEntityFieldDesc}/>
                        </div>

                        <div className="form-group col-md-4" id="idfield-properties">
                            <label htmlFor="idfield-properties">Properties</label>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="properties-index"
                                           value="Index" onClick={e => handleProperty(e, "Index")}/>
                                    <label className="form-check-label" htmlFor="properties-index">Index</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="properties-unique"
                                           value="Unique" onClick={e => handleProperty(e, "Unique")}/>
                                    <label className="form-check-label" htmlFor="properties-unique">Unique</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="properties-mandatory"
                                           value="Mandatory" onClick={e => handleProperty(e, "Mandatory")}/>
                                    <label className="form-check-label"
                                           htmlFor="properties-mandatory">Mandatory</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="idfield-type">Type</label>
                            <select className="form-control" id="idfield-type" value={fieldType}
                                    onChange={displayObject}>
                                <option value="" selected hidden>Type</option>
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
            </form>
            {props.showAddButton &&
            <table className="table table-striped mt-3 ">
                <thead>
                <tr>
                    <th className="font-weight-normal">Name</th>
                    <th className="font-weight-normal">Description</th>
                    <th className="font-weight-normal">Properties</th>
                    <th className="font-weight-normal">Type</th>
                </tr>
                </thead>
                <tbody>
                {fieldItems.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td className="font-weight-light">{item.name}</td>
                            <td className="font-weight-light">{item.desc}</td>
                            <td className="font-weight-light">{item.property1 + '  '} {item.property2} {item.property3}</td>
                            <td className="font-weight-light">{item.type}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            }
        </div>

    );
};

export default EntityField;
