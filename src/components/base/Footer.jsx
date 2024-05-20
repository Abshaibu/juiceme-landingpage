import Logo4XL from '../../assets/juice_me_footer_logo.svg'
import Flag1 from '../../assets/flag_1.svg'
import Flag2 from '../../assets/flag_2.svg'
import Flag3 from '../../assets/flag_3.svg'
import Flag4 from "../../assets/flag_4.svg";

const footerLinks = [
  {
    title: "product",
    links: [
      { href: "employer", name: "employer" },
      { href: "employee", name: "employee" },
    ],
  },
  {
    title: "company",
    links: [
      { href: "about", name: "about us" },
      { href: "contact", name: "contact us" },
    ],
  },
  {
    title: "contact",
    links: [
      { href: "email", name: "Email: hello@juiceme.io" },
      { href: "phone", name: "Phone: +256 741 657 535" },
    ],
  },
  {
    title: "location",
    countries: [
      { countryName: "Nigeria", flag: Flag4 },
      { countryName: "Eswatini", flag: Flag1, comingSoon: true },
      { countryName: "Uganda", flag: Flag2, comingSoon: true },
      { countryName: "Usa", flag: Flag3, comingSoon: true },
    ],
  },
  {
    title: "legal",
    links: [
      { href: "terms", name: "terms & conditions" },
      { href: "privacy", name: "privacy policy" },
    ],
  },
];

const countries = [
  { countryName: "Nigeria", flag: Flag4 },
  { countryName: "Eswatini", flag: Flag1, comingSoon: true },
  { countryName: "Uganda", flag: Flag2, comingSoon: true },
  { countryName: "Usa", flag: Flag3, comingSoon: true },
];

export default function Foooter() {
  return (
    <>
      <div className="j_partner">
        <div className="j_partner-content max-w-[25rem] w-full mx-auto">
          <h3 className="text-white text-center">Partner with Juice Inc</h3>
          <p className="text-white my-3 text-center mb-5">
            Grow your business and become a truly employee centric organization.
          </p>
          <button className="py-[1.25em] block w-[11.5rem] font-[600] text-[0.875rem] bg-white hover:bg-primary hover:text-white rounded-[10px] mx-auto">
            Book a demo
          </button>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="innerContainer">
            {footerLinks.map(({ title, links, countries }) => (
              <div key={title}>
                <h5>{title}</h5>
                <ul>
                  {links?.map(({ href, name }) => (
                    <li key={name}>
                      <a href={href}>{name}</a>
                    </li>
                  ))}
                  {countries?.map(({ countryName, flag }) => (
                    <li key={countryName}>
                      <p>
                        <img src={flag} alt={countryName} />
                        {countryName}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
