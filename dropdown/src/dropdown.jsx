// we need to show a button and a list
// this component should know hwen to show the list

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState: function() {
    return { open: false };
  },
  handleClick: function() {
    this.setState({
      open : !this.state.open
    });
  },
  handleItemClicked: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  },
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem
        whenItemClicked={this.handleItemClicked}
        item={item}
        className={this.state.itemTitle === item ? "active" : ""}/>
    }.bind(this));

    return <div onMouseOver={this.handleHover} className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.state.itemTitle || this.props.title}
        subTitleClassName="caret"/>
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
          {list}
        </ul>
    </div>
  }
});
