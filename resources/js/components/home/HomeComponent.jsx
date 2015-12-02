//Stores
var AppStore = require('../../stores/AppStore');

//Actions
var AppActions = require('../../actions/AppActions');

var HomeComponent = React.createClass({
    /******************************** DISPLAY METHODS ********************************/
    render: function() {
        return (
            <div>
                <button onClick={this.action}>ACTION</button>
            </div>
        );
    },
    
    /******************************** LIFECYCLE METHODS ********************************/
    
    componentDidMount:function(){
        AppStore.on(AppStore.Events.APP_EVENT, function(){
            console.log('EVENEMENT RECU !');
        });
    },
    
    /******************************** CUSTOM METHODS ********************************/
    
    action:function(){
        AppActions.action('data');
    }
});

module.exports = HomeComponent;
