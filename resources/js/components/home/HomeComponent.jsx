var HomeComponent = React.createClass({
    /******************************** DISPLAY METHODS ********************************/
    render: function() {
        return (
            <div className="Home">
                <header className="Header">
                    <img src="http://www.defi-metiers.fr/sites/default/files/doc-kelios/Logo/2015/08/04/LOGO_IPSSI_GROUPE_IP_FORMATION.png" className="Logo"/>
                    <div className="Header_actions">
                        <div className="Search_bar">
                            <input type="text" className="Search_input"/>
                            <button className="Search_button"><i className="fa fa-search"/></button>
                        </div>
                    </div>
                </header>
            </div>
        );
    },
    
    /******************************** LIFECYCLE METHODS ********************************/
    
    
    /******************************** CUSTOM METHODS ********************************/

});

module.exports = HomeComponent;
