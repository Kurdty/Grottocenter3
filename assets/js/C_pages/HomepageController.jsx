"use strict";

var HomepageController = React.createClass({
  displayName: 'Homepage controller',

  getInitialState: function() {
    return {lang: ""};
  },

  componentDidMount: function() {},

  onLanguageChange(data) {
    console.log("Calling HomepageController.onLanguageChange with data = " + data);
    this.setState({lang: data});
  },

  render: function() {
    return <Homepage lang={this.state.lang} onLanguageChange={this.onLanguageChange}/>;
  }
});

ReactDOM.render(React.createElement(HomepageController, null), document.getElementById('homepage_wrapper'));
