import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomePage from './views/home-page.js'
import LoadingIndicator from './components/LoadingIndicator';

const App = () => {
    return (
        <div className="App">
            <div className="container-fluid">
                <div>
                    <div className="col-12">
                        <header className="py-4 app-header">
                            <h1 className="text-white font-weight-bolder">GOD(E)</h1>
                        </header>
                    </div>
                </div>
                <div className="container py-4 my-3 bg-white border rounded">
                    <HomePage></HomePage>
                    <LoadingIndicator/>
                    {/*<MainFormComponent></MainFormComponent>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
