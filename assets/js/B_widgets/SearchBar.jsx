"use strict";

var ProposalEntry = React.createClass({
  render: function() {
    var rows = [];
    var _this = this;
    this.props.data.forEach(function(item) {
      var linkToItem = _this.props.baseUrl + "/" + item.id;
      rows.push(
        <dd>
          <a href={linkToItem}>{item.name}</a>
        </dd>
      );
    });

    return (
      <dl>
        <dt>{this.props.title}</dt>
        {rows}
      </dl>
    );
  }
});

var SearchBar = React.createClass({
  displayName: 'SearchBar',

  getInitialState: function() {
    return {showProposal: false, caveResult: "", entryResult: ""}
  },

  displaySelection: function() {

    if (this.refs.quickSearchInput.value.length >= 3) {
      // Make requests to cave, entry, file, author, comments, forum
      $.ajax({
        url: "/cave/findAll?name=" + this.refs.quickSearchInput.value,
        dataType: 'json',
        success: function(data) {
          this.setState({showProposal: true, caveResult: data});
        }.bind(this)
      });

      $.ajax({
        url: "/entry/findAll?name=" + this.refs.quickSearchInput.value,
        dataType: 'json',
        success: function(data) {
          this.setState({showProposal: true, entryResult: data});
        }.bind(this)
      });

    } else {
      this.setState({showProposal: false, caveResult: "", entryResult: ""});
    }
  },

  render: function() {
    var proposal = [];

    if (this.state.caveResult.length > 0) {
      proposal.push(<ProposalEntry title="Cave" baseUrl="/ui/cavedetail/" data={this.state.caveResult}/>);
    }
    if (this.state.entryResult.length > 0) {
      proposal.push(<ProposalEntry title="Entry" baseUrl="/ui/entrydetail/" data={this.state.entryResult}/>);
    }

    var display = "none";
    if (proposal.length > 0) {
      display = "inline";
    }

    return (
      <form>
        <div className="form-group">
          <div>
            <input type="text" className="form-control" ref="quickSearchInput" id="quickSearchInput" placeholder="Quick search" onChange={this.displaySelection}/>
            <div style={{
              display: display
            }} className="proposal">{proposal}</div>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </div>
      </form>
    );
  }
});