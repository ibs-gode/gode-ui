import React from 'react';
import EntityList from '../components/entity-list';
import CustomDropDown from '../components/entity-app-list';
import SelectEntityState from '../components/select-entity-state';
import axios from 'axios';
import { HandleToastMessage, StatusEnum } from '../common/utils';
import { MyConfig } from '../config/config';

export default class AppBuild extends React.Component {


    
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.callBackFunactionForEntityList = this.callBackFunactionForEntityList.bind(this);
        this.fetchAppData = this.fetchAppData.bind(this);
        this.state ={
            appObj: Object.assign({}, {artifactPackaging:""}),
            errors: {},
            selectedAppData: {},
            appDatas:[]            
        }
        
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState((prevState) => {
          prevState.appObj[name] = value;
          return { appObj: prevState.appObj };
        });
      }
    componentDidMount(){
        this.fetchAppData();
    }

    

   async fetchAppData(){
        const response = await axios(
            'http://localhost:9001/artifact/brief?type=APP',
        );
        console.log("i am here")
        console.log(JSON.stringify(response));
        //setEntityFetch();
        this.setState({appDatas:response.data.data});
    
       
    }

    callBackFunactionForEntityList(data){
        console.log(data);
            this.setState({selectedAppData:{
                entityStorePref:data
            }});
    }
    
    buildAppAction = (evnt) =>{
        evnt.preventDefault();
        let data ={
            "context": {
              "handle": "string"
            },
            "data": {
                "app": {
                    "artifactId":this.state.appDatas["artifactId"],
                },
                artifactPackaging:this.state.appDatas["artifactPackaging"],
                entityStorePref:this.state.selectedAppData.entityStorePref,
                progLanguage:this.state.appDatas["progLanguage"],
                secure:this.state.appDatas["secure"],
                systemQueue:this.state.appDatas["systemQueue"]
            }
        }

        const requestOpt ={
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          }
          
        fetch(MyConfig.apiBaseUrl+ MyConfig.appBuildUri,requestOpt).then(resp =>{
            console.log(resp);
            switch (resp.status) {
                case 200:
                    HandleToastMessage("App has been build.",StatusEnum.SUCCESS);
                    
                    data = {};
                    break;
                case 400:
                    HandleToastMessage("App build failed.",StatusEnum.FAIL);
                    break;
                default:
                    HandleToastMessage("App build failed.",StatusEnum.FAIL);
                    break;
            }
          })


    }

    render() {
        return (
            <form  onSubmit={this.buildAppAction}>
                <div className="form-row ">
                    <div className="form-group col-md-12">
                        <label>App</label><span className="required">*</span>
                    <select className="form-control" onChange={this.handleChange} value={this.state.appObj["artifactId"]}>
                        <option value="" hidden>Select</option>
                        
                          {this.state.appDatas.map((item,idx) => {
                            return (<option value={item.artifactId}>{item.label}</option>);
                        }) }
                    </select>
                        
                    </div>
                    </div>
                    <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label>Packaging</label><span className="required">*</span>
                        <select className="form-control-sm ml-3" onChange={this.handleChange} name ="artifactPackaging" value={this.state.appObj.artifactPackaging}>
                            <option value="" hidden>Select</option>
                            <option value="MAVEN">Maven</option>
                            <option value="GRADLE">Gradle</option>
                        </select><span className="small font-italic home-font-colour ml-3">Please provide packaging</span>
                    </div>
                    <div className="form-group col-md-6">
                    <label>Language</label><span className="required">*</span>
                        <select className="form-control-sm ml-3" onChange={this.handleChange} name ="progLanguage" value={this.state.appObj.progLanguage}>
                            <option value="" hidden>Select</option>
                            <option value="Java">Java</option>
                    
                        </select>
                    </div>
                </div>
                
                <div className="form-row ">
                    <div className="form-group col-md-6">
                    <label>Secure</label><span className="required">*</span>
                        <select className="form-control-sm ml-3" onChange={this.handleChange} name ="secure" value={this.state.appObj.secure}>
                            <option value="" hidden>Select</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                    
                        </select>
                        </div>
                        <div className="form-group col-md-6">
                    <label>System Queue</label><span className="required">*</span>
                        <select className="form-control-sm ml-3" onChange={this.handleChange} name ="systemQueue" value={this.state.appObj.systemQueue}>
                            <option value="" hidden>Select</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                    
                        </select>
                        </div>
                    </div>
                    <div className="form-row ">
                        <SelectEntityState label="Entities" callBackFunactionForEntityList={this.callBackFunactionForEntityList}></SelectEntityState>
                    
                    </div>
                <button type="submit"
                        className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Build App
                </button>
            </form>
        );
    }
  }