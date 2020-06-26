import React, {useEffect, useRef} from 'react';
import {useInput} from "../hooks/input-hook";




const EntityState = ({callbackFromEntityState, isReset, isMultiple}) => {

    const refStateChild = useRef();
    const refStateSpan = useRef();
    const refState = useRef();
    const {value: volatileEntity, bind: bindVolatileEntity, reset: resetVolatileEntity} = useInput('');
    const {value: asyncStore, bind: bindAsyncStore, reset: resetAsyncStore} = useInput('');
    const {value: cached, bind: bindCached, reset:resetCached} = useInput('');
    const {value: storeName, bind: bindStoreName, reset:resetStoreName} = useInput('');
    const {value: read, bind: bindRead, reset: resetRead} = useInput('');
    const {value: write, bind: bindWrite, reset: resetWrite} = useInput('');
    const {value: relativeRead, bind: bindRelativeRead, reset: resetRelativeRead} = useInput('');
    const {value: asyncRead, bind: bindAsyncRead,  reset: resetAsyncRead} = useInput('');
    const {value: transactional, bind: bindTransactional, reset: resetTransactional} = useInput('');

    useEffect(() => {
        if (volatileEntity === "True" || volatileEntity === "") {
            refStateChild.current.hidden = true;
            refStateSpan.current.hidden = true;
        } else if (volatileEntity === "False") {
            refStateChild.current.hidden = false;
            refStateSpan.current.hidden = false;
        }
    }, [volatileEntity]);

    useEffect(
        () => {
            
              if(isReset){
                resetVolatileEntity();
                resetAsyncStore();
                resetAsyncRead();
                resetCached();
                resetRead();
                resetRelativeRead();
                resetStoreName();
                resetTransactional();
                resetWrite();
                if(isMultiple){
                    refState.current.disabled = false;
                }
              }
        },
        [isReset,isMultiple]
        );

    const booleanConvert = (str) => {
        if (str === "True") {
            return true;
        } else if (str === "False") {
            return false;
        } else {
            return "";
        }
    };

    const handleSaveState = (e) => {
        e.preventDefault();
        let data = {};
        console.log(asyncStore,cached,storeName,asyncRead)
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
            console.log("i am inside")
            if (asyncStore === "" && read !== "") {
                console.log("i am inside 0")
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
        console.log(data);
        callbackFromEntityState(data);
        if(isMultiple){
            refState.current.disabled = false;
        }

    };

    return (
        <div>
            <div>
                <label>State</label><span className="required">*</span>


                <fieldset className="form-group border border-secondary pl-3 pt-3 rounded" ref={refState}>
                    <div className="form-group row">
                        <div className="col-1">
                        <label>Volatile</label>
                        </div>
                        <div className=" col-sm-auto pl-1">
                        <select className="form-control form-control-sm "  {...bindVolatileEntity}>
                            <option value="" hidden>Select</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        </div>
                    <div className="col ml-1">
                        <span ref={refStateSpan} className="small font-italic home-font-colour ml-3">
                            Please provide either Entity State Store details or Operations Level details
                        </span>
                    </div></div>
                    <div className="form-row" ref={refStateChild}>
                        <div>
                            <label className="font-weight-lighter">Entity State Store</label>
                            <fieldset className="form-group border  pl-3 pt-3 pr-3 mr-3 pb-3 rounded">
                                <label className="font-weight-lighter small">Async Store Sync</label>
                                <select className="form-control-sm ml-1 mr-5 border " {...bindAsyncStore}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
                                </select>
                                <label className="font-weight-lighter small">Cached</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindCached}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
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
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
                                </select>
                                <label className="font-weight-lighter small">Transactional</label>
                                <select className="form-control-sm ml-1 mr-5 border" {...bindTransactional}>
                                    <option value="" hidden>Select</option>
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
                                </select>

                            </fieldset>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSaveState} className="btn btn-info btn-sm  mb-3  ">Save
                    State
                </button>
                </fieldset>
            </div>
        </div>

    );
};

export default EntityState;