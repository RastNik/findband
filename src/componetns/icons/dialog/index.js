function SvgDialog(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.17856 7.42859C2.17856 4.65874 4.9619 2.17859 8.71427 2.17859C12.4666 2.17859 15.25 4.65874 15.25 7.42859C15.25 10.1984 12.4666 12.6786 8.71427 12.6786C7.91754 12.6786 7.15632 12.5637 6.45348 12.3548C6.25288 12.2951 6.03649 12.322 5.85658 12.4289C4.84923 13.0275 3.71945 13.395 2.54959 13.5026L3.20253 11.8702C3.30369 11.6173 3.39394 11.3607 3.47314 11.1009C3.54794 10.8557 3.49224 10.5892 3.32547 10.3944C2.59212 9.53787 2.17856 8.51562 2.17856 7.42859ZM8.71427 0.678589C4.41907 0.678589 0.678558 3.57102 0.678558 7.42859C0.678558 8.76467 1.13917 10.0002 1.91581 11.0334C1.88222 11.1272 1.84689 11.2205 1.80982 11.3131L2.50617 11.5917L1.80982 11.3131L0.880269 13.637C0.612287 14.307 1.10569 15.0357 1.82724 15.0357C3.4134 15.0357 4.9644 14.634 6.34011 13.8798C7.09186 14.0743 7.88941 14.1786 8.71427 14.1786C13.0095 14.1786 16.75 11.2862 16.75 7.42859C16.75 3.57102 13.0095 0.678589 8.71427 0.678589ZM19.7875 9.62541C19.6384 9.23896 19.2043 9.04656 18.8178 9.19566C18.4314 9.34477 18.239 9.77892 18.3881 10.1654C18.5773 10.6559 18.6786 11.1756 18.6786 11.7143C18.6786 12.8013 18.265 13.8236 17.5317 14.6801C17.3649 14.8749 17.3092 15.1414 17.384 15.3866C17.4632 15.6464 17.5534 15.903 17.6546 16.1559L18.3075 17.7883C17.1377 17.6807 16.0079 17.3132 15.0006 16.7146C14.8206 16.6077 14.6043 16.5808 14.4037 16.6405C13.7008 16.8494 12.9396 16.9643 12.1429 16.9643C10.8158 16.9643 9.58845 16.6457 8.5654 16.1054C8.19912 15.912 7.74539 16.0521 7.55195 16.4184C7.35852 16.7847 7.49863 17.2384 7.8649 17.4318C9.10862 18.0887 10.5771 18.4643 12.1429 18.4643C12.9677 18.4643 13.7653 18.3601 14.517 18.1656C15.8927 18.9197 17.4437 19.3214 19.0299 19.3214C19.7514 19.3214 20.2448 18.5927 19.9769 17.9227L19.0473 15.5989C19.0102 15.5062 18.9749 15.4129 18.9413 15.3191C19.718 14.2859 20.1786 13.0504 20.1786 11.7143C20.1786 10.9848 20.041 10.2823 19.7875 9.62541Z"/>
    </svg>
    
  );
}

SvgDialog.defaultProps = {
  width: '21',
  height: '20',
  fill: '#161931'
};

export default SvgDialog;