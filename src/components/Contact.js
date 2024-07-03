const Contact = () => {
    return (  
        <div className="container" id="contact"    data-aos="fade-up"
      data-aos-duration="1500">
        <h1>CONTACT US</h1>
        <div className="row">
            <div className="col-md-4 py-1 py-md-0">
                <div className="form-group">
                    <input type="text" className="form-control" id="usr" placeholder="Name"/>
                </div>
            </div>
            <div className="col-md-4 py-1 py-md-0">
                <div className="form-group">
                    <input type="email" className="form-control" id="eml" placeholder="Email"/>
                </div>
            </div>
            <div className="col-md-4 py-1 py-md-0">
                <div className="form-group">
                    <input type="number" className="form-control" id="phn" placeholder="Phone"/>
                </div>
            </div>
            
        </div>
        <div className="form-group">
            <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
        </div>
        <div id="messagebtn"><button>Send Message</button></div>
      </div>
    );
}
 
export default Contact;