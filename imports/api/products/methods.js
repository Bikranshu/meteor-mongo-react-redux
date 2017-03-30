import {Meteor} from 'meteor/meteor';

import Products from '../products/products';

Meteor.methods({
    storeProduct: function (product) {
        Products.insert(product);
    },
    updateProduct: function (id, product) {
        Products.update({_id: id}, {
            $set: {
                code: product.code,
                name: product.name,
                description: product.description,
                status: product.status
            }
        })
    },
    destroyProduct: function (id) {
        Products.remove({_id: id});
    }
});
