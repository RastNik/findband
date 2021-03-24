function SvgPlay(props) {
  return (
    <svg viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.3758 6.31658C12.6026 7.10357 12.6026 8.89638 11.3758 9.68337L3.5799 14.6845C2.24878 15.5384 0.5 14.5825 0.5 13.0011L0.5 2.99887C0.500001 1.41741 2.24878 0.461564 3.5799 1.31548L11.3758 6.31658Z"/>
    </svg>
  );
}

SvgPlay.defaultProps = {
  width: '13',
  height: '16',
  fill: '#161931'
};

export default SvgPlay;