import PropTypes from 'prop-types';

import cn from 'classnames';

import SvgFilters from '../icons/filters';

function ButtonLocation(props) {
  return (
    <button className={cn("btn btn-button-template", props.color, props.size, props.height, props.className)}>
      <i>
        <SvgFilters />
      </i>
      <span>{props.text}</span>
    </button>
  );
}

ButtonLocation.defaultProps = {
	text: 'Text button',
  size: 'btn-size-normal',
  height: 'btn-height-32',
  color: 'btn-color-grey'
};

ButtonLocation.propTypes = {
  icon: PropTypes.string,
	text: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default ButtonLocation;