import './Activity.css'
import { IoIosArrowDropleft } from 'react-icons/io';
import { FiBell } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const Activity = () => {
    return (
      <div className="Activity">
      
      <IoIosArrowDropleft  className='appBtn'/> 


      <form>
         <input type="text" placeholder='What You Wish?' className='navTxt'/>
    </form>


        <FiBell  className='bellBtn'/>
        <CgProfile  className='profile'/>
      </div>
    )
}
export default Activity;