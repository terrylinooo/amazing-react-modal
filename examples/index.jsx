import React from 'react';
import ReactDOM from 'react-dom/client';
import Example1 from './modals/example1';
import Example2 from './modals/example2';
import Example3 from './modals/example3';
import Example4 from './modals/example4';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <h1>Examples</h1>
      <h2>MessageModal</h2>
      <p>
        Message Modal is the simplified version of Amazing Modal for displaying simple messages.
      </p>
      <Example1 />
      <Example2 />
      <Example3 />
      <h2>AmazingModal</h2>
      <p>
        Amazing Modal is a Component that is composed of related components such as Header, Footer,
        Body, and Buttons, making it easy to use.
      </p>
      <Example4 />
      <p></p>
    </>
  </React.StrictMode>,
);
