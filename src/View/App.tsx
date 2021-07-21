import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import router from "../router/router";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    {
                        router.map((e,index) => {
                            return (
                                <Route key={index} exact path={e.path} component={e.component}/>
                            )
                        })
                    }
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
