var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

//stores fetch and store data
module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages: function(topicId) {
    return Api.get('topics/' + topicId)
      .then(function(json) {
        this.images = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // trigger method provided by reflux
    this.trigger('change', this.images);
  }
});
