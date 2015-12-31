var React = require('react');

var FirstBlock = React.createClass({
    render: function() {

        var divStyle = {
            backgroundColor: 'DarkOrange',
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'center',
            marginTop: '20',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };

        if (this.props.color){
            divStyle.backgroundColor = this.props.color;
        }

        var titleStyle = {
            marginTop: '50',
            fontFamily: "Helvetica",
            color: '#fff'
        };

        var locationStyle = {
            marginBottom: '40',
            fontFamily: "Helvetica",
            fontWeight: 'bold',
            color: '#fff'
        };

        return (
            <div style={divStyle} >
                <h2 style={titleStyle}>
                    {this.props.title}
                </h2>
                <h5 style={locationStyle}>
                    {this.props.location}
                </h5>
            </div>
        )
    }
});

module.exports = FirstBlock;
