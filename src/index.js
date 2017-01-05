import React from 'react';
import ReactDOM from 'react-dom';

require.ensure('./Settings.jsx', function() {
  const Settings = require('./Settings.jsx');
  ReactDOM.render(
    <Settings />,
    document.getElementById('root')
  );
});

require.ensure('./Settings2.jsx', function() {
  const Settings2 = require('./Settings2.jsx');
  ReactDOM.render(
    <Settings2 />,
    document.getElementById('root2')
  );
});
