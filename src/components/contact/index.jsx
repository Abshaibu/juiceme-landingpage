import ContactImage from '../../assets/get_started.png'

export default function ContactPage() {
  return (
    <>
      <section className="container pt-28 contactUsSection">
        <h1>Partner with Juiceme and make anyday payday for your Employees</h1>
        <div className="flex gap-8 justify-between flex-wrap-reverse">
          <div className='flex-1'>
            <img src={ContactImage} alt="get-started" />
          </div>
          <form className="referForm">
            <div>
              <label>
                First name
                <input id="first_name" name="first_name" placeholder="James" />
              </label>
              <label>
                Last name
                <input id="last_name" name="last_name" placeholder="Kamden" />
              </label>
            </div>
            <label className="block">
              Work email
              <input
                id="email"
                name="email"
                placeholder="jamescamden@testgroupinc.com"
              />
            </label>
            <label className="block">
              Website
              <input
                id="website"
                name="website"
                placeholder="www.testgroupinc.com"
              />
            </label>
            <div>
              <label>
                Company size
                <input
                  id="company_size"
                  name="company_size"
                  placeholder="10 - 50"
                />
              </label>
              <label>
                Country
                <input id="country" name="country" placeholder="Uganda" />
              </label>
            </div>
            <label>
              Anything else
              <textarea
                name="others"
                id="others"
                placeholder="Add any other details here"
              ></textarea>
            </label>
            <button
              className="getStartedBtn text-white block mt-12 mx-auto"
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
