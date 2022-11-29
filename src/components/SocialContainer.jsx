import fbIcon from '../assets/icon-facebook.svg'
import twIcon from '../assets/icon-twitter.svg'
import pnIcon from '../assets/icon-pinterest.svg'
import igIcon from '../assets/icon-instagram.svg'
export const SocialContainer = () => {
  return (
    <div className="flex space-x-6">
        <a href="">
            <img src={fbIcon} alt="fb" className="hover:invert-[79%] hover:sepia-[61%] hover:saturate-[464%] hover:hue-rotate-[130deg] hover:brightness-[89%] hover:contrast-[85%]" />
        </a>
        <a href="">
            <img src={twIcon} alt="fb" className="hover:invert-[79%] hover:sepia-[61%] hover:saturate-[464%] hover:hue-rotate-[130deg] hover:brightness-[89%] hover:contrast-[85%]" />
        </a>
        <a href="">
            <img src={pnIcon} alt="fb" className="hover:invert-[79%] hover:sepia-[61%] hover:saturate-[464%] hover:hue-rotate-[130deg] hover:brightness-[89%] hover:contrast-[85%]" />
        </a>
        <a href="">
            <img src={igIcon} alt="fb" className="hover:invert-[79%] hover:sepia-[61%] hover:saturate-[464%] hover:hue-rotate-[130deg] hover:brightness-[89%] hover:contrast-[85%]" />
        </a>
    </div>
  )
}
