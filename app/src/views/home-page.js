import React from 'react';
import Notifications from "react-notify-toast";
import EntityDesign from './entity-design'
import AppDesign from "./app-design";
import AppBuild from './app-build';

const HomePage = () => {

        return (
            <div>
                <Notifications/>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header home-colour">
                            <ul className="nav nav-tabs card-header-tabs App-link font-weight-bolder font-italic" id="gode-header" >
                                <li className="nav-item">
                                    <a className="nav-link active home-font-colour" href="#entity-design" data-toggle="tab"
                                       aria-controls="entity-design">Entity Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link home-font-colour" href="#appDesign" data-toggle="tab" aria-controls="app-design">App Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link home-font-colour" href="#app-build" data-toggle="tab" aria-controls="app-build">App Build</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link home-font-colour" href="#app-deploy" data-toggle="tab" aria-controls="app-deploy">App Deploy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link home-font-colour" href="#api-docs" data-toggle="tab" aria-controls="api-docs">API Docs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content mt-3">
                                <div className="tab-pane active" id="entity-design" >
                                    <EntityDesign/>
                                </div>
                                <div className="tab-pane" id="appDesign"  aria-labelledby="app-design-tab">
                                    <AppDesign/>
                                </div>
                                <div className="tab-pane" id="app-build"  aria-labelledby="app-build-tab">
                                    <AppBuild></AppBuild>
                                </div>
                                <div className="tab-pane" id="app-deploy"  aria-labelledby="app-deploy-tab"></div>
                                <div className="tab-pane" id="api-docs" aria-labelledby="api-docs-tab"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );


};

export default HomePage;
