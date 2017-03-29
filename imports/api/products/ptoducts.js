import {Mongo} from 'meteor/mongo';

export const Products = new Mongo.Collection('products');

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
        type: Boolean,
        label: "Status"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId();

        }
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

Products.attachSchema(ProductSchema);