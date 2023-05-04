import './Hero.css'
import HeroImg from './HeroBG.jpg'
import { ImPlay3 } from 'react-icons/im';
import { HiShare } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className="heroImg">
        <img src={HeroImg} alt="HeroBG" /> 

{/* Text */}
    <div className="heroTxt">
        <h2 className="heroTxtOne">Ikako Talavadze</h2>
        <p className="heroTxtTwo">43M Monthly Listeners</p>
        <button className="heroTxtBtn">Follow</button>
    </div>

{/* Buttons */}
    <div className="Button">
        <div className='playBtn'> <ImPlay3  className='btnIcon'/> </div>
        <div className="shareBtn"> <HiShare className='shareIcon'/></div>
        <div className="downloadBtn"> <MdFileDownload className='downloadIcon'/></div>
    </div>

    
       <div className="Profile">
           <h4 className='profileTxt'>54k Followers </h4>
           <BsPersonCircle className='profileIcon'/> 
       </div>
     </div>
    )
}

export default Hero;