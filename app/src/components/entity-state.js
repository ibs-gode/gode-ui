import React, {useEffect, useRef} from 'react';
import {useInput} from "../hooks/input-hook";

const EntityState = (props) => {

    const refStateChild = useRef();
    const refState = useRef();
    const {value: volatileEntity, bind: bindVolatileEntity} = useInput('');
    const {value: asyncStore, bind: bindAsyncStore} = useInput('');
    const {value: cached, bind: bindCached} = useInput('');
    const {value: storeName, bind: bindStoreName} = useInput('');
    const {value: read, bind: bindRead} = useInput('');
    const {value: write, bind: bindWrite} = useInput('');
    const {value: relativeRead, bind: bindRelativeRead} = useInput('');
    const {value: asyncRead, bind: bindAsyncRead} = useInput('');
    const {value: transactional, bind: bindTransactional} = useInput('');

    useEffect(() => {
        if (volatileEntity === "True" || volatileEntity === "") {
            refStateChild.current.hidden = true;
        } else if (volatileEntity === "False") {
            refStateChild.current.hidden = false;
        }
    }, [volatileEntity]);

    const booleanConvert = (strr) => {
        if (strr === "True") {
            return true;
        } else if (strr === "False") {
            return false;
        } else {
            return "";
        }
    };

    const handleSaveState = (e) => {
        e.preventDefault();
        let data = {};
        const entityStateStoreData = {
            asyncStoreSync: booleanConvert(asyncStore),
            cached: booleanConvert(cached),
            storeName: storeName
        };
        const opsLevelData = {
            asyncRead: booleanConvert(asyncRead),
            read: read,
            relativeRead: relativeRead,
            transactional: booleanConvert(transactional),
            write: write
        };
        if (volatileEntity === "True") {
            data = {
                volatileEntity: booleanConvert(volatileEntity)
            };
        } else if (volatileEntity === "False") {
            if (asyncStore === "" && read !== "") {
                data = {
                    opsLevel: opsLevelData,
                    volatileEntity: booleanConvert(volatileEntity)
                }
            } else if (asyncStore !== "" && read === "") {
                console.log("i am inside 1")
                data = {
                    entityStateStore: entityStateStoreData,
                    volatileEntity: booleanConvert(volatileEntity)
                }
            }
        }
        props.callbackFromEntityState(data);
       
    };

    return (
        <div>
            <div>
                <label>State</label>
                <button type="submit" onClick={handleSaveState} className="btn btn-info btn-sm ml-3 mb-3 mt-3 ">Save
                    State
                </button>
                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded" ref={refState}>
                    <div className="form-group">
                        <label>Volatile</label><span className="required">*</span>
                        <select className="form-control-sm ml-3"  {...bindVolatileEntity}>
                            <option value="" hidden>Select</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </select>
                    </div>
                    <div className="form-row" ref={refStateChild}>
                        <div>
                            <label className="font-weight-lighter">Entity State Store</label>
                            <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 pb-3 rounded">
                                <label className="font-weight-lighter small">Async Store Sync</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindAsyncStore}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Cached</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindCached}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Store Name</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindStoreName}>
                                    <option value="" hidden>Select</option>
                                    <option value="MONGODB">Mongo</option>
                                    <option value="MYSQL">MySQL</option>
                                    <option value="ORACLE_DB">Oracle</option>
                                    <option value="DB2">DB2</option>
                                    <option value="POSTGRE_SQL">PostgreSQL</option>
                                    <option value="MARIA_DB">MariaDB</option>
                                    <option value="CASSANDRA">Cassandra</option>
                                    <option value="NEO4J">Neo4j</option>
                                </select>
                            </fieldset>
                        </div>

                        <div>
                            <label className="font-weight-lighter">Operations Level</label>
                            <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 pb-3 rounded">
                                <label className="font-weight-lighter small">Read</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindRead}>
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Write</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindWrite}>
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Relative Read</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindRelativeRead}>
                                    <option value="" hidden>Select</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                                <label className="font-weight-lighter small">Async Read</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindAsyncRead}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="font-weight-lighter small">Transactional</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindTransactional}>
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