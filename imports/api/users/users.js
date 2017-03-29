import {Mongo} from 'meteor/mongo';

export const UserProfile = new Mongo.Collection('userProfile');

UserProfileSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: "First Name"
    },
    lastName: {
        type: String,
        label: "Last Name"
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            if (this.isInsert) {
                return new Date()
            }
        }
    },
    updatedAt: {
        type: Date,
        label: "Updated At",
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
});

UserProfile.attachSchema(UserProfileSchema);