
import { useTheme } from '@material-ui/styles';
import React from 'react'
import "./index.scss"

function Footer() {
  const theme = useTheme();
  const { secondary } = theme.palette.text;
  return (
    <div
      className={`footer-wrapper`}
      style={{ backgroundColor: secondary }}
    ></div>
  );
}

export default Footer