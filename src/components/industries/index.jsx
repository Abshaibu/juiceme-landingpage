import Tractor from '../../assets/mission/tractor.svg'
import Construction from "../../assets/mission/construction-worker.svg";
import GradHat from "../../assets/mission/grad-hat.svg";
import EntranceSign from "../../assets/mission/entrance-sign.svg";
import Bed from "../../assets/mission/bed.svg"; 
import Logistics from "../../assets/mission/logistics.svg";
import Factory from "../../assets/mission/factory.svg"; 
import Cutlery from "../../assets/mission/cutlery.svg";
import Shop from "../../assets/mission/shop.svg";
import Padlock from "../../assets/mission/padlock.svg";
import Phone from "../../assets/mission/phone.svg";
import More from "../../assets/mission/more.svg";


const industries = [
  { name: "Agriculture", icon: Tractor },
  { name: "Construction", icon: Construction },
  { name: "Education", icon: GradHat },
  { name: "Hospitality", icon: EntranceSign },
  { name: "Hotels", icon: Bed },
  { name: "Logistics", icon: Logistics },
  { name: "Manufacturing", icon: Factory },
  { name: "Restaurants", icon: Cutlery },
  { name: "Retail", icon: Shop },
  { name: "Security", icon: Padlock },
  { name: "Telesales", icon: Phone },
  { name: "And lots more", icon: More },
];

export default function Industries({heading = false}) { 
    return (
      <div className='container'>
            {heading && <label className="sectionLabel !mb-8">
                working across industries
            </label>}
            <ul className='flex gap-y-5 flex-wrap justify-center mx-auto max-w-[71rem] w-full'>
                {industries.map(({ name, icon }) => <li className='flex w-[10.187rem] items-center gap-2
                ' key={name}><img src={icon} alt={name} /> <p>{name}</p></li>)}
            </ul>
      </div>
    );
}