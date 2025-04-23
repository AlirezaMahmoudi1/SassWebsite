import InstaIcon from '../assets/icons/insta.svg'
import XSocial from '../assets/icons/x-social.svg'
import TiktokIcon  from '../assets/icons/tiktok.svg'
import YoutubeIcon   from '../assets/icons/youtube.svg'

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">© 2024 Your Company, Inc. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li className="hover:text-white cursor-pointer transition-colors"><XSocial/></li>
            <li className="hover:text-white cursor-pointer transition-colors"><InstaIcon/></li>
            <li className="hover:text-white cursor-pointer transition-colors"><TiktokIcon/></li>
            <li className="hover:text-white cursor-pointer transition-colors"><YoutubeIcon/></li>

          </ul>
        </div>
      </div>

    </footer>
  );
};
