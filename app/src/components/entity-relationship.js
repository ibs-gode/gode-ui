import React from 'react';

const EntityRelationship = () => {

        return (
            <fieldset className="form-group border border-secondary pl-3 pt-3 pr-3 mr-3 rounded"
                      id="type-relationship">
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
        );
    };

export default EntityRelationship;