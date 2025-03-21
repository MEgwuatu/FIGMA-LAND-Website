import { useState } from "react";
import logo from '../assets/logo.png';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from '../Constant/index';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    // toggle menu:
    const handleMenuClick = () => {
        setMenuOpen((prevState) => !prevState);
      }


  return (
    <>
    
      <nav className='z-10 hidden text-white md:flex lg:flex justify-around fixed w-full'>
        <img src={logo} alt="logo" className='w-[12%] h-12 cursor-pointer mt-1' />
        <div className="flex items-center justify-between lg:w-[30%] md:w-[40%]">
        {navlinks.map((link) => (
            <div className="" key={link.name}>
                <a href="#" className='list-none'>{link.title}</a>
            </div>
        ))}
        </div>
        <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Login</button>
        </nav>\

        {/* mobile responsiveness */}
        <nav className='z-10 md:hidden flex justify-center w-[90vw] fixed'>
            <div className="pt-5 px-2 flex justify-around">

                <div className="w-[40%]">
                <img src={logo} alt="logo" className='w[100%] pt-2' />                
            </div>

            <button className='w-[130px] h-[45px] rounded-[3px] border-[1px] mt-2'>Login</button>

            <div className=" w-[10%] pt-3  pl-4" onClick={handleMenuClick}>
         {isMenuOpen ? (
           <AiOutlineClose size='40px' cursor="pointer" />
         ) : (
          <BiMenuAltRight  size='40px' cursor="pointer"   style={{color: '#fff'}} />
         )}

        </div>

        </div>

      </nav>


    </>
  )
}

export default Navbar;
