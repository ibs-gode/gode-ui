import React from 'react';
import Notifications from "react-notify-toast";
import EntityDesign from './entity-design'

export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Notifications/>
                <div id="accordion">
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
                </div>

            </div>
        );
    }

}