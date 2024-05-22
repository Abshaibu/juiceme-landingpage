import HeroImage from "../../assets/employee/employee_hero_image.png";
import JuicemeWallet from "../../assets/employee/juice_chatbot.png";
import Code from "../../assets/code.svg";
import Id from "../../assets/id.svg";
import { useNavigate } from "react-router-dom";
import Receipt from "../../assets/receipt.svg";
import Shield from "../../assets/shield.svg";
import WhatsAppIcon from "../../assets/whatsapp_icon.svg";

const customerCentric = [
  {
    title: " Secure and Private",
    subtext: "Your transactions are safeguarded with advanced encryption.",
    icon: Shield,
  },
  {
    title: "Convenient Bill Payments",
    subtext: "Easily settle bills without leaving WhatsApp.",
    icon: Code,
  },
  {
    title: "Instant Money Transfers",
    subtext: "Send money instantly to friends and family on WhatsApp.",
    icon: Id,
  },
  {
    title: "POS Withdrawals",
    subtext: "Access cash at any point of sale with just your phone.",
    icon: Receipt,
  },
];

export default function EmployeePage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section container">
        <div className="intro-texts">
          <h1>
            You worked, you get paid on your terms with Juiceme via WhatsApp{" "}
            <img
              className="inline-block ml-2"
              src={WhatsAppIcon}
              alt="whatsapp icon"
            />
          </h1>
          {/* <p className="pt-4 !mb-0">
            The pain of waiting for payday when you’ve already worked hard for
            your money is no more. Using WhatsApp you can now access your
            earnings on your terms any day before payday.
          </p> */}
          <p className="pt-4">
            The pain of waiting for payday when you’ve already worked hard for
            your money is no more. Using WhatsApp you can now turn workdays into
            paydays—get paid anytime!
          </p>
          <button onClick={() => navigate('/contact')} className="flex items-center justify-center text-white getStartedBtn">
            Refer your employer
          </button>
        </div>
        <div className="intro-img">
          <img src={HeroImage} alt="header-image" />
        </div>
      </section>
      <section className="overdraftSection">
        <div className="container">
          <h2>No more overdraft fees, late bills, & payday loans.</h2>
          <p>
            Your employer’s partnership with Juiceme ensures your financial
            security. It is not a loan so there is no interest. We will only
            charge a once-off withdrawal fee.
          </p>
        </div>
      </section>
      <section className="container walletSection">
        <label className="sectionLabel">juiceme wallet</label>
        <h2>Transforming WhatsApp into Your Securely Personal Finance Hub</h2>
        <div className="flex gap-4 items-center walletContainer">
          <div>
            <p className="walletHeaderText">Why Choose Juiceme Wallet?</p>
            <ul className="flex gap-4 flex-wrap mt-8 mb-16 justify-center">
              {customerCentric.map(({ title, subtext, icon }) => (
                <li className="flex gap-4 items-center" key={title}>
                  <span>
                    <img src={icon} alt={title} />
                  </span>
                  <p className="walletHeaderText">{title}</p>
                  <p>{subtext}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              className="walletImg"
              src={JuicemeWallet}
              alt="juiceme wallet"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="referCompanyFormContainer">
          <h2>Refer your company</h2>
          <p>
            Your company does not offer Juice yet? Just let us know who to
            contact in your organization.
          </p>
          <form className="referForm">
            <div>
              <label>
                Company Name
                <input
                  id="company_name"
                  name="company_name"
                  placeholder="Test Group Inc"
                />
              </label>
              <label>
                HR Name
                <input id="hr_name" name="hr_name" placeholder="James Kamden" />
              </label>
            </div>
            <label className="mt-3 mb-10 block">
              HR Email Address
              <input
                id="hr_email"
                name="hr_email"
                placeholder="jamescamden@testgroupinc.com"
              />
            </label>
            <button
              className="getStartedBtn text-white block ml-auto"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
