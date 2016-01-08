var AppDispatcher   = require('../dispatcher/AppDispatcher');

var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');

// constants
var UserConstants = require('../constants/UserConstants');


var UserStore =  module.exports = assign({}, EventEmitter.prototype, {

    /******************************** GETTERS / SETTERS  ********************************/

    
    /******************************** FETCH METHODS  ********************************/
    
    /******************************** CUSTOM METHODS  ********************************/
    

});

UserStore.Events = {

};

UserStore.dispatcherToken = UserDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {

        case UserConstants.User_ACTION:
            UserStore.action(action.data);
            break;

        default:
        // no op
    }

    return true;
});