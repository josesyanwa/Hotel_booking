import Image from 'next/image';
import Link from 'next/link';

const Blog =() => {
  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/hero_3.jpg" alt="Image" layout="fill" objectFit="cover" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">Blog</h1>
              <p className="mb-5" data-aos="fade-up">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="post-entry">
                <Image src="/images/img_7.jpg" alt="Image" width={500} height={350} className="img-fluid mb-4" />
                <span className="date">Apr. 14th, 2022</span>
                <h2><Link href="/single">Why Staying at Home is Important</Link></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><Link href="/single" className="btn btn-sm btn-outline-primary">Read More</Link></p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="post-entry">
                <Image src="/images/img_3.jpg" alt="Image" width={500} height={350} className="img-fluid mb-4" />
                <span className="date">Apr. 14th, 2022</span>
                <h2><Link href="/single">Why Staying at Home is Important</Link></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><Link href="/single" className="btn btn-sm btn-outline-primary">Read More</Link></p>
              </div>
            </div>

            {/* Add more blog post entries here */}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="custom-pagination">
                <span>1</span>
                <Link href="#" className="active">2</Link>
                <Link href="#">3</Link>
                <Link href="#">4</Link>
                <Link href="#">5</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog