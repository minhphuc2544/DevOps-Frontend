import React, { useState, useRef, useEffect} from 'react'
import '../styles/SlidingTabs.css'
import musicIcon from '../assets/icons/music-icon.svg'


function SlidingTabs({ tabs }) {

  const [active, setActive] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const node = tabsRef.current[active];
    if (node) {
      setIndicatorStyle({
        left: node.offsetLeft + 'px',
        with: node.offsetWidth + 'px'
      });
    }
  }, [active, tabs]); 


  return (
    <div className='sliding-tabs'>
      {tabs.map((tab, i) => (
        <div 
          key={i}
          className={`tab-item ${i === active ? 'acitve' : ''}`}
          ref={el => tabsRef.current[i] = el}
          onClick={() => setActive(i)}
        >
          <img src={musicIcon} alt="" className='tab-icon' />
          <span>{tab}</span>
        </div>
      ))}
      <div className='tab-indicator' style={indicatorStyle} />
    </div>
  );
}

export default SlidingTabs;