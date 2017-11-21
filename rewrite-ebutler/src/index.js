import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ebutler from './js/components/ebutler';
import nav from './js/components/navigation';
import slider from './js/components/slider';
import registerServiceWorker from './js/components/registerServiceWorker';

ReactDOM.render(<ebutler />, document.getElementById('ebutler'));
ReactDOM.render(<slider />, document.getElementsByClassName('container-fluid'));
ReactDOM.render(<nav />, document.getElementsByClassName('navbar'));

registerServiceWorker();
