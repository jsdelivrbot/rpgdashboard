import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    //TODO: Add actual support for no try catch
    try {
        new SimpleSchema({
            'email': {
                type: String,
                regEx: SimpleSchema.RegEx.Email
            }
        }).validate({email});
    } catch (err) {
        throw new Meteor.Error(400, err.message);
    }

    return true;
});