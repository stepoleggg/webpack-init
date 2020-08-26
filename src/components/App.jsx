import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const App = (props) => {
  const { a } = props;
  return (
    <div>
      <h1>
        My React App!
        {a}
      </h1>
    </div>
  );
};

App.propTypes = {
  a: PropTypes.string,
};
App.defaultProps = {
  a: 'test',
};

export default App;
