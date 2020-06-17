import React from 'react';
import {useInput} from "../hooks/input-hook";
import EntityList from "../components/entity-list";

const AppDesign = () => {

    const {value: appName, bind: bindAppName, reset: resetAppName} = useInput('');
    const {value: appDesc, bind: bindAppDesc, reset: resetAppDesc} = useInput('');
    const {value: appVersion, bind: bindAppVersion, reset: resetAppVersion} = useInput('');
    const {value: appArtifactId, bind: bindAppArtifactId, reset: resetAppArtifactID} = useInput('');

    const display = (e) => {
        e.preventDefault();
        //console.log(entityFetch)
    };

    return (
        <form onSubmit={display}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label>Name</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Name" {...bindAppName}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Description</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Description" {...bindAppDesc}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Version</label><span className="required">*</span>
                    <input type="text" className="form-control" placeholder="App Version" {...bindAppVersion}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Artifact ID</label><span className="required">*</span>
                    <input type="text" className="form-control"
                           placeholder="App Artifact ID" {...bindAppArtifactId}/>
                </div>
            </div>
            <EntityList label={"Dependencies"}/>
            <EntityList label={"Entities"}/>
            <div>
                <div>
                    <label>Functions</label><span className="required">*</span>
                    <button type="submit" className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add Function</button>
                    <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
                        <div className="form-row mt-3">
                            <div className="form-group ">
                                <label>Method Name</label>
                            </div>
                            <div className="form-group ml-3">
                                <input type="text" className="form-control"
                                       placeholder="Method Name"/>
                            </div>
                        </div>
                        <div className="mr-3">
                            <EntityList label={"Input"}/>
                        </div>
                        <div className="mr-3">
                            <EntityList label={"Output"}/>
                        </div>
                    </fieldset>
                </div>
                <table className="table mt-3 border border-info table-striped">
                    <thead className="table-info">
                    <tr>
                        <th className="font-weight-bold">Name</th>
                        <th className="font-weight-bold">Input</th>
                        <th className="font-weight-bold">Output</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{fieldItems.map((item, idx) => {*/}
                    {/*    return (*/}
                    {/*        <tr key={idx}>*/}
                    {/*            <td className="font-weight-light">{item.name}</td>*/}
                    {/*            <td className="font-weight-light">{item.desc}</td>*/}
                    {/*            /!*<td className="font-weight-light">{item.property1 + '  '} {item.property2} {item.property3}</td>*!/*/}
                    {/*            <td className="font-weight-lighter small">*/}
                    {/*                <ul>{*/}
                    {/*                    item.properties.map((property , ids)=> (<li key={ids}>{property}</li>))*/}
                    {/*                }</ul>*/}

                    {/*            </td>*/}
                    {/*            <td className="font-weight-light">{item.type}</td>*/}
                    {/*        </tr>*/}
                    {/*    )*/}
                    {/*})}*/}
                    </tbody>
                </table>
            </div>
            <button type="submit"
                    className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Create App
            </button>
        </form>
    );

};

export default AppDesign;