import React, {useState, useRef} from 'react';
import axios from 'axios';
import {MyConfig} from "../config/config";

const EntityAppList = (props) => {

    const refSelect = useRef();
    const [labelText, setLabelText] = useState('');
    const [artifactId, setArtifactId] = useState('');
    const [selectedList, setSelectedList] = useState([]);
    const [dataList, setDataList] = useState([]);


    const getEntityList=() => {
        async function fetchData() {
            // You can await here
            const response = await axios(
                MyConfig.apiBaseUrl+ MyConfig.fetchEntityApp+'?type='+props.type
            );
            setDataList(response.data.data);
        }
        fetchData().then(r => console.log(props.type+" fetched successfully for "+ props.label));
    };

    const handleAddObjectOnSubmit = (e) => {
        e.preventDefault();
        const dataWithLabel=[...selectedList, {
            artifactId: artifactId,
            label: labelText
        }];
        const dataOnlyArtifactId =  {
            artifactId: artifactId
        };
        setSelectedList(dataWithLabel);
        props.callBackFunction(dataOnlyArtifactId);
        refSelect.current.value = "";
    };

    const saveObject = (event) => {
        event.preventDefault();
        setLabelText(event.target.options[event.target.selectedIndex].text);
        setArtifactId(event.target.value);
    };


    return (
        <div>
            <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
                <label>{props.label}</label><span className="required">*</span>
                <button type="submit" onClick={handleAddObjectOnSubmit}
                        className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add
                </button>
                <div className="form-group mr-3">
                    <select ref={refSelect} className="form-control" onClick={getEntityList} onChange={saveObject}>
                        <option value="" defaultValue>Select {props.label}</option>
                        {dataList.map((data, ids) => (<option key={ids} value={data.artifactId}>{data.label}</option>))}
                    </select>
                </div>
                <div className="mr-3">
                    <table className="table border border-info table-striped ">
                        <thead className="table-info">
                        <tr>
                            <th className="font-weight-bold small">{props.label}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedList.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="font-weight-light small">{item.label}</td>
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

export default EntityAppList;
