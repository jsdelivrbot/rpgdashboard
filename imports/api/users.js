import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    //TODO: Add actual support for no try catch

    new SimpleSchema({
        'email': {
            type: String,
            regEx: SimpleSchema.RegEx.Email
        }
    }).validate({email});

    return true;
});