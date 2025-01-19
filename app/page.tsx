import HomeCalloutSection from "@/components/home-page/HomeCalloutSection";
import HomeJumbotron from "@/components/home-page/HomeJumbotron";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HomeJumbotron
        title={
          "Watson Memorials is a Darlington based Memorial Masons creating Headstones, Memorials & Gravestones across the North East of England."
        }
      />

      <HomeCalloutSection
        id={"details-are-important"}
        title={"Every Detail Is Important"}
        subtitle={
          "Each service we provide and at each stage in the process - Every Detail Is Important"
        }
        linkText={"Contact Us"}
        linkPath={"/contact"}
      />

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

      <section className="home-section mt-md-5 pt-md-5" id="churchYardMemorials">
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
                <h2 className="display-5">Churchyard Memorials &amp; Headstones</h2>
                <p className="text-slate-darker">
                  Churchyard Memorials are defined so by the material they are made from. Many
                  Churchyards require headstones to have a natural finish, this can be achieved with
                  granite if the surface is left in a honed state (not polished) however, it is more
                  common to see the use of traditional materials such as York stone, Portland stone
                  and slate. Other than the requirements of material finish, the design of the
                  headstone can be done so in the same way a lawn memorial would be in most cases.
                </p>
                <Link
                  href="/new-memorials/churchyard-memorials.html"
                  className="btn btn-lg btn-primary"
                >
                  View Online Brochure
                  <span className="icon-angle-right ms-2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section mt-md-5 pt-md-5" id="childrensMemorials">
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
                <h2 className="display-5">Children's Memorials &amp; Headstones</h2>
                <p className="text-slate-darker">
                  Watson Memorials have a range of children's style headstones that showcases the
                  near endless design opportunities. All consultations with Watson Memorials are
                  completely complimentary giving you as much time as you need to create the perfect
                  lasting memorial.
                </p>
                <a
                  href="/new-memorials/childrens-memorials.html"
                  className="btn btn-lg btn-primary"
                >
                  View Online Brochure
                  <span className="icon-angle-right ms-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section mt-md-5 pt-md-5" id="tabletMemorials">
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
                <h2 className="display-5">Tablet Memorials &amp; Plaques</h2>
                <p className="text-slate-darker">
                  Tablet memorials and wedges can be used individually or in conjunction with a
                  headstone or kerb memorial. You have options for flat, sloping and desk styles as
                  well as many of the finishes and design opportunities found with all other
                  memorials.
                </p>
                <a href="/new-memorials/tablets.html" className="btn btn-lg btn-primary">
                  View Online Brochure
                  <span className="icon-angle-right ms-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCalloutSection
        id={"additional-inscriptions"}
        title={"Add Wording To A Headstone"}
        subtitle={"For further information on adding wording to a headstone please read on..."}
        linkText={"Add Wording To A Headstone"}
        linkPath={"/contact"}
      />

      <section className="home-section mt-md-5 pt-md-5" id="vaseMemorials">
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
                <h2 className="display-5">Vase Memorials</h2>
                <p className="text-slate-darker">
                  Vase Memorials can be used individually, as well as in conjunction with a
                  headstone or kerb memorial. There are many different sizes and styles however
                  custom vases can be designed and crafted to suit your requirements.
                </p>
                <a href="/new-memorials/vases.html" className="btn btn-lg btn-primary">
                  View Online Brochure
                  <span className="icon-angle-right ml-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section mt-md-5 pt-md-5" id="kerbMemorials">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-lg-row-reverse">
            <div className="col-10 col-sm-8 col-md-8">
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
            <div className="col-12 col-sm-12 col-md-12 d-flex align-items-center home-section-content-col">
              <div className="home-section-content">
                <h2 className="display-5">Kerb Memorials &amp; Grave Surrounds</h2>
                <p className="text-slate-darker">
                  Kerb memorials and grave surrounds have been used for many years to personalise
                  grave spaces. They come in a variety of styles and configurations, Watson
                  Memorials will take the time to understand your requirements and design the
                  perfect personalised grave space for your family, friend or love one.
                </p>
                <a href="/new-memorials/kerbs.html" className="btn btn-lg btn-primary">
                  View Online Brochure
                  <span className="icon-angle-right ml-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCalloutSection
        id={"custom-designs"}
        title={"Bespoke Designs"}
        subtitle={
          "We can create bespoke designs for all sizes of memorials, please feel free to contact us with your ideas and we can help you create a lasting memorial."
        }
        linkText={"Contact Us"}
        linkPath={"/contact"}
      />

      <section className="home-section mt-5 pt-5" id="restorationServices">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-lg-row-reverse shadow-none p-0 pb-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="box-shadow">
                <div className="home-section-img">
                  <Image
                    className="img-fluid"
                    src={"/lawn-memorials-headstones.png"}
                    alt={"Lawn style headstone."}
                    width={281.5}
                    height={399.98}
                  />
                </div>
                <div className="p-3 text-center text-lg-left">
                  <h2 className="display-5 text-center text-lg-left">
                    Re-Fixing &amp; Straightening
                  </h2>
                  <p className="text-slate-darker text-center text-lg-left">
                    From time to time memorials of all sizes can have the need to be straightened.
                    This is usually due to soil settlement and requires very little adjustment.
                    There are of course times when older fixing methods have become loose and the
                    memorial needs further work. Watson Memorials can take care of all the re-fixing
                    on site and update all the fixing methods as required.
                  </p>
                  <a href="/services/re-fix-and-straighten.html" className="btn btn-lg btn-primary">
                    Read More
                    <span className="icon-angle-right ml-2"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="box-shadow">
                <div className="home-section-img">
                  <Image
                    className="img-fluid"
                    src={"/lawn-memorials-headstones.png"}
                    alt={"Lawn style headstone."}
                    width={281.5}
                    height={399.98}
                  />
                </div>
                <div className="p-3 text-center text-lg-left">
                  <h2 className="display-5 text-center text-lg-left">
                    Re-Painting &amp; Re-Gilding
                  </h2>
                  <p className="text-slate-darker text-center text-lg-left">
                    Due to memorials being exposed to all weather conditions, as well as in some
                    cases collecting sap from trees and sediment in rain, there is often a time when
                    the engraved lettering on the memorial, if painted or gilded, can become
                    discoloured or even begin to chip away. Watson Memorials can certainly
                    rejuvenate the lettering back to its original state.
                  </p>
                  <a href="/services/re-paint-and-re-gild.html" className="btn btn-lg btn-primary">
                    Read More
                    <span className="icon-angle-right ml-2"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="box-shadow">
                <div className="home-section-img">
                  <Image
                    className="img-fluid"
                    src={"/lawn-memorials-headstones.png"}
                    alt={"Lawn style headstone."}
                    width={281.5}
                    height={399.98}
                  />
                </div>
                <div className="p-3 text-center text-lg-left">
                  <h2 className="display-5 text-center text-lg-left">Cleaning &amp; Restoration</h2>
                  <p className="text-slate-darker text-center text-lg-left">
                    As Memorials age, they can become discoloured and weathered. This has varying
                    degrees of severity and is mainly effected by the material used to make the
                    Headstone, Memorial or Gravestone. Watson Memorials provides a thorough and
                    professional Cleaning and Restoration Service for all styles of Memorials,
                    Headstones and Gravestones.
                  </p>
                  <a
                    href="/services/cleaning-and-restoration.html"
                    className="btn btn-lg btn-primary"
                  >
                    Read More
                    <span className="icon-angle-right ml-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
