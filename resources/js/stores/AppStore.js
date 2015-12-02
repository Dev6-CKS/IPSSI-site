var AppDispatcher   = require('../dispatcher/AppDispatcher');

var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');

// constants
var AppConstants = require('../constants/AppConstants');


var AppStore =  module.exports = assign({}, EventEmitter.prototype, {

    /******************************** GETTERS / SETTERS  ********************************/

    
    /******************************** FETCH METHODS  ********************************/
    
    /******************************** CUSTOM METHODS  ********************************/
    
    action:function(data){
        AppStore.emit(AppStore.Events.APP_EVENT);
    }

});

AppStore.Events = {
    APP_EVENT : 'APP_EVENT'
};

AppStore.dispatcherToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {

        case AppConstants.APP_ACTION:
            AppStore.action(action.data);
            break;

        default:
        // no op
    }

    return true;
});