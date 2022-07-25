import React from 'react'
import Card from '../components/Card'
import Static from '../components/Static'
import "../css/Home1.css"

const Home1 = () => {
  return (
    <>
        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100"  />
            {/* <img alt="..." className="d-block w-100" src="https://i.postimg.cc/c4nL7ZFW/3.jpg"/> */}
                    <div className="carousel-caption" >
                        <h5 className="animated bounceInRight" style={{animationDelay:"1s", textAlign:"left",  color:"#163269"}}>Web Design</h5>
                        <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay:"2s"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p className="animated bounceInRight" style={{animationDelay:"3s"}}><a href="#">Learn More</a></p>
                    </div>
                </div>
                <div className="carousel-item">
        <div className="e-block w-100"  />
        {/* <img alt="..." className="d-block w-100" src="https://i.postimg.cc/c4nL7ZFW/3.jpg"/> */}
                    <div className="carousel-caption">
                        <h5 className="animated bounceInRight" style={{animationDelay:"1s", textAlign:"left", color:"#163269"}}>Graphics Design</h5>
                        <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay:"2s"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p className="animated bounceInRight" style={{animationDelay:"3s"}}><a  href="#">Learn More</a></p>
                    </div>
                </div>
                <div className="carousel-item">
        <div className="f-block w-100"  />
                    {/* <img alt="..." className="d-block w-100" src="https://i.postimg.cc/c4nL7ZFW/3.jpg"/> */}
                    <div className="carousel-caption">
                        <h5 className="animated bounceInRight" style={{animationDelay:"1s",textAlign:"left", color:"#fff"}}>Photography</h5>
                        <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay:"2s"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p className="animated bounceInRight" style={{animationDelay:"3s"}}><a href="#">Learn More</a></p>
                    </div>
                </div>
            </div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
        </div>

        <Static/>

        <div style={{display:"flex",color:"red",height:"85vh"}}>
            <div style={{width:"40%"}}>
                <img height='100%' src='https://media.istockphoto.com/photos/rear-view-of-mature-teacher-giving-a-lecture-in-a-classroom-picture-id1093522584?k=20&m=1093522584&s=612x612&w=0&h=LyvIpcDljddRCO953kjNvjdkkEEP44W3QOG8OBN52Bo=' />
            </div>
            <div className='bottom-static' style={{width:"60%", backgroundColor:"black"}}>
              <div className='bottom-static-text'>
                <h2 style={{color: "#fff", fontWeight:"bold"}}> Apply for Admisssion</h2>
                <h4 style={{color: "#3db166", marginTop:"20px"}}>Applications are now open</h4>
                <p style={{color: "#93a4c7", fontSize:"20px",marginTop:"20px"}}>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
            
                <a href="#" type="button" className="btn btn-success btn-lg" style={{backgroundColor:"#3db166", color:"#fff", marginTop:"20px"}}>Apply Now</a>  
                {/* <button type="button" class="btn btn-success">Apply Now</button>   */}
              </div>         
            </div>
        </div>

        <Card/>
    </>
  )
}

export default Home1