import Link from "next/link";
import React from "react";

interface HomeCalloutSectionProps {
  id: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkPath: string;
}

const HomeCalloutSection: React.FC<HomeCalloutSectionProps> = (props) => {
  return (
    <section className="home-section mt-md-5 pt-md-5" id={props.id}>
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <div className="col-12 home-section-content">
            <h2 className="display-5 text-center text-white font-italic mb-3">{props.title}</h2>
            <p className="lead text-center text-white font-weight-light">{props.subtitle}</p>
            <p className="text-center mb-0">
              <Link href={props.linkPath} className="btn btn-lg btn-outline-primary">
                {props.linkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCalloutSection;
