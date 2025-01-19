import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid home-jumbotron text-center pt-0 pb-5">
        <a
          id="jumbotron-call-now"
          className="btn btn-lg btn-block text-white text-center d-sm-none border-0"
          href="tel:01325802565"
        >
          Call Now
        </a>

        <div className="container py-5">
          <Image
            className="img-fluid mt-5"
            src={"./watson-memorials-logo-white.svg"}
            alt={"Watson Memorials Logo"}
            width={400}
            height={400}
            layout=""
          />
          <h1 className="visually-hidden">
            Watson Memorials - Headstone, Memorials and Gravestones in Darlington and the
            Surrounding Areas
          </h1>
          <p className="lead text-white mt-5 mb-0">
            Watson Memorials is a Darlington based Memorial Masons creating Headstones, Memorials &
            Gravestones across the North East of England.
          </p>
          <a className="btn btn-lg btn-outline-secondary mt-5" href="contact.html">
            Contact Us<span className="icon-angle-right ms-2"></span>
          </a>
        </div>
      </div>
      <section className="home-section mt-md-5 pt-md-5" id="details-are-important">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-column">
            <div className="col-12 home-section-content">
              <h2 className="display-5 text-center text-white font-italic mb-3">
                Every Detail Is Important
              </h2>
              <p className="lead text-center text-white font-weight-light">
                Each service we provide and at each stage in the process -{" "}
                <strong>Every Detail Is Important</strong>
              </p>
              <p className="text-center mb-0">
                <a href="/contact.html" className="btn btn-lg btn-outline-primary">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section mt-md-5 pt-md-5" id="lawnMemorials">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-lg-row-reverse">
            <div className="col-8 col-sm-8 col-md-6 col-lg-3">
              <div className="home-section-img">
                <Image
                  className="img-fluid"
                  src={"/lawn-memorials-headstones.png"}
                  alt={"Lawn style headstone."}
                  width={281.5}
                  height={399.98}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-9 d-flex align-items-center home-section-content-col">
              <div className="home-section-content">
                <h2 className="display-5">Lawn Memorials &amp; Headstones</h2>
                <p className="text-slate-darker">
                  Lawn memorials are most widely known as standard headstones, this is because they
                  have been the most chosen style of headstone for many years. They have become
                  known as lawn memorials because of their placement within sections of Cemeteries
                  and Churchyards known as lawn sections. A lawn memorial or headstone comprises of
                  a headpiece and base, both of which are fully customisable within the Cemetery or
                  Churchyards rules and regulations.
                </p>
                <a href="/new-memorials/lawn-memorials.html" className="btn btn-lg btn-primary">
                  View Online Brochure
                  <span className="icon-angle-right ms-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
