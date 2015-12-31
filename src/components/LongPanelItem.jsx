var React = require('react');

var SideBlock = React.createClass({
    render: function() {

        var blankStyle = {
            backgroundColor: 'DarkOrange',
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'left',
            marginTop: '20',
            height: '200',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };

        if (this.props.color) {
            blankStyle.backgroundColor = this.props.color;
        }

        var divStyle = {
            backgroundColor: '#525252',
            borderRadius: '3',
            border: '1px solid rgba(100,100,100,0.1)',
            textAlign: 'center',
            marginTop: '0',
            height: '80',
            boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)'
        };

        var dataStyle = {
            marginLeft: '20',
            marginTop: '10',
            fontFamily: "Helvetica",
            color: '#fff'
        };

        var titleStyle = {
            marginLeft: '20',
            marginTop: '-5',
            marginBottom: '-20',
            fontFamily: "Helvetica",
            color: '#9E9E9E'
        };

        return (
            <div>
                <div style={blankStyle}></div>
                <div style={divStyle}>
                    <div className="col-xs-4">
                        <h3 style={dataStyle}>
                            {this.props.data1}
                        </h3>
                        <p style={titleStyle}>
                            {this.props.title1}
                        </p>
                    </div>
                    <div className="col-xs-4">
                        <h3 style={dataStyle}>
                            {this.props.data2}
                        </h3>
                        <p style={titleStyle}>
                            {this.props.title2}
                        </p>
                    </div>
                    <div className="col-xs-4">
                        <h3 style={dataStyle}>
                            {this.props.data3}
                        </h3>
                        <p style={titleStyle}>
                            {this.props.title3}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SideBlock;
