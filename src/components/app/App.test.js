import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('spec name', function () {
  let string = 'aaaa';
  string = `dfdfdfdd${string}`;
  console.log(string);
});
