import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="app">
      Hello world
    </div>
  );
}

Meteor.startup(() => {
  render(<App />, document.querySelector("#root"));
});
