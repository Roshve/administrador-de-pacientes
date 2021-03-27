import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Pacientes}
        />
        <Route
          exact
          path="/"
          component={NuevaCita}
        />
      </Switch>
    </Router>
  );
}

export default App;
