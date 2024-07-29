// components/OurServices.js
import Image from 'next/image';
import Link from 'next/link';

const OurServices = () => {
  return (
    <div className="section service-section-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>Our <span className="d-block">Services</span></h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                <Link href="/services" className="btn btn-primary">View All</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="service-1">
                  <span className="icon">
                    <Image src="/images/svg/01.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Tourism</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="service-1">
                  <span className="icon">
                    <Image src="/images/svg/02.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Package Tours</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="icon">
                    <Image src="/images/svg/03.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Travel Insurance</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="service-1">
                  <span className="icon">
                    <Image src="/images/svg/04.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Airport Lounge Access</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
