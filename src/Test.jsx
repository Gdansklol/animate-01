//rfc 
import React,{useState} from 'react';
import {motion} from "framer-motion";

// export default function Test() {
const Test = () => {

    const [open, setOpen]= useState(false);

    const variants = {
        visible: (i)=>({
        opacity:1, 
        x:100, 
        transition:{delay: i * 0.3},
        }),
        hidden: {opacity:0},
    }

    const menus =  [
      "meny_1", "meny_2", "meny_3", "meny_4",
    ]

  return (
    <div className='course'>
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {menus.map((menu, i)=>(
        <motion.li variants={variants} key={menu} custom={i}>{menu}</motion.li>
            ))}
        </motion.ul>
      
    </div>
  )
}

export default Test;