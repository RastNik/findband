function SvgLocation(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18" {...props} >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14286 0C3.19797 0 0 3.19797 0 7.14286C0 12.8571 6.42857 17.1429 7.14286 17.1429C7.85714 17.1429 14.2857 12.8571 14.2857 7.14286C14.2857 3.19797 11.0877 0 7.14286 0ZM7.14286 9.28571C8.32632 9.28571 9.28571 8.32632 9.28571 7.14286C9.28571 5.95939 8.32632 5 7.14286 5C5.95939 5 5 5.95939 5 7.14286C5 8.32632 5.95939 9.28571 7.14286 9.28571Z"/>
    </svg>
  );
}

SvgLocation.defaultProps = {
  width: '15',
  height: '18',
  fill: '#000'
};

export default SvgLocation;