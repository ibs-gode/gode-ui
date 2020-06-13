import React, {useState} from 'react';
import {useInput} from "../hooks/input-hook";

const EntityObject = () => {

    const [entityItems, setEntityItems] = useState([]);
    const {value: fieldName, bind: bindFieldName, reset: resetFieldName} = useInput('');
    const {value: fieldDesc, bind: bindFieldDesc, reset: resetFieldDesc} = useInput('');
    const {value: fieldType, bind: bindFieldType, reset: resetFieldType} = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        setEntityItems([...entityItems, {
            name: fieldName,
            desc: fieldDesc,
            type: fieldType
        }]);
        resetFieldName();
        resetFieldDesc();
        resetFieldType();
    }
    return (
        <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded"
                  id="type-object">
            <div>
                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label htmlFor="entity-name">Name</label>
                        <input type="text" className="form-control" id="entity-name"
                               placeholder="Entity Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="entity-description">Description</label>
                        <input type="text" className="form-control" id="entity-description"
                               placeholder="Entity Description"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="type-object">Field Details</label>
                    <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 mt-2 rounded"
                              id="type-object">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control-sm ml-5 mr-5 border"
                                   id="field-name"
                                   placeholder="Field Name" {...bindFieldName}/>
                            <input type="text" className="form-control-sm ml-5 mr-5 border"
                                   id="field-description"
                                   placeholder="Field Description" {...bindFieldDesc}/>
                            <select className="form-control-sm ml-5 mr-5 border" id="field-type" {...bindFieldType}>
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
                                <option value="HIGH_PRECISION_DECIMAL">High Precision Decimal
                                </option>
                            </select>
                            <button type="submit" className="btn btn-dark btn-sm ml-3">+</button>
                        </form>

                        <table className="table table-striped mt-3 form-control-sm">
                            <thead>
                            <tr>
                                <th className="font-weight-normal">Name</th>
                                <th className="font-weight-normal">Description</th>
                                <th className="font-weight-normal">Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {entityItems.map((item) => {
                                return (
                                    <tr>
                                        <td className="font-weight-light">{item.name}</td>
                                        <td className="font-weight-light">{item.desc}</td>
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
    );
};

export default EntityObject;