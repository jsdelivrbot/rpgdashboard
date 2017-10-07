import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const username = user.username
    const email = user.emails[0].address;

    //TODO: Add actual support for no try catch
    try {
        new SimpleSchema({
            'username' :{
                type: String,
                max: 20,
                min: 8
            },
            'email': {
                type: String,
                regEx: SimpleSchema.RegEx.Email
            }
        }).validate({username, email});
    } catch (err) {
        throw new Meteor.Error(400, err.message);
    }

    return true;
});