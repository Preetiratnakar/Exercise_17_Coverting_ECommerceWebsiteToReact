const Home = () => {
    return (  
    

        <div>
        {/* // <!-- home section --> */}

        <div className="home">
            <div className="content" data-aos="zoom-out-right">
                <h3>Delicious
                    <br/>Cakes Bakery
                </h3>
                <h2>for <span id="every">every </span> Category  <span className="changecontent"></span></h2><br/>
                <h4><p>“From our ovens to your heart , freshly baked”</p></h4>
                   
                <a href="#" className="btn">Order Now</a>
            </div>
            <div className="img"  data-aos="zoom-out-left">
                <img src="./image/background.png" alt=""/>
            </div>
        </div>
        {/* <!-- home section end --> */}

      {/* <!-- top cards --> */}
      <div className="container" id="box"    data-aos="fade-up"
      data-aos-duration="1500">
        <div className="row">
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box1.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box2.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box3.jpg" alt=""/>
                </div>
            </div>
        </div>
      </div>
      {/* <!-- top cards end --> */}

      {/* <!-- banner --> */}
        <div className="banner"    data-aos="fade-up"
        data-aos-duration="1500">
            <div className="content">
                <h3>Delicious Cake</h3>
                <h2>UPTO 50% OFF</h2>
             
                <div id="btnorder"><button>Order Now</button></div>
            </div>
            <div className="img">
                <img src="./image/banner-background.png" alt=""/>
            </div>
        </div>
            {/* <!-- banner end --> */}
            


            </div>
            
    );
}
 
export default Home;