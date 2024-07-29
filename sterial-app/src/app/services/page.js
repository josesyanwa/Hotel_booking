import Image from 'next/image';
import Link from 'next/link';
import OurServices from "@/components/OurServices/OurServices"

const Services = () => {
  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/hero_2.jpg" alt="Image" className="img-fluid" width={1920} height={1080} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">Services</h1>
              <p className="mb-5" data-aos="fade-up">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              {/* <div data-aos="fade-up">
                <a href="https://www.youtube.com/watch?v=5n-e6lOhVq0" className="play-button align-items-center d-flex glightbox3">
                  <span className="icon-button me-3">
                    <span className="icon-play"></span>
                  </span>
                  <span className="caption">Watch Video</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
        
      <OurServices />
      

      {/* Additional sections... */}

    </>
  );
}

export default Services

