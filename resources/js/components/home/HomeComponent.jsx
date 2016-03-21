var navBarItems = [
    {name:"Home", link:'/home'},
    {name:"Le groupe", link:'/le-groupe'},
    {name:"L'activité", link:'/l-activite'},
    {name:"Nous rejoindre", link:'/nous-rejoindre'},
    {name:"Espace collaborateur", link:'/espace-collaborateur'},
    {name:"Contact", link:'/contact'},
    {name:"Mon ipssi", link:'/connexion'}
];

var sliderItem = [
    {
        title:'Lorem ipsum dolor sit amet.', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        src:'images/desktop-mac-2.jpg',
        link:'/articles/lorem-ipsum'
    },
    {
        title:'Lorem ipsum.', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        src:'images/b6972e09ad5bf832a831ca2f6200e358.jpg',
        link:'/articles/lorem-ipsum'
    },
    {
        title:'Lorem ipsum jygfhjyhj.', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        src:'images/02_b.jpg',
        link:'/articles/lorem-ipsum'
    }
];

var HomeComponent = React.createClass({
    /******************************** DISPLAY METHODS ********************************/
    render: function() {
        return (
            <div className="Home">
                <header className="Header_wrapper">
                    <div className="Header">
                        {/*<img src="images/LOGO_IPSSI_GROUPE_IP_FORMATION.png" className="Logo"/>*/}
                        <h1 className="Title">IPSSI-site</h1>
                        <div className="Header_actions">
                            <div className="Search_bar">
                                <input type="text" className="input Search_input"/>
                                <button className="Search_button padding"><i className="fa fa-search"/></button>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="Navbar_wrapper">
                    <ul className="Navbar">{_.map(navBarItems, this.displayNavItem)}</ul>
                </nav>
                <div className="Slider_wrapper">
                    <div className="Slider">{_.map(sliderItem, this.displaySliderItem)}</div>
                </div>
                <div className="Slider_menu_wrapper">
                    <ul className="Slider_menu">{_.map(sliderItem, this.displaySliderMenuItem)}</ul>
                </div>
            </div>
        );
    },
    
    /******************************** LIFECYCLE METHODS ********************************/
    
    
    /******************************** CUSTOM METHODS ********************************/
    
    displayNavItem:function(item, i){
        return (
            <li className="Navbar_item" key={"navbar-item-"+_.kebabCase(item.name)}>
                <a href={item.link}>{item.name}</a>
            </li>
        );
    },
    
    displaySliderItem:function(item, i){
        var sliderPictureStyle = {backgroundImage:"url('"+item.src+"')"};
        return (
            <div className="Slider_item" key={"home-slider-item-"+_.kebabCase(item.title)}>
                <div className="Slider_item_picture" style={sliderPictureStyle}/>
                <div className="Slider_text">
                    <div className="Slider_item_title"><a href={item.link}>{item.title}</a></div>
                    <p className="Slider_item_description">{item.description}</p>
                </div>
            </div>
        );
    },
    
    displaySliderMenuItem:function(item, i, items){
        var width = items.length >= 4 ? '25%' : 'calc(' + (100 / items.length).toString() + '% - 5px)';
        var sliderPictureStyle = {backgroundImage:"url('"+item.src+"')", width:width};
        return(
            <li className="Slider_menu_item" key={"home-slider-menu-item"+_.kebabCase(item.title)} style={sliderPictureStyle}>
                <div className="Slider_menu_item_title">{item.title}</div>
            </li>
        );
    }

});

module.exports = HomeComponent;
