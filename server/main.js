import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/campaigns';
import {Campaigns} from '../imports/api/campaigns';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('user-campaigns', () => {
    return Campaigns.find({_createdBy: Meteor.userId()});
  })
});
