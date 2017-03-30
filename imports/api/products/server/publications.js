import {Meteor} from 'meteor/meteor';

import Products from '../products';

Meteor.publish('fetchAll', function () {
    return Products.find({}, {sort: {createdAt: 1}});
});

Meteor.publish('fetchById', function (id) {
    return Products.find({_id: id});
});
