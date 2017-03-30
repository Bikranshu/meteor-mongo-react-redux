import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    import '../imports/api/products/server/publications';
    import '../imports/api/products/methods';
});
