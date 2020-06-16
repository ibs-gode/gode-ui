import React, {useRef, useState} from 'react';
import EntityRelationship from "./entity-relationship";
import EntityObject from "./entity-object";
import {useInput} from "../hooks/input-hook";

const EntityField = (props) => {

    const refProp1 = useRef();
    const refProp2 = useRef();
    const refProp3 = useRef();
    const refPropID = useRef();
    const [showObject, setShowObject] = useState(false);
    const [showRelationship, setShowRelationship] = useState(false);
    const [fieldItems, setFieldItems] = useState([]);
    const {value: entityFieldName, bind: bindEntityFieldName, reset: resetEntityFieldName} = useInput('');
    const {value: entityFieldDesc, bind: bindEntityFieldDesc, reset: resetEntityFieldDesc} = useInput('');
    const[entityFieldProp, setEntityFieldProp] = useState([])
    const [fieldType, setFieldType] = useState('');
    const [relationship, setRelationship] = useState({});
    const [object, setObject] = useState({});

    const saveEntityField = () => {
        let data = {};
        switch(fieldType){
            case 'RELATIONSHIP' :
                data = {
                        description: entityFieldDesc,
                        name: entityFieldName,
                        properties: entityFieldProp,
                        relationship: relationship,
                        type: fieldType
                };
                setShowRelationship(false);
                setRelationship({});
                break;
            case 'OBJECT' :
                data = {
                        description: entityFieldDesc,
                        name: entityFieldName,
                        objectType: object,
                        properties: entityFieldProp,
                        type: fieldType
                };
                setShowObject(false);
                setObject({});
                break;
            default:
                data = {
                        description: entityFieldDesc,
                        name: entityFieldName,
                        properties: entityFieldProp,
                        type: fieldType
                };

        }
        props.callbackFromEntity(data);
    };

    const relationshipCallBack = (dataFromRelationship) => {
        setRelationship(dataFromRelationship);
        console.log(dataFromRelationship.artifactId)
        console.log(JSON.stringify(dataFromRelationship));
    };

    const objectCallBack = (dataFromObject) => {
        setObject(dataFromObject);
        console.log(JSON.stringify(dataFromObject));
    };

    const handleAddFieldSubmit = (evt) => {
        evt.preventDefault();
        setFieldItems([...fieldItems, {
            name: entityFieldName,
            desc: entityFieldDesc,
            properties: entityFieldProp,
            type: fieldType
        }]);
        saveEntityField();
        resetEntityFieldName();
        resetEntityFieldDesc();
        setFieldType('');
        setEntityFieldProp([]);
        refProp1.current.checked = false;
        refProp2.current.checked = false;
        refProp3.current.checked = false;
        refPropID.current.checked = false;
    };

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
    };

    const handleProperty = (e, str) => {
        if (e.target.checked === true) {
                setEntityFieldProp([...entityFieldProp,str])
        }
    };

    return (
        <div>
            <div>
                <label>Fields</label><span className="required">*</span>
                <button type="submit" onClick={handleAddFieldSubmit} className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add Field</button>
                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                   placeholder="ID Field Name" {...bindEntityFieldName}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Description</label>
                            <input type="text" className="form-control"
                                   placeholder="ID Field Description" {...bindEntityFieldDesc}/>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Properties</label>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox"  ref={refPropID}
                                           value="ID" onClick={e => handleProperty(e, "ID")}/>
                                    <label className="form-check-label">ID</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox"  ref={refProp1}
                                           value="Index" onClick={e => handleProperty(e, "Index")}/>
                                    <label className="form-check-label">Index</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" ref={refProp2}
                                           value="Unique" onClick={e => handleProperty(e, "Unique")}/>
                                    <label className="form-check-label">Unique</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" ref={refProp3}
                                           value="Mandatory" onClick={e => handleProperty(e, "Mandatory")}/>
                                    <label className="form-check-label">Mandatory</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Type</label>
                            <select className="form-control" value={fieldType}
                                    onChange={displayObject}>
                                <option value="" hidden>Type</option>
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
                        <EntityRelationship callbackFromEntityField={relationshipCallBack}/>
                    </div>}


                    {showObject && <div>
                        <EntityObject callbackFromEntityFieldObject={objectCallBack}/>
                    </div>}

                </fieldset>
            </div>
            <table className="table mt-3 border border-info table-striped">
                <thead className="table-info">
                <tr>
                    <th className="font-weight-bold">Name</th>
                    <th className="font-weight-bold">Description</th>
                    <th className="font-weight-bold">Properties</th>
                    <th className="font-weight-bold">Type</th>
                </tr>
                </thead>
                <tbody>
                {fieldItems.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td className="font-weight-light">{item.name}</td>
                            <td className="font-weight-light">{item.desc}</td>
                            {/*<td className="font-weight-light">{item.property1 + '  '} {item.property2} {item.property3}</td>*/}
                            <td className="font-weight-lighter small">
                                <ul>{
                                    item.properties.map((property , ids)=> (<li key={ids}>{property}</li>))
                                }</ul>

                            </td>
                            <td className="font-weight-light">{item.type}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    );
};

export default EntityField;
