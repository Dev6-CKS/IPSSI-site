// Dispatcher
var AppDispatcher = require('../dispatcher/AppDispatcher');

// Constants
var UserConstants   = require('../constants/UserConstants');

var UserAction = {
  	action: function(data) {
	    UserDispatcher.handleViewAction({
	      	actionType: UserConstants.USER_ACTION,
	      	data: data
	    });
  	}
};

module.exports = AppAction;