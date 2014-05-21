Links = new Meteor.Collection('links');
if (Meteor.isClient) {
  Template.link_list.links = function () {
    return Links.find({}, {sort: {link: 1}}).fetch();
  };

  Template.link_list.events({
    'click input#add_button': function () {
      // template data, if any, is available in 'this'
      var new_link = document.getElementById("new_link").value;
      Links.insert({link:new_link, date: (new Date())});
      document.getElementById("new_link").value = '';
    },
    'click span.remove': function () {
      // template data, if any, is available in 'this'
      Links.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
