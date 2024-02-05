import React,{useContext} from 'react';
import "./flex.css";
import { AppContext } from './context';

const Flex = () => {

  const {flexDirection ,justifyContent,alignItems} = useContext(AppContext);

  const styles = {
    "height":"100%",
    "width":"100%",
    "display":"flex",
    "flexDirection":flexDirection,
    "justifyContent":justifyContent,
    "alignItems":alignItems
  }
  return (
    <div style={styles}>
      <div className='inside-box'>1</div>
      <div className='inside-box'>2</div>
      <div className='inside-box'>3</div>
    </div>
  )
}

export default Flex;