import Logo from '../../assets/Juiceme_Logo.svg'
import Menu from '../../assets/menu.svg'
import Flag1 from '../../assets/flag_1.svg'
import Flag2 from "../../assets/flag_2.svg";
import Flag3 from "../../assets/flag_3.svg";
import Flag4 from "../../assets/flag_4.svg";
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const countries = [
  { title: "Nigeria", flag: Flag4 },
  { title: "Eswatini", flag: Flag1, comingSoon: true },
  { title: "Uganda", flag: Flag2, comingSoon: true },
  { title: "Usa", flag: Flag3, comingSoon: true }
];

export default function Navbar({ link, handleLink }) {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  useEffect(() => {
    const menu = document.querySelector('.navbar-right ')
    menu.classList.toggle('active')
    window.scrollTo(0, 0)

  }, [link])

  const toggleMenu = () => {
    const menu = document.querySelector('.navbar-right ')
    menu.classList.toggle('active')
    window.scrollTo(0, 0)
  }

  return (
    <div className="navbar z-50">
      <div className="logo md:pl-24">
        <a onClick={() => handleLink("home")} href="#home">
          {" "}
          <img className="cursor-pointer" src={Logo} alt="Juiceme Logo" />
        </a>
        <img
          className="block md:hidden"
          src={Menu}
          alt="Menu Logo"
          onClick={() => toggleMenu()}
        />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a onClick={() => handleLink("employer")} href="#employer">
              Employer
            </a>
          </li>
          <li>
            <a onClick={() => handleLink("employee")} href="#employee">
              Employee
            </a>
          </li>
          <li>
            <a onClick={() => handleLink("about")} href="#about">
              About
            </a>
          </li>
        </ul>
        <button
          className="getStartedBtn"
          type="button"
          onClick={() => handleLink("contact")}
        >
          Get Started
        </button>
        <div className="relative">
          <button
            onClick={() => setShowCountryDropdown((prevState) => !prevState)}
            className="flagBtn flex items-center justify-center bg-[#FEEBE3]"
            type="button"
          >
            <img src={Flag4} alt="Flag Logo" />
          </button>
          <ul
            className={`countryDropdown py-3 bg-white absolute right-0 border border-[#EDEDED] flex flex-col ${
              showCountryDropdown ? "show" : null
            }`}
          >
            {countries.map(({ title, flag, comingSoon }) => (
              <li
                className={`flex gap-2 items-center ${comingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                key={title}
              >
                <img className="md:block hidden" src={flag} alt={title} />
                <p>{title}</p>
                {comingSoon && <span className='bg-primary p-1 text-white text-[0.75rem] font-medium rounded-[4px]'>Coming Soon</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
