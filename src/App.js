import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Semester1 from './masterposter/semester1/PosterMain';
import Semester2 from './semester2/semester2main'
import Landing from './landing/Landing';

import ID from "./semester2/component/ID/Sem2_id";
import CS from "./semester2/component/CS/Sem2_cs";
import UX from "./semester2/component/UX/Sem2_ux";

class App extends Component {

  render() {
    return (
      <div className='homepage__home'>
        <main>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/semester1" exact>
              <Semester1 />
            </Route>
            <Route path="/semester2" exact>
              <Semester2 />
            </Route>

            {/* Routes for Semester2 */}

            <Route path="/semester2/ID" exact>
              <ID />
            </Route>
            <Route path="/semester2/CS" exact>
              <CS />
            </Route>
            <Route path="/semester2/UX" exact>
              <UX />
            </Route>

          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
