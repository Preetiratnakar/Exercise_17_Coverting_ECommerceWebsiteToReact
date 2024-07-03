const Gallery = () => {
    return (
       
        <div>
             <section id="gallary"    data-aos="fade-up"
    data-aos-duration="1500">
      <div className="container">
          <h1>OUR GALLERY</h1>
          <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Donuts</h3>
                      </div>
                      <img src="./image/o1.png" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Ice Cream</h3>
                      </div>
                      <img src="./image/o2.png" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Cup Cake</h3>
                      </div>
                      <img src="./image/o3.png" alt=""/>
                  </div>
              </div>
          </div>


          <div className="row" style={{ marginTop: '30px' }}   data-aos="fade-up"
          data-aos-duration="1500">
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Delicious Cake</h3>
                      </div>
                      <img src="./image/o4.png" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Chocolate Cake</h3>
                      </div>
                      <img src="./image/o5.png" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Slice Cake</h3>
                      </div>
                      <img src="./image/o6.png" alt=""/>
                  </div>
              </div>
          </div>
                    </div>
                   
    </section>
        </div>
      );
}
 
export default Gallery;