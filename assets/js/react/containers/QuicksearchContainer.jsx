import {connect} from 'react-redux';
import {fetchQuicksearchResult, resetQuicksearch, setCurrentEntry} from './../actions/Quicksearch';
import {focusOnLocation} from './../actions/Map';
import Searchbar from '../components/common/Searchbar';

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(resetQuicksearch()),
    search: (criteria) => dispatch(fetchQuicksearchResult(criteria)),
    setCurrentEntry: (entry) => dispatch(setCurrentEntry(entry)),
    focusOnLocation: (entry) => dispatch(focusOnLocation(entry))
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.quicksearch.results,
    selectedEntry: state.quicksearch.entry,
    className: ownProps.className
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
