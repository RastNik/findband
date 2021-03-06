import PropTypes from 'prop-types';

import cn from 'classnames';

function Button(props) {
  return (
    <button className={cn("btn btn-button-template", props.color, props.size, props.height, props.className)}>
      <span>{props.text}</span>
    </button>
  );
}

Button.defaultProps = {
	text: 'Text button',
  size: 'btn-size-normal',
  height: 'btn-height-32',
  color: 'btn-color-grey'
};

 Button.propTypes = {
  icon: PropTypes.string,
	text: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default Button;