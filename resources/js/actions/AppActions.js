// Dispatcher
var AppDispatcher = require('../dispatcher/AppDispatcher');

// Constants
var AppConstants   = require('../constants/AppConstants');

var AppAction = {
  	action: function(data) {
	    AppDispatcher.handleViewAction({
	      	actionType: AppConstants.APP_ACTION,
	      	data: data
	    });
  	}
};

module.exports = AppAction;