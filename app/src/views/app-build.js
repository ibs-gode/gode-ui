import React from 'react';
import EntityList from '../components/entity-list';
import CustomDropDown from '../components/custom-drop-down';


export default class AppBuild extends React.Component {


    
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            app: Object.assign({}, {}),
            errors: {}            
        }
        
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState((prevState) => {
          prevState.app[name] = value;
          return { app: prevState.app };
        });
      }
    componentDidMount(){
        
    }

    render() {
        return (
            <form >
                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label>App</label><span className="required">*</span>
                        <CustomDropDown label={"App"} type="APP"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Description</label><span className="required">*</span>
                        <input type="text" className="form-control" placeholder="App Description" />
                    </div>
                </div>
                
                <button type="submit"
                        className="btn btn-primary  font-weight-bold float-right mb-3 mr-3">Build App
                </button>
            </form>
        );
    }
  }