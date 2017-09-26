import {Meteor} from 'meteor/meteor';
import React from 'react'
import ReactDOM from 'react-dom';

import {router} from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(router, document.getElementById('app'));
})