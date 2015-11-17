'use strict';

var React = require('react');

var boxStyle = {
            'height': '150px',
            'width': '150px',
            'background-color':'yellow'
};

var time = 1000;
var Box = React.createClass({
       'getInitialState': function onGestInitialState(){
            return{
                'value' : this.props.initialValue
                  };
        },

       componentWillMount: function(){
          var old_this = this;
          this.timer = setInterval(function(){

          var oldValue = old_this.state.value;
          var newValue = oldValue === 'X' ? 'O': 'X';
          old_this.setState({
          value: newValue
          });
         }, time);
       },

       componentWillUnmount: function(){
   clearInterval(this.timer);},

  'render': function onRender () {
      return (
      <button style = {boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='X'/>, document.body);
