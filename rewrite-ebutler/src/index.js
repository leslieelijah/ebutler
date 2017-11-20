import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './js/components/ebutler';
import Nav from './js/components/navigation';
import Slider from './js/components/slider';*/
import { ebutler, navigation, sliders} from './js/components/ebutler';
import registerServiceWorker from './js/components/registerServiceWorker';

ReactDOM.render(<ebutler />, <navigation />, <sliders /> , document.getElementById('ebutler'));


registerServiceWorker();
