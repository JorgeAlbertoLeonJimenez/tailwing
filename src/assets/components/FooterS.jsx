import facebook from "../image/icons/facebook.svg"
import instagram from "../image/icons/instagram.svg"
import twitter from "../image/icons/twitter.svg"
import youtube from "../image/icons/youtube.svg"


export default function FooterS() {
  return (
    <div className="flex items-center justify-between w-[1180px] h-[104px]">
        <div>
            <ul className="flex gap-20 font-medium">
                <li><a href="">Home</a></li>
                <li><a href="">Category</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contac</a></li>
            </ul>
        </div>
        <div className="flex gap-10">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            
        </div>
    </div>
  )
}
