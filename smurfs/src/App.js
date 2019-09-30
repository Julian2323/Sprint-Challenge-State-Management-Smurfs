import React from 'react';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';

function App() {
  return (
    <div className="App">
    {/* <Smurfs /> */}
      <Route
      path="/Smurfs"
      component={Smurfs}
      />
      <Route
      path="/SmurfForm"
      component={SmurfForm}
      />
    </div>
  );
}

export default App;