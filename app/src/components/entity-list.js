import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EntityList = (props) => {

    const [depLabel, setDepLabel] = useState('');
    const [depArtifactId, setDepArtifactId] = useState('');
    const [dependencies, setDependencies] = useState([]);
    const [entityFetch, setEntityFetch] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios(
                'http://localhost:9001/artifact/brief?type=ENTITY',
            );
            console.log("i am here")
            console.log(JSON.stringify(response));
            setEntityFetch(response.data.data);
        }

        fetchData();
    }, []);

    const handleAddDependencySubmit = (e) => {
        e.preventDefault();
        setDependencies([...dependencies, {
            artifactId: depArtifactId,
            label: depLabel
        }]);
    };

    const saveDependency = (event) => {
        event.preventDefault();
        setDepLabel(event.target.options[event.target.selectedIndex].text);
        setDepArtifactId(event.target.value);
    };


    return (
        <div>
            <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
                <label>{props.label}</label><span className="required">*</span>
                <button type="submit" onClick={handleAddDependencySubmit}
                        className="btn btn-info btn-sm ml-3 mb-3 mt-3 "> Add
                </button>
                <div className="form-group mr-3">
                    <select className="form-control" onChange={saveDependency}>
                        <option value="" hidden>Select</option>
                        {entityFetch.map(data => (<option value={data.artifactId}>{data.label}</option>))}
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
                        {dependencies.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="font-weight-light">{item.label}</td>
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

export default EntityList;