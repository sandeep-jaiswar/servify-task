import { useTheme } from '@material-ui/core';
import React from 'react'
import "./index.scss";

function Header() {
  const theme = useTheme();
  const { secondary } = theme.palette.text;
  return (
    <div
      className={`header-wrapper`}
      style={{ backgroundColor: secondary }}
    ></div>
  );
}

export default Header