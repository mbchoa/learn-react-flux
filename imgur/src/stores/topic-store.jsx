var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

//stores fetch and store data
module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json) {
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // trigger method provided by reflux
    this.trigger('change', this.topics);
  }
});
