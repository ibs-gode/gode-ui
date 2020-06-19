import React from 'react';
import Notifications from "react-notify-toast";
import EntityDesign from './entity-design'
import AppDesign from "./app-design";
import AppDeploy from "./app-deploy";

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
                                <div className="tab-pane" id="app-build"  aria-labelledby="app-build-tab"></div>
                                <div className="tab-pane" id="app-deploy"  aria-labelledby="app-deploy-tab">
                                    <AppDeploy/>
                                </div>
                                <div className="tab-pane" id="api-docs" aria-labelledby="api-docs-tab"></div>
                            </div>
                        </div>
                    </div>
                </div>





                {/*<div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Entity Design
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">

                                    <EntityDesign></EntityDesign>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    App Design
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordion">
                            <div className="card-body">
                                <form>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    App Build
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                             data-parent="#accordion">
                            <div className="card-body">
                                <form>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                App Deploy
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                            <form>

                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                        data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    API Doc & Admin Portal
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                             data-parent="#accordion">
                            <div className="card-body">
                                <div>
                                    <button type="button" className="btn btn-primary"
                                            onClick={(e) => this.handleLinkClick('portal')}>Link to Admin Portal
                                    </button>

                                    <button type="button" className="btn btn-primary ml-5"
                                            onClick={(e) => this.handleLinkClick('docs')}>Link to API Docs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        );


};

export default HomePage;
