import {Meteor} from 'meteor/meteor';

import Products from '../products/products';

Meteor.methods({
    storeProduct: function (product) {
        Products.insert(product);
    },
    updateProduct: function (id, product) {
        Products.update({ _id: id }, { $set: { product } })
    },
    destroyProduct: function (id) {
        Products.remove({ _id: id });
    }
});
