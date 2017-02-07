import React from 'react';
import { render } from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div className="app">
      <EmployeeList />
    </div>
  );
}

Meteor.startup(() => {
  render(<App />, document.querySelector("#root"));
});
