const Footer = () => {
    return (  
        <div>
            <footer id="footer"    data-aos="fade-up"
       data-aos-duration="1500">
         <h1 className="text-center">Heaven's Bakery</h1>
        
         <div className="icons text-center">
             <i className="bx bxl-facebook"></i>
             <i className="bx bxl-google"></i>
             <i className="bx bxl-instagram"></i>
         </div>
         <div className="copyright text-center">
             &copy; Copyright <strong>Heaven's Bakery</strong> . All Rights Reserved
         </div>
         <div className="credite text-center">
             Designed By <a href="#"><span>PREETI</span></a>
         </div>
       </footer>
 
       <a href="#" className="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px"/></i></a>
        </div>
    );
}
 
export default Footer;