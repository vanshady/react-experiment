var React = require('react');
var FirstBlock = require('./FirstBlock.jsx');
var SideBlock = require('./SideBlock.jsx');

var SideBarManager = React.createClass({
    render: function() {

        return (
            <div>
                <FirstBlock title="18°" location="Paris"/>
                <SideBlock title="New visitors" data="1.5k" color="dodgerblue"/>
                <SideBlock title="Bounce Rate" data="50%" color="mediumpurple"/>
                <SideBlock title="Searchs" data="28%" color="orangered"/>
                <SideBlock title="Traffic" data="140.5 kb" color="yellowgreen"/>
            </div>
        )
    }
});

module.exports = SideBarManager;
