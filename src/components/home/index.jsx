import Industries from "../../components/industries";
import HeroImage from '../../assets/home/home_header_image.png'
import WhatsAppIcon from "../../assets/whatsapp_icon.svg";
import JuicemeDashboardImage from "../../assets/home/juiceme_dashboard_image.png";
import PeakProductivityImage from "../../assets/home/peak_productivity_image.png";
import ElevateMoraleImage from "../../assets/home/elevate_morale_image.png";
import AttractTalentImage from "../../assets/home/attract_talent_image.png";
import RetenEngagementImage from "../../assets/home/engage_retention_image.png";
import SoftwareAddon from "../../assets/home/software_addon_image.png";
import Shield from "../../assets/shield.svg";
import Id from "../../assets/id.svg";
import Code from "../../assets/code.svg";
import Receipt from "../../assets/receipt.svg";

const solutions = [
  {
    title: "Highly secured, cloud-based platform connected to WhatsApp",
    icon: Shield,
  },
  {
    title: "Easy Integration",
    icon: Code,
  },
  {
    title: "Controlled by the employer",
    icon: Id,
  },
  {
    title: "Zero cost to the employer",
    icon: Receipt,
  },
];

const stats = [
  {
    figure: "92",
    subtext: "Monthly retention, employees requesting their earned salaries",
  },
  {
    figure: "76",
    subtext: "Increase in job application",
  },
  {
    figure: "47",
    subtext: "Reduction in staff turnover",
  },
  {
    figure: "0",
    subtext: "Default rates",
  },
];

const leaderCountContent = [
  {
    title: "Unlock Peak Productivity and Motivation",
    subtext:
      "Give employees the flexibility to access their earned wages when they need them, boosting motivation and productivity.",
    img: PeakProductivityImage,
  },
  {
    title: "Elevate Workplace Morale",
    subtext:
      "By removing financial barriers and offering financial freedom, companies see noticeable improvement in workplace morale and overall job satisfaction.",
    img: ElevateMoraleImage,
  },
  {
    title: "Attract Top Talent",
    subtext:
      "Offering Earned Wage Access demonstrates commitment to employee financial wellness, making companies a magnet for talent.",
    img: AttractTalentImage,
  },
  {
    title: "Boost Employee Engagement and Retention",
    subtext:
      "Happy, financially secure employees are more likely to stay and thrive in any company reducing the stress and cost of constantly hiring and training new employees.",
    img: RetenEngagementImage,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section container">
        <div className="intro-texts">
          <h1>
            Do not wait for <span className="">payday</span> to access money you
            already worked for.
            <span className="hidden">Track time attendance</span>
            <span className="hidden">Process pay slips</span>
            <span className="hidden">Send critical information</span>
            <br />
          </h1>
          <p className="intro-text my-2">
            Juiceme gives employees access to their salary for the days they
            worked any time before payday via WhatsApp
            <img src={WhatsAppIcon} alt="whatsapp-icon" />
          </p>
          <button className="flex items-center justify-center text-white getStartedBtn">
            Get Started
          </button>
        </div>
        <div className="intro-img">
          <img src={HeroImage} alt="header-image" />
        </div>
      </section>
      <section className="juicemePlatform">
        <div className="container">
          <div className="textsContainer">
            <label className="sectionLabel">juiceme platform</label>
            <h2>Redefining the Employer-Employee Relationship</h2>
            <p>
              Employees now have the opportunity to choose when and how they
              receive their pay with Juiceme’s Earned Wage Access. No effort is
              required from employers. When payday becomes any day, workers gain
              the financial flexibility to manage unforeseen expenses
              effectively.{" "}
            </p>
            <button
              className="flex items-center justify-center text-white getStartedBtn"
              type="button"
            >
              Book a Demo
            </button>
          </div>
          <div className="flex items-center justify-center mt-14">
            <img src={JuicemeDashboardImage} alt="juiceme dashboard" />
          </div>
        </div>
      </section>
      <Industries heading={true} />
      <section className="container addonSection">
        <label className="sectionLabel">a software addon-on</label>
        <h2>Works with all HR and Payroll System</h2>
        <p>
          Juiceme is an HR & Payroll add-on, compatible with any system to
          enhance its functionalities.{" "}
          <strong>But also, it can work as a stand-alone solution.</strong>
        </p>
        <div className="flex justify-center gap-8 items-center mt-14 flex-wrap-reverse">
          <div>
            <img src={SoftwareAddon} alt="woman operating her phone" />
          </div>
          <ul>
            {solutions.map(({ title, icon }) => (
              <li className="flex items-center" key={title}>
                <span>
                  <img src={icon} alt={title} />
                </span>{" "}
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container businessLeaderSection">
        <h2>Business Leaders Count on Juiceme</h2>
        <div className="flex gap-12 justify-center flex-wrap">{leaderCountContent.map(({ title, subtext, img }) => <div className="card" key={title}>
          <h3>{title}</h3>
          <p>{subtext}</p>
          <img src={img} alt={title} />
        </div>)}</div>
      </section>
      <div className="container justify-center flex flex-wrap statsContainer">
        {stats.map(({ figure, subtext }) => (
          <div key={subtext}>
            <p>{figure}</p>
            <p>{subtext}</p>
          </div>
        ))}
      </div>
    </>
  );
}
