import './Navbar.css';
import { BiHomeAlt } from 'react-icons/bi';
import { RiOrderPlayFill } from 'react-icons/ri';
import { CgMusic } from 'react-icons/cg';
import { TbPlaylist } from 'react-icons/tb';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { TbPlaylistAdd } from 'react-icons/tb';
import { GiFruitBowl } from 'react-icons/gi';
import { TbSettings } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';

const Navbar = () => {
    return (
         <div className='navigation'>
            <img className='navLogo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />


            {/* Menu */}

            <ul className='menuList'>
            <li> <BiHomeAlt className='menuIcon'/>Home</li>
            <li> <RiOrderPlayFill className='menuIcon'/> Recently Played</li>
            <li> <CgMusic className='menuIcon'/> Collections</li>
            <li> <TbPlaylist className='menuIcon'/> Playlists</li>
            <li> <MdOutlineSubscriptions className='menuIcon'/> Subscription</li>
            <li><TbPlaylistAdd className='menuIcon'/> Create Playlist</li>
            <li><GiFruitBowl className='menuIcon'/> My Fruits</li>
            </ul>
            <hr/>


            {/* PlayList */}
            <ul className='ourPlaylist'>
               <li className='playlist'>My Playlist #1</li>
               <li>Chritmas Tracks</li>
               <li>Other Remix</li>
               <li>Release Radar</li>
           </ul>
            <hr />

        <ul className='menuList'>
              <li> <TbSettings className='menuIcon'/> Setting</li>
              <li> <TbLogout className='menuIcon'/> Log Out</li>
        </ul>

         </div>
    )
}

export default Navbar;