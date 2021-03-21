function SvgNews(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.25C1.92893 0.25 0.25 1.92893 0.25 4V12C0.25 14.0711 1.92893 15.75 4 15.75H14C16.0711 15.75 17.75 14.0711 17.75 12V4C17.75 1.92893 16.0711 0.25 14 0.25H4ZM1.75 4C1.75 2.75736 2.75736 1.75 4 1.75H14C15.2426 1.75 16.25 2.75736 16.25 4V5.25H1.75V4ZM1.75 6.75V12C1.75 13.2426 2.75736 14.25 4 14.25H14C15.2426 14.25 16.25 13.2426 16.25 12V6.75H1.75Z"/>
    </svg>    
  );
}

SvgNews.defaultProps = {
  width: '18',
  height: '16',
  fill: '#161931'
};

export default SvgNews;