import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

require("./bootstrap.min.js");
require("./mdb.min.js");
require("popper.min.js");

import Ebutler from './js/components/ebutler';
import registerServiceWorker from './js/components/registerServiceWorker';

ReactDOM.render(<Ebutler />, document.body);

registerServiceWorker();
