var React = require('react');

var SideBlock = React.createClass({
    render: function() {

        var divStyle = {
            backgroundColor: 'DarkOrange',
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'left',
            marginTop: '20',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };

        if (this.props.color){
            divStyle.backgroundColor = this.props.color;
        }

        var titleStyle = {
            marginLeft: '20',
            marginTop: '10',
            marginBottom: '-20',
            fontFamily: "Helvetica",
            color: '#fff'
        };

        var dataStyle = {
            marginLeft: '20',
            marginBottom: '10',
            fontFamily: "Helvetica",
            fontWeight: 'bold',
            color: '#fff'
        };

        var blankStyle = {
            backgroundColor: '#fff',
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'left',
            marginTop: '0',
            height: '60',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };

        return (
            <div>
                <div style={divStyle} >
                    <p style={titleStyle}>
                        {this.props.title}
                    </p>
                    <h3 style={dataStyle}>
                        {this.props.data}
                    </h3>

                </div>
                <div style={blankStyle}>
                </div>
            </div>
        )
    }
});

module.exports = SideBlock;
