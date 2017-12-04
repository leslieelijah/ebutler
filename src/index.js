import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ebutler from './js/components/ebutler';
import registerServiceWorker from './js/components/registerServiceWorker';

ReactDOM.render(<Ebutler />, document.body);

registerServiceWorker();
