import Logo4XL from '../../assets/juice_me_footer_logo.svg'
import Flag1 from '../../assets/flag_1.svg'
import Flag2 from '../../assets/flag_2.svg'
import Flag3 from '../../assets/flag_3.svg'
import Flag4 from "../../assets/flag_4.svg";

export default function Foooter() {
  return (
    <>
      <div className="j_partner">
        <div className="j_partner-content max-w-[25rem] w-full mx-auto">
          <h3 className="text-white text-center">
            Partner with Juice Inc
          </h3>
          <p className="text-white my-3 text-center mb-5">
            Grow your business and become a truly employee centric organization.
          </p>
          <button className="py-[1.25em] block w-[11.5rem] font-[600] text-[0.875rem] bg-white hover:bg-primary hover:text-white rounded-[10px] mx-auto">
            Book a demo
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content_list">
            <p>Product</p>
            <a href="#">Employer</a>
            <a href="#">Employee</a>
          </div>

          <div className="footer-content_list">
            <p>Company</p>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-content_list">
            <p>Contact</p>
            <span>
              Email:{" "}
              <a href="#" className="underline">
                hello@juiceme.io
              </a>
            </span>
            <span>
              Phone: <a href="#">+256 741 657 535</a>
            </span>
          </div>

          <div className="footer-content_list">
            <p>Location</p>
            <div className="flex my-1">
              <img className="mr-2" src={Flag4} alt="flag1" />
              <span>Nigeria</span>
            </div>
            <div className="flex my-1">
              <img className="mr-2" src={Flag1} alt="flag1" />
              <span>Eswatini</span>
            </div>
            <div className="flex my-1">
              <img className="mr-2" src={Flag2} alt="flag2" />
              <span>Uganda</span>
            </div>
            <div className="flex my-1">
              <img className="mr-2" src={Flag3} alt="flag3" />
              <span>USA</span>
            </div>
          </div>

          <div className="footer-content_list">
            <p>Legal</p>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <img className="mx-auto" width="90%" src={Logo4XL} alt="JuiceLogo4XL" />
      </footer>
    </>
  );
}
