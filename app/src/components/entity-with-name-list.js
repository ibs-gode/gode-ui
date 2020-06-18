import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useInput} from "../hooks/input-hook";

const EntityWithNameList = (props) => {

    const refEntityList = useRef();
    const [labelText, setLabelText] = useState('');
    const [artifactId, setArtifactId] = useState('');
    const [selectedList, setSelectedList] = useState([]);
    const [dataList, setDataList] = useState([]);
    const {value: argName, bind: bindArgName, reset: resetArgName} = useInput('');


    async function fetchData() {
        // You can await here
        const response = await axios(
            'http://localhost:9001/artifact/brief?type=ENTITY',
        );
        setDataList(response.data.data);
        console.log(JSON.stringify(response.data.data))
    }

    useEffect(() => {
        fetchData().then(r => console.log("Entity with Argument name fetched successfully for "+ props.label));
    }, [props.type, props.label]);

    useEffect(() => {
        if(props.clearTable === "YES"){
            setSelectedList([]);
        }
    },[props.clearTable]);

    const getEntityList=() => {
        fetchData().then(r => console.log(props.type+" fetched successfully for "+ props.label));
    };


    const handleAddObjectOnSubmit = (e) => {
        e.preventDefault();
        setSelectedList([...selectedList, {
            artifactId: artifactId,
            label: labelText,
            argumentName: argName
        }]);
        const dataWithArgumentName =  {
            argumentName: argName,
            entity: {
                artifactId: artifactId
            }
        };
        props.callBackFunction(dataWithArgumentName);
        resetArgName();
        refEntityList.current.value="";
    };

    const saveObject = (event) => {
        event.preventDefault();
        setLabelText(event.target.options[event.target.selectedIndex].text);
        setArtifactId(event.target.value);
    };


    return (
        <div>
            <fieldset className="form-group border pl-3 pt-1 rounded">
                <label>{props.label}</label><span className="required">*</span>
                <button type="submit" onClick={handleAddObjectOnSubmit}
                        className="btn btn-info btn-sm ml-3 mb-3 mt-3"> Add
                </button>
                <div className="form-row">
                    <div className="form-group mr-3">
                        <select className="form-control form-control-sm border" onClick={getEntityList} onChange={saveObject} ref={refEntityList}>
                            <option value="" defaultValue="">Select Entity</option>
                            {dataList.map((data, ids) => (<option key={ids} value={data.artifactId}>{data.label}</option>))}
                        </select>
                    </div>
                    <div className="form-group mr-3">
                        <input type="text" className="form-control-sm border" {...bindArgName}
                               placeholder="Argument Name"/>
                    </div>
                </div>
                <div className="mr-3">
                    <table className="form-control-sm table border border-info table-striped ">
                        <thead className="table-info">
                        <tr>
                            <th className="font-weight-bold small">Entity</th>
                            <th className="font-weight-bold small">Argument Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedList.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="font-weight-light">{item.label}</td>
                                    <td className="font-weight-light">{item.argumentName}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>

    );
};

export default EntityWithNameList;