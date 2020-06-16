import React, {useRef, useState} from 'react';
import {useInput} from "../hooks/input-hook";

const EntityObject = (props) => {

    const refObject = useRef();
    const {value: objectName, bind: bindObjectName} = useInput('');
    const {value: objectDesc, bind: bindObjectDesc} = useInput('');
    const [objectFieldItems, setObjectFieldItems] = useState([]);
    const {value: fieldName, bind: bindFieldName, reset: resetFieldName} = useInput('');
    const {value: fieldDesc, bind: bindFieldDesc, reset: resetFieldDesc} = useInput('');
    const {value: fieldType, bind: bindFieldType, reset: resetFieldType} = useInput('');

    const handleAddField = (evt) => {
        evt.preventDefault();

        setObjectFieldItems([...objectFieldItems, {
            name: fieldName,
            description: fieldDesc,
            type: fieldType
        }]);
        resetFieldName();
        resetFieldDesc();
        resetFieldType();
    };
    const handleSaveObject = (evt) => {
        evt.preventDefault();
        const data = {
            description: objectDesc,
            fields: objectFieldItems,
            name: objectName
        };
        props.callbackFromEntityFieldObject(data);
        refObject.current.disabled = true;
    };

    return (
        <div>
        <label>Object Details</label>
        <button type="submit" onClick={handleSaveObject} className="btn btn-info btn-sm ml-3 mb-3 mt-3 ">Save</button>
        <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded" ref={refObject}>
            <div>
                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Object Name" {...bindObjectName}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder="Object Description" {...bindObjectDesc}/>
                    </div>
                </div>
                <div>
                    <label>Object Fields</label>
                    <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 rounded">
                            <input type="text" className="form-control-sm ml-5 mr-5 border"
                                   placeholder="Field Name" {...bindFieldName}/>
                            <input type="text" className="form-control-sm ml-5 mr-5 border"
                                   placeholder="Field Description" {...bindFieldDesc}/>
                            <select className="form-control-sm ml-5 mr-5 border" {...bindFieldType}>
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
                            <button type="submit"  onClick={handleAddField} className="btn btn-dark btn-sm ml-3">+</button>

                        <table className="table table-striped mt-3 form-control-sm">
                            <thead>
                            <tr>
                                <th className="font-weight-normal">Name</th>
                                <th className="font-weight-normal">Description</th>
                                <th className="font-weight-normal">Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {objectFieldItems.map((item, ids) => {
                                return (
                                    <tr key={ids}>
                                        <td className="font-weight-light">{item.name}</td>
                                        <td className="font-weight-light">{item.description}</td>
                                        <td className="font-weight-light">{item.type}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </fieldset>
                </div>
            </div>
        </fieldset>
        </div>
    );
};

export default EntityObject;