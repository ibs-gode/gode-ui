import React, {useState} from 'react';

const EntityState = () => {

    const [volatileEntity, setVolatileEntity] = useState([]);


    return (
        <div>
            <div>
                <label>State</label>
                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded">
                    <div className="form-group">
                        <label>Volatile</label><span className="required">*</span>
                        <select className="form-control-sm ml-3">
                            <option value="" hidden>Select</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </select>
                    </div>
                    <div className="form-row ">
                        <div>
                            <label className="font-weight-lighter">Entity State Store</label>
                            <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 pb-3 rounded">
                                <label className="font-weight-lighter small">Async Store Sync</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Cached</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Store Name</label>
                                <input type="text" className="form-control-sm ml-1 mr-5 border"
                                       placeholder="Store Name"/>
                            </fieldset>
                        </div>

                        <div>
                            <label className="font-weight-lighter">Operations Level</label>
                            <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 pb-3 rounded">
                                <label className="font-weight-lighter small">Read</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Write</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Relative Read</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Async Read</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Transactional</label>
                                <select className="form-control-sm ml-1 mr-5 border">
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>

                            </fieldset>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

    );
};

export default EntityState;