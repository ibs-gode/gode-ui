import React from 'react';

export default class EntityDesign extends React.Component {
    render() {
        return (

            <form>

                <div class="form-row ">
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
                    <label htmlFor="id-field">ID Field</label>
                    <fieldset class="form-group border border-secondary pl-3 pt-3 rounded" id="id-field">
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
                                <select className="form-control" id="idfield-type">
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
                        <div>
                            <label htmlFor="type-relationship">Relationship Details</label>
                            <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded"
                                      id="id-field">
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
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="entity-version">Version</label>
                                            <input type="text" className="form-control" id="entity-version"
                                                   placeholder="Entity Version"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="entity-artifact-id">Artifact ID</label>
                                            <input type="text" className="form-control" id="entity-artifact-id"
                                                   placeholder="Entity Artifact ID"/>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </div>


                        <div>
                            <label htmlFor="type-object">Object Details</label>
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
                        </div>

                    </fieldset>
                </div>

                <div>
                    <label htmlFor="id-field">Fields</label>
                    <button type="button" className="btn btn-info btn-sm ml-3 mb-3 mt-3">Add Field</button>
                    <fieldset className="form-group border border-secondary pl-3 pt-3 rounded" id="id-field">
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
                                <select className="form-control" id="idfield-type">
                                    <option>Text</option>
                                    <option>Object</option>
                                    <option>Boolean</option>
                                    <option>Date</option>
                                    <option>Relationship</option>
                                    <option>Long Text</option>
                                    <option>Number</option>
                                    <option>High Precision Number</option>
                                    <option>Decimal</option>
                                    <option>High Precision Decimal</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="type-relationship">Relationship Details</label>
                            <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded"
                                      id="id-field">
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
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="entity-version">Version</label>
                                            <input type="text" className="form-control" id="entity-version"
                                                   placeholder="Entity Version"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="entity-artifact-id">Artifact ID</label>
                                            <input type="text" className="form-control" id="entity-artifact-id"
                                                   placeholder="Entity Artifact ID"/>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </div>


                        <div>
                            <label htmlFor="type-object">Object Details</label>
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
                                            <table className="table  ">
                                                {/*<thead>*/}
                                                {/*<tr>*/}
                                                {/*    <th className="font-weight-light" scope="col">Name</th>*/}
                                                {/*    <th className="font-weight-light" scope="col">Description</th>*/}
                                                {/*    <th className="font-weight-light" scope="col">Type</th>*/}
                                                {/*</tr>*/}
                                                {/*</thead>*/}
                                                <tbody>
                                                <tr>
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
                                                </tr>
                                                </tbody>
                                            </table>
                                        </fieldset>
                                    </div>


                                </div>

                            </fieldset>
                        </div>

                    </fieldset>
                </div>
                <button type="button" className="btn btn-primary btn-lg float-right mb-3">Create</button>

            </form>
        );
    }

}