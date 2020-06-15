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
    const {value: entityFieldProp1, setValue: setEntityFieldProp1} = useInput('');
    const {value: entityFieldProp2, setValue: setEntityFieldProp2} = useInput('');
    const {value: entityFieldProp3, setValue: setEntityFieldProp3} = useInput('');
    const {value: entityFieldIDProp, setValue: setEntityFieldIDProp} = useInput('');
    const [fieldType, setFieldType] = useState('');


    const saveEntityField = (e) => {
        //e.preventDefault();
        const data = {
            idField: {
                description: entityFieldDesc,
                name: entityFieldName
            }
        };
        props.callbackFromEntity(data);
    };

    const handleAddFieldSubmit = (evt) => {
        evt.preventDefault();

        setFieldItems([...fieldItems, {
            name: entityFieldName,
            desc: entityFieldDesc,
            property1: entityFieldProp1,
            property2: entityFieldProp2,
            property3: entityFieldProp3,
            idFieldProp: entityFieldIDProp,
            type: fieldType
        }]);
        saveEntityField(evt);
        resetEntityFieldName();
        resetEntityFieldDesc();
        setFieldType('');
        setEntityFieldProp1('');
        setEntityFieldProp2('');
        setEntityFieldProp3('');
        setEntityFieldIDProp('')
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
            if (str === "Index") {
                setEntityFieldProp1(str)
            } else if (str === "Unique") {
                setEntityFieldProp2(str)
            } else if (str === "Mandatory") {
                setEntityFieldProp3(str)
            } else if (str==="ID"){
                setEntityFieldIDProp(str)
            }
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="entity-field">Fields</label>
                <button type="submit" onClick={handleAddFieldSubmit} className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add Field</button>
                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded">
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
                            <label htmlFor="idfield-type">Type</label>
                            <select className="form-control" id="idfield-type" value={fieldType}
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
                        <label htmlFor="type-relationship">Relationship Details</label>
                        <EntityRelationship></EntityRelationship>
                    </div>}


                    {showObject && <div>
                        <label htmlFor="type-object">Object Details</label>
                        <EntityObject></EntityObject>
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
                                {item.idFieldProp} &nbsp;
                                {item.property1}&nbsp;
                                {item.property2}&nbsp;
                                {item.property3}&nbsp;

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
