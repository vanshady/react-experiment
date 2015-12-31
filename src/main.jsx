var React = require('react');
var ReactDOM = require('react-dom');
var PanelItem = require('./components/PanelItem.jsx');
var LongPanelItem = require('./components/LongPanelItem.jsx');
var SideBarManager = require('./components/SideBarManager.jsx');

ReactDOM.render(< PanelItem title="20" desc="New followers added this month"/>, document.getElementById('block1'));
ReactDOM.render(< PanelItem title="$ 1250" desc="Average Monthly Income" />, document.getElementById('block2'));
ReactDOM.render(< PanelItem title="$ 13865" desc="Yearly Income Goal" />, document.getElementById('block3'));
ReactDOM.render(< LongPanelItem color="dodgerblue" data1="15080" title1="Shot Views" data2="12000" title2="Likes" data3="5100" title3="Comments"/>, document.getElementById('long1'));
ReactDOM.render(< LongPanelItem color="PaleVioletRed " data1="15080" title1="Shot Views" data2="12000" title2="Likes" data3="5100" title3="Comments"/>, document.getElementById('long2'));
ReactDOM.render(< SideBarManager />, document.getElementById('sideBar'));
