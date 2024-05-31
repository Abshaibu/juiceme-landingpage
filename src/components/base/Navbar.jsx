import Logo from '../../assets/Juiceme_Logo.svg'
import Menu from '../../assets/menu.svg'
import Close from "../../assets/x-close.svg";
import Flag1 from '../../assets/flag_1.svg'
import Flag2 from "../../assets/flag_2.svg";
import Flag3 from "../../assets/flag_3.svg";
import Flag4 from "../../assets/flag_4.svg";
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'

const countries = [
  { title: "Nigeria", flag: Flag4 },
  { title: "Eswatini", flag: Flag1 },
  { title: "Uganda", flag: Flag2 },
  { title: "USA", flag: Flag3}
];

const headerLinks = ['employer', 'employee', 'about']

export default function Navbar() {
  const navigate = useNavigate();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleBodyClick = useCallback(
    (e) => {
      if (!e.target.classList.contains("flagBtn")) {
        setShowCountryDropdown(false);
      }
    },
    []
  );

  // useEffect(() => {
  //   const menu = document.querySelector(".navbar-right ");
  //   menu.classList.toggle("active");
  //   window.scrollTo(0, 0);
  // }, [link]);

  const toggleMenu = () => {
    const menu = document.querySelector(".navbar-right ");
    menu.classList.toggle("active");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("click", handleBodyClick);

    return () => {
      window.removeEventListener("click", handleBodyClick);
    };
  }, [handleBodyClick]);


  return (
    <header className="flex items-center">
      <div className="container">
        <Link
          onClick={() => {
            setShowMobileNav(false);
          }}
          to="/"
        >
          {" "}
          <img src={Logo} alt="logo" />
        </Link>
        <nav
          className={showMobileNav ? "showNav" : null}
          onClick={() => {
            setShowMobileNav(false);
          }}
        >
          <ul>
            {headerLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={`/${item}`}
                  onClick={() => {
                    setShowMobileNav(false);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="headerNavBtnContainer flex gap-8">
            <button
              className="getStartedBtn"
              type="button"
              onClick={() => navigate("/contact")}
            >
              get started
            </button>
            <div className="relative flex gap-4 desktopRightBtnContainer">
              <button
                aria-label="country dropdown button"
                onClick={() =>
                  setShowCountryDropdown((prevState) => !prevState)
                }
                className="flagBtn flex items-center justify-center bg-[#FEEBE3]"
                type="button"
              >
                <img
                  className="pointer-events-none"
                  src={Flag4}
                  alt="Nigeria logo"
                />
              </button>
              <ul
                className={`countryDropdown py-4 bg-white px-4 absolute right-0 border border-[#EDEDED] items-start flex flex-col ${
                  showCountryDropdown ? "show" : null
                }`}
              >
                {countries.map(({ title, flag, comingSoon }) => (
                  <li
                    className={`flex gap-2 items-center ${
                      comingSoon ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    key={title}
                  >
                    <img className="md:block hidden" src={flag} alt={title} />
                    <p>{title}</p>
                    {comingSoon && (
                      <span className="bg-primary p-1 text-white text-[0.75rem] font-medium rounded-[4px]">
                        Coming Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="hidden gap-6 items-center mobileRightBtns">
          {showMobileNav && (
            <button
              onClick={() => setShowMobileNav((prevState) => !prevState)}
              type="button"
            >
              {" "}
              <img src={Close} alt="close icon" />
            </button>
          )}
          <div
            className={`relative gap-4 ${!showMobileNav ? "flex" : "hidden"}`}
          >
            <button
              aria-label="country dropdown button"
              onClick={() => setShowCountryDropdown((prevState) => !prevState)}
              className="flagBtn flex items-center justify-center bg-[#FEEBE3]"
              type="button"
            >
              <img
                className="pointer-events-none"
                src={Flag4}
                alt="Nigeria logo"
              />
            </button>
            <ul
              className={`countryDropdown py-4 bg-white px-4 absolute right-0 border border-[#EDEDED] items-start flex flex-col ${
                showCountryDropdown ? "show" : null
              }`}
            >
              {countries.map(({ title, flag, comingSoon }) => (
                <li
                  className={`flex gap-2 items-center ${
                    comingSoon ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  key={title}
                >
                  <img src={flag} alt={title} />
                  <p>{title}</p>
                  {comingSoon && (
                    <span className="bg-primary p-1 text-white text-[0.75rem] font-medium rounded-[4px]">
                      Coming Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            className={showMobileNav ? "hidden" : "block"}
            type="button"
            onClick={() => setShowMobileNav((prevState) => !prevState)}
          >
            <img src={Menu} alt="Menu Logo" />
          </button>
        </div>
      </div>
    </header>
  );
}
