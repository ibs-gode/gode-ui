import React from 'react';
import EntityField from "../components/entity-field";

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
                    <label htmlFor="entity-id-field">ID Field</label>
                    <EntityField id="entity-id-field"></EntityField>
                </div>

                <div>
                    <label htmlFor="entity-field">Fields</label>
                    <button type="button" className="btn btn-info btn-sm ml-3 mb-3 mt-3">Add Field</button>
                    <EntityField id="entity-field"></EntityField>
                </div>
                <button type="button" className="btn btn-primary btn-lg float-right mb-3">Create</button>

            </form>
        );
    }

}