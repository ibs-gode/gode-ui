import React from 'react';
import EntityState from './entity-state';
import axios from 'axios';

export default class SelectEntityState extends React.Component {

    constructor(props){
        super(props);
        this.stateCallBackFunction = this.stateCallBackFunction.bind(this);
        this.saveDependency = this.saveDependency.bind(this);
        this.fetchEntityData = this.fetchEntityData.bind(this);
        this.state ={
            entities:[],
            selectedEntity:{artifactId:""},
            addedEntities:[],
            resetEntityState:false
        }
    }

    componentDidMount(){
        this.fetchEntityData();
    }

    componentDidUpdate(prevProps){
        if(this.props.isReset && this.props.isReset !== prevProps.isReset) 
        {
            this.setState({addedEntities: []});
        }
    }
    
    

     
      async fetchEntityData() {
        // You can await here
        const response = await axios(
            'http://localhost:9001/artifact/brief?type=ENTITY',
        );
        console.log("i am here")
        console.log(JSON.stringify(response));
        //setEntityFetch();
        this.setState({entities:response.data.data});
        
    }

    stateCallBackFunction(data){
        let addedEntitiesArr = [...this.state.addedEntities,{
            entity:this.state.selectedEntity,
            state:data
        }]
        this.setState({addedEntities: addedEntitiesArr});
        console.log(data);
        this.setState({selectedEntity:{artifactId:""},resetEntityState:true});
        this.state.resetEntityState=false;
        this.props.callBackFunactionForEntityList(addedEntitiesArr);

    }

    

     saveDependency(event) {
        event.preventDefault();
        var entityName = event.target.options[event.target.selectedIndex].text;
        var entErtifactId = event.target.value;
        this.setState({selectedEntity:{artifactId:entErtifactId, name: entityName}});
    };

    render(){
       let entitiesData = this.state.entities;
       let addedEntitiesData = this.state.addedEntities;
        return(<div className="form-group col-md-12">
             <fieldset className="form-group border border-secondary pl-3 pt-1 rounded">
             <label>{this.props.label}</label><span className="required">*</span>
             <div className="form-group mr-3">
                    <select className="form-control" name="artifactId" onChange={this.saveDependency} value={this.state.selectedEntity.artifactId}>
                        <option value="" hidden>Select</option>
                        
                          {entitiesData.map((item,idx) => {
                            return (<option value={item.artifactId}>{item.label}</option>);
                        }) }
                    </select>
                </div>
            <EntityState callbackFromEntityState={this.stateCallBackFunction} isReset={this.state.resetEntityState} ></EntityState>
            

                <table className="table mt-3 border border-info table-striped">
                <thead className="table-info">
                <tr>
                    <th className="font-weight-bold">Name</th>
                    <th className="font-weight-bold">artifactId</th>
                    <th className="font-weight-bold">Volatile</th>
                </tr>
                </thead>
                <tbody>
                {addedEntitiesData.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td className="font-weight-light">{item.entity.name}</td>
                            <td className="font-weight-light">{item.entity.artifactId}</td>
                            {/*<td className="font-weight-light">{item.property1 + '  '} {item.property2} {item.property3}</td>*/}
                    <td className="font-weight-lighter small">{item.state.volatileEntity ? "Yes" : "No"}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </fieldset>
        </div>)
    }
}