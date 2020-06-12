import React from 'react';

export default class EntityObject extends React.Component {

    render() {
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
                        <button type="button" className="btn btn-dark btn-sm ml-3">+</button>
                        <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 mt-2 rounded"
                                  id="type-object">
                            <table className="table table-striped ">
                                {/*<thead>*/}
                                {/*<tr>*/}
                                {/*    <th className="font-weight-light" scope="col">Name</th>*/}
                                {/*    <th className="font-weight-light" scope="col">Description</th>*/}
                                {/*    <th className="font-weight-light" scope="col">Type</th>*/}
                                {/*</tr>*/}
                                {/*</thead>*/}
                                <tbody>
                                <input type="text" className="form-control-sm ml-5 mr-5 border"
                                       id="field-name"
                                       placeholder="Field Name"/>
                                <input type="text" className="form-control-sm ml-5 mr-5 border"
                                       id="field-description"
                                       placeholder="Field Description"/>
                                <select className="form-control-sm ml-5 mr-5 border" id="field-type">
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
                                </tbody>
                            </table>
                        </fieldset>
                    </div>


                </div>

            </fieldset>
        );
    }
}