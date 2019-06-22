import React from "react";
import App from "./App";
import TestRenderer from "react-test-renderer";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe(`The App component`, () => {
  it(`renders App component`, () => {
    const tree = TestRenderer.create(<App />).toJSON();
    console.log(tree);
  });
});
