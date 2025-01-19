import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HomeJumbotronProps {
  title: string;
}

const HomeJumbotron: React.FC<HomeJumbotronProps> = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid home-jumbotron text-center pt-0 pb-5">
      <div className="container py-5">
        <Image
          className="img-fluid mt-5"
          src={"./watson-memorials-logo-white.svg"}
          alt={"Watson Memorials Logo"}
          width={400}
          height={400}
          layout=""
        />
        <h1 className="lead text-white mt-5 mb-0">{props.title}</h1>
        <Link className="btn btn-lg btn-outline-secondary mt-5" href={"/contact"}>
          Contact Us<span className="icon-angle-right ms-2"></span>
        </Link>
      </div>
    </div>
  );
};

export default HomeJumbotron;
