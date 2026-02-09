import React from "react";
import Link from "next/link";
import "../styles/footer.styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="first-row">
        <p>
          <b>BORING TECHNOLOGIES</b> is a software development company that
          specializes in creating innovative and efficient solutions for
          businesses and individuals.
        </p>
        <Link className="link medium" href={"/contact"}>
          Contact Us
        </Link>
      </div>
      <div className="second-row">
        <p>
          Website made with ❤️ by <b>Lola Raine</b>
        </p>
      </div>
    </div>
  );
}

export default Footer;
