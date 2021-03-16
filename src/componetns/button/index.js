import PropTypes from 'prop-types';

import cn from 'classnames';

function Button(props) {
  return (
    <button className={cn("button-template", props.color, props.height)}>{props.text}</button>
  );
}
Button.defaultProps = {
	text: 'Text',
  height: 'height-32',
  color: 'color-orange'
 };

 Button.propTypes = {
	text: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default Button;