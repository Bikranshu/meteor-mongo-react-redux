import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Products = new Mongo.Collection('products');

ProductSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Code"
    },
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    },
    status: {
        type: String,
        label: "Status",
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
        optional: true
    },
});

Products.attachSchema(ProductSchema);

export default Products;