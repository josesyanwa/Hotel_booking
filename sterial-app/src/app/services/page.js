import Image from 'next/image';
import Link from 'next/link';

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
              <div data-aos="fade-up">
                <a href="https://www.youtube.com/watch?v=5n-e6lOhVq0" className="play-button align-items-center d-flex glightbox3">
                  <span className="icon-button me-3">
                    <span className="icon-play"></span>
                  </span>
                  <span className="caption">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section service-section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="heading-content" data-aos="fade-up">
                <h2>Featured <span className="d-block">Services</span></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                  <Link href="#" className="btn btn-primary">View All</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {/* Service items */}
                {serviceItems.map((item, index) => (
                  <div key={index} className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                    <div className="service-1">
                      <span className="icon">
                        <Image src={item.icon} alt="Image" className="img-fluid" width={50} height={50} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections... */}

    </>
  );
}

export default Services

const serviceItems = [
  {
    icon: '/images/svg/01.svg',
    title: 'Tourism',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: '/images/svg/02.svg',
    title: 'Package Tours',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: '/images/svg/03.svg',
    title: 'Travel Insurance',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: '/images/svg/04.svg',
    title: 'Airport Lounge Access',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];