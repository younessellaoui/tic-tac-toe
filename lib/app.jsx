'use strict';

var React = require('react');

var boxStyle = {
            'height': '150px',
            'width': '150px',
            'background-color':'yellow'
};

var time = 1000;
var Box = React.createClass({

    handleClick: function(){
        var oldValue = this.state.value;
        var newValue = oldValue === 'X' ? 'O': 'X';
        this.setState({
        value: newValue
        });
    },

    getInitialState: function() {
        return {value: this.props.initialValue};
    },
    'render': function onRender () {
    return (
        <div>
            <button style={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
        </div>
    );
   }
});

React.render(<Box initialValue ={'X'}/>, document.body);

var Row = React.createClass({
  render: function onRender () {
    return (
      <div>
        <Box initialValue="-" />
        <Box initialValue="-" />
        <Box initialValue="-" />
      </div>
    );
  }
});



React.render(<Row/>, document.body);
