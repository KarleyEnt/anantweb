import React, {useState} from "react";
import '../style/TopNavigationBar.css';

const TopNavigationBar = () => {
  const [isTopNavigationBarOpen, setIsTopNavigationBarOpen] = useState(false);
  let buttonClass;
  let topNavigationBarClass;

  if (isTopNavigationBarOpen) {
    buttonClass = 'topNavigationBarButton buttonOpen';
    topNavigationBarClass = 'topNavigationBar topNavigationBarOpen'
  } else {
    buttonClass = 'topNavigationBarButton';
    topNavigationBarClass = 'topNavigationBar topNavigationBarClosed';
  }

  return (
    <div className='top-nav' onMouseEnter={() => setIsTopNavigationBarOpen(true)} onMouseLeave={() => setIsTopNavigationBarOpen(false)} >
      <div className={topNavigationBarClass}>
        <a className='top-nav-items' href='#about' onClick={() => setIsTopNavigationBarOpen(false)}>About</a>
        <a className='top-nav-items' href='#education' onClick={() => setIsTopNavigationBarOpen(false)}>Education</a>
        <a className='top-nav-items' href='#experience' onClick={() => setIsTopNavigationBarOpen(false)}>Experience</a>
        <a className='top-nav-items' href='#contact' onClick={() => setIsTopNavigationBarOpen(false)}>Contact</a>
        <a className='top-nav-items' href='#footer' onClick={() => setIsTopNavigationBarOpen(false)}>Social</a>
      </div>
      <button className={buttonClass}>&#9776;</button>
    </div>
  )
};

export default TopNavigationBar;
