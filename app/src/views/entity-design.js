import React from 'react';
import EntityField from "../components/entity-field";

const EntityDesign = () => {

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
                <EntityField showAddButton={false} label="ID Field" id="entity-id-field"></EntityField>
            </div>


            <EntityField  showAddButton={true} label="Field" id="entity-field"></EntityField>


            <button type="button" className="btn btn-primary btn-lg float-right mb-3">Create</button>

        </form>
    );
};

export default EntityDesign;