/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import { GoSearch } from 'react-icons/go';

const CustomAutoComplete = (props) => {
  const {
    classes,
    options,
    value,
    onEnter: handleEnter,
    onSelect: handleSelect,
    onSearch: handleSearch
  } = props;

  const handlePressKey = (e) =>{
    if(e.key === 'Enter'){
      handleEnter();
    }
  };
  const list = options.map(item=>({
    label: item.Title,
    value: item.imdbID
  }));
  return (
    <div className={classes.wrapper}>
      <AutoComplete
        options={list}
        placeholder={'Seach movie title! Enter more than 3 characters'}
        onSearch={handleSearch}
        onSelect={handleSelect}
        onKeyPress={handlePressKey}
        value={value}
      />
      <button onClick={handleEnter}>
        <GoSearch/>
      </button>
    </div>
  );
};

CustomAutoComplete.defaultProps = {
  classes: {},
  options: [],
  value: '',
  onChange: ()=>null,
  onEnter: ()=>null,
  onSearch: ()=>null,
  onSelect: ()=>null,
};

CustomAutoComplete.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
};

export default CustomAutoComplete;
