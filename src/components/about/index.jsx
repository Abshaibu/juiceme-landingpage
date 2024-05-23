import { useNavigate } from 'react-router-dom';
import HeroImage from '../../assets/about/about_us_hero_image.png'
import Values from '../../components/values'
import Suitcase from "../../assets/about/suitcase.svg";
import CustomerSupport from "../../assets/about/customer_support.svg";
import Partner from "../../assets/about/partner.svg";
import Rectangle from "../../assets/about/rectangle.svg";
import Quote from "../../assets/about/quote.svg";
// import Code from '../../assets/code.svg';
// import Id from "../../assets/id.svg";
// import Receipt from "../../assets/receipt.svg";
// import Shield from "../../assets/shield.svg";
import Team1 from "../../assets/about/team/1.png";
import Team2 from "../../assets/about/team/2.png";
import Team3 from "../../assets/about/team/3.png";
import Team4 from "../../assets/about/team/4.png";

const customerCentric = [
  {
    title: "Workforce will be added in the next 10 years",
    boldText: "1 Billion",
  },
  {
    title:
      "Working in blue-collar jobs: manufacturing, security, logistics, textile, retail, agriculture, construction",
    boldText: "80%",
  },
  {
    title: "Average monthly salary and under a monthly payroll",
    boldText: "Less than $150 ",
  },
  {
    title: "Is the dominate social media app",
    boldText: "WhatsApp",
  },
];

const values = [
  {
    title: "Customer obsession",
    subtext:
      "At Juiceme we put our customer at the center of everything we do. We vigorously work to earn their trust.",
      icon: CustomerSupport 
  },
  {
    title: "Simplify",
    subtext:
      "Juiceme comes up with a creative way to solve and innovate our products",
    icon: Rectangle
  },
  {
    title: "Partnerships",
    subtext:
      "At the core of Juiceme, we foster genuine partnerships to deliver our commitment ",
      icon: Partner
  },
  {
    title: "Accountable",
    subtext:
      "At Juiceme we act as owners, we challenge each other as peers, we learn and build to deliver on our mission. ",
    icon: Suitcase
  },
];

const teamMembers = [
  { name: "Sandile Dlamini", role: "Founder, CEO", img: Team1 },
  { name: "Sandile Dlamini", role: "Chief Operations Officer", img: Team2 },
  { name: "Sandile Dlamini", role: "Advisor, HR", img: Team3 },
  { name: "Sandile Dlamini", role: "Advisor, Finance", img: Team4 },
];

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section container">
        <div className="intro-texts">
          <h1>About us</h1>
          <p className="intro-text">
            <strong>"Boss, can I have some juice?"</strong> one of our dedicated
            sales agents asked. "I don't even have money for transport tomorrow,
            boss. Things are bad," he continued. "It's just the second week of
            the month! If I give you money, it means we won't have money to
            restock tomorrow, and we won't sell anything," I reluctantly
            explained.
          </p>
          <p>
            I've seen firsthand the toll of monthly payroll on our sales agents
            while running my first company, a last mile distributing company.
            With limited capital, providing an advance salary seemed like a
            threat to our operations, but rejecting their requests resulted in
            lower sales, decreased productivity, and morale until payday. It
            left them vulnerable to predatory credit lenders, perpetuating a
            cycle of financial hardship.
          </p>
          <p>This is the very reason we started Juiceme.</p>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center text-white getStartedBtn"
          >
            Join us
          </button>
        </div>
        <div className="intro-img">
          <img src={HeroImage} alt="header-image" />
        </div>
      </section>
      <section className="container landscapeSection">
        <label className="sectionLabel">africa business landscape</label>
        <h2>Embracing Customer-Centric Solution</h2>
        <ul className="flex gap-8 flex-wrap justify-center my-16 mx-auto">
          {customerCentric.map(({ title, boldText }) => (
            <li className="flex gap-1 items-center" key={title}>
              <span>{boldText}</span>
              <p className='text-center'>{title}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="valuesContainer">
        <div className="container">
          <label className="sectionLabel">our vision</label>
          <img
            className="block mx-auto w-[2.625rem] mt-8 mb-5"
            src={Quote}
            alt="quote"
          />
          <h2>
            We envision a world where financial freedom is a reality for all
            employees, regardless of their paycheck schedule.
          </h2>
          <Values values={values} title="Our values" />
        </div>
      </section>
      <section className="container ">
        <h2 className='mb-8'>Our Team</h2>
        <ul className="flex gap-4 flex-wrap justify-center mb-32 gap-y-8">
          {teamMembers.map(({ name, role, img }) => (
            <li
              className="p-5 rounded-[8px] border border-[#FFECE5] max-w-[17.3rem] flex-1 min-w-[15rem]"
              key={role}
            >
              <img src={img} alt={role} />
              <p className="text-[#000] font-[700] mt-5">{name}</p>
              <p className="text-[#000]">{role}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
