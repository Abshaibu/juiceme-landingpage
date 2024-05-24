import HeroImage from "../../assets/employer/heroImg.png";
import MoreImage from "../../assets/employer/more_from_juiceme_image.png";
import JuicePortal from "../../assets/employer/juice_portal_image.png";
import Values from "../../components/values";
import Industires from "../../components/industries";
import Card from "../../assets/employer/card.svg";
import Wallet from "../../assets/employer/wallet.svg";
import NotAllowed from "../../assets/employer/not_allowed.svg";
import UserCheck from "../../assets/employer/user_check.svg";
import Ewa from "../../assets/employer/wage_access_image.png";
import NoCash from "../../assets/employer/no_money.svg";
import Quote from "../../assets/employer/quote.svg";
import Cash from "../../assets/employer/cash.svg";
import SendSlip from "../../assets/employer/send_slips.svg";
import RecordHistory from "../../assets/employer/record_history.svg";
import MessageIcon from "../../assets/employer/message.svg";
import Security from "../../assets/employer/security.svg";
import Cutlery from "../../assets/employer/cutlery.svg";
import Shop from "../../assets/employer/shop.svg";
import ConstructionWorkerIcon from "../../assets/employer/construction_worker.svg";

const values = [
  {
    title: "Sign Up",
    subtext:
      "Employer add employees in the Juiceme Portal and set the percentage employees can withdraw.",
    icon: UserCheck,
  },
  {
    title: "Withdraw",
    subtext:
      "Employees can withdraw accrued salary at any time using WhatsApp and are charged a once-off withdrawal fee. ",
    icon: Card,
  },
  {
    title: "Deduct",
    subtext:
      "Withdrawn amount is automatically deducted from the employee’s salary at payday and remitted to Juiceme.",
    icon: NotAllowed,
  },
  {
    title: "Balance",
    subtext:
      "Employee receives balance of withdrawn amount from salary at the end of the month.",
    icon: Wallet,
  },
];

const offerings = [
  { icon: SendSlip, text: "No changes to your payroll system" },
  { icon: NoCash, text: "No cost to the employer" },
  { icon: Cash, text: "No impact to your cashflow" },
];

const moreFromJuiceme = [
  {
    heading: "Communication",
    icon: MessageIcon,
    text: "Get critical information and surveys delivered to you employees from their favourite app, WhatsApp.",
  },
  {
    heading: "Send payslips",
    icon: SendSlip,
    text: "Save cost from printing payslips and deliver secure payslips via WhatsApp.",
  },
  {
    heading: "Time Attendance",
    icon: RecordHistory,
    text: "Make it easier to track employee time attendance using WhatsApp.",
  },
];

const testimonials = [
  {
    text: "Juice has completely transformed our HR operations, offering a captivating transition to the convenience of WhatsApp. It's revolutionized the way we work.",
    icon: Shop,
    testifier: "Retail Shop",
  },
  {
    text: "Thanks to Juice, we've bid farewell to manual labor in tracking attendance and printing payslips. This innovation not only saves time but also cuts costs significantly.",
    icon: Cutlery,
    testifier: "Restaurant",
  },
  {
    text: "Previously, absenteeism was a struggle. Now, employees are motivated to come to work knowing they can access their salary anytime they need.",
    icon: ConstructionWorkerIcon,
    testifier: "Construction Company",
  },
  {
    text: "Our partnership with Juiceme has attracted a surge in job applications, highlighting its necessity in today's workforce.",
    icon: Security,
    testifier: "Security Company",
  },
];

export default function EmployerPage() {
  return (
    <>
      <section className="hero-section container">
        <div className="intro-texts">
          <h1>Attract Top Talent to Your Team.</h1>
          <p className="pt-4 !mb-0">
            When employees are financially unwell, productivity, engagement and
            retention suffer—and so does your business. Juiceme takes the
            financial stress out of work, so your team can focus on what matters
            most.
          </p>
          <button className="flex items-center justify-center text-white getStartedBtn">
            Request a Demo
          </button>
        </div>
        <div className="intro-img">
          <img src={HeroImage} alt="header-image" />
        </div>
      </section>
      <section className="overdraftSection">
        <div className="container">
          <h2 className="max-w-[40rem]">Industries We Serve</h2>
          <Industires />
        </div>
      </section>
      <section className="ewa container">
        <div>
          <img
            className="max-w-[20.5rem] w-full"
            src={Ewa}
            alt="payday image"
          />
        </div>
        <div className="ewaTexts">
          <h2>What is Earned Wage Access?</h2>
          <p>
            Earned Wage Access allows employees to access their earned wages
            before the traditional pay cycle. For example, if an employee has
            worked for 10 days, they can access a percentage of those 10 days'
            earnings. This helps employees avoid payday loans and other harmful
            financial products, ensuring financial stability and enhancing
            workplace performance.
          </p>
        </div>
      </section>
      <div className="container !my-32">
        <h3 className="max-w-[50rem] w-full mx-auto text-center mb-8">
          Offering earned wage access to your employees using Juiceme technology
          is super easy:
        </h3>
        <ul className="flex gap-8 flex-wrap justify-center">
          {offerings.map(({ text, icon }) => (
            <li className="w-[10rem] flex flex-col items-center" key={text}>
              <span>{<img src={icon} alt={text} />}</span>
              <p className="text-center">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <Values values={values} title="How Earned Wage Access Works" />
      </div>
      <section className="container juicePortal">
        <label className="text-[#FC6326] text-[1.125rem] mb-3 font-[500] inline-block">
          The Juiceme Portal
        </label>
        <div className="flex gap-8 flex-wrap flexContainerOne justify-between">
          <div className="texts">
            <h2>Easy implementation, go live within minutes</h2>
            <p>
              We don't replace your current solution; instead, we enhance it by
              seamlessly integrating your HR/payroll system with Juiceme or
              providing Juiceme as a powerful standalone solution.
            </p>
            <p>
              Our system can integrate with any payroll and HR system via API’s
              or SFTP file exchange.
            </p>
            <p>
              Highly secured, cloud-based platform integrated with WhatsApp to
              help you manage some of your biggest pain points: productivity,
              retention, absenteeism, and communication.
            </p>
          </div>
          <div>
            <img src={JuicePortal} alt="juice portal" />
          </div>
        </div>
        <div className="flex gap-8 flex-wrap-reverse flexContainerTwo justify-between">
          <div>
            <img
              className="max-w-[32.5rem] w-full"
              src={MoreImage}
              alt="man holding multiple items"
            />
          </div>
          <div className="texts">
            <h2>There is more from the Juiceme Portal for companies</h2>
            <p className="mb-8">
              Discover More with the Juiceme Portal. Empower Your Workforce and
              Streamline HR and Payroll Processes.
            </p>
            <ul className="flex gap-[1.5rem] gap-y-12 flex-wrap justify-center">
              {moreFromJuiceme.map(({ icon, heading, text }) => (
                <li key={heading}>
                  <span>
                    <img src={icon} alt={heading} />
                  </span>
                  <p className="text-[#FC6326] text-[1.125rem] font-[600] mb-2">
                    {heading}
                  </p>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container testimonialsSection">
        <label className="sectionLabel">testimonials</label>
        <h2>Here is what industries say about us</h2>
        <ul className="flex gap-4 flex-wrap">
          {testimonials.map(({ testifier, icon, text }) => (
            <li className="flex flex-col justify-between" key={text}>
              <div>
                <img src={Quote} alt="quote" />
                <p className="mt-6 mb-16">"{text}"</p>
              </div>
              <div className="flex gap-3 items-center">
                <span>
                  <img src={icon} alt={testifier} />
                </span>
                <p className="font-[600]">{testifier}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}