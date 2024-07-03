const About = () => {
    return (
      <div className="container" id="about" data-aos="fade-up" data-aos-duration="1500">
        <h1>ABOUT US</h1>
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src="./image/about.png" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <p>
              It's great to hear you're interested in setting up a shop website!
              Here are a few lines of content you may consider including to give
              your website visitors more information about your business:
              <br />
              <br />
              Welcome message: Introduce your business and offer a warm welcome
              to your visitors.
              <br />
              Products and services: Highlight the types of cakes, cupcakes, and
              other baked goods you offer, as well as any specialties, custom
              orders, or special occasions that you cater to.
              <br />
              About us: Provide some background information on your business,
              including your staff, your story, and any notable achievements or
              accolades you've earned.
            </p>
            <div id="bt"><button>Read More...</button></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;