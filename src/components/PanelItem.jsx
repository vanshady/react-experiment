var React = require('react');
var PanelItem = React.createClass({

    render: function() {
        var divStyle = {
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'left',
            marginTop: '20',
            background: 'white',
            marginLeft:'0',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };
        if (this.props.background) {
            divStyle.background = this.props.background;
        }
        if (this.props.height) {
            divStyle.height = this.props.height;
        }
        if (this.props.marginLeft) {
            divStyle.marginLeft = this.props.marginLeft;
        }
        var titleStyle = {
            marginTop: '50',
            fontFamily: "Helvetica",
            fontWeight: 'bold',
            color: '#585858'
        };

        if (this.props.titleBackground) {
            titleStyle.background = this.props.titleBackground;
        }

        var descStyle = {
            marginBottom: '50',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            color: '#777'
        };

        if (this.props.descColor) {
            descStyle.color = this.props.descColor;
        }

        return (
            <div>
            <div style={divStyle}
                className="col-sm-3" >
                <div style={titleStyle} >
                    <h3>{this.props.title}</h3>
                </div>
                <div style={descStyle}>
                    <h5>{this.props.desc}</h5>
                </div>
            </div>
            <div className="col-sm-1">
            </div>
            </div>
        );
    }
});

module.exports = PanelItem;
