import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input, Message } from 'semantic-ui-react';
import { getAllItems } from '../selectors';
import { onSearch } from '../actions';
import { ItemList } from '../../../components';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e, { value }) {
    this.props.onChange(value);
  }

  render() {
    const { items, isRequesting, isError, message } = this.props;
    return (
      <div>
        <Input
          input='text'
          size='large'
          icon='search'
          iconPosition='left'
          placeholder='search photos...'
          loading={isRequesting}
          onChange={this.handleSearchChange}
        />
        {isError && <Message error>{message}</Message>}
        <ItemList items={items} />
      </div>
    );
  }
}

const mapStateToProps = state => getAllItems(state);

const mapDispatchToProps = dispatch => (
  {
    onChange: bindActionCreators(onSearch, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);