import React, { useState } from "react";
import { Heading } from "../common/Heading";

const About = () => {
  const defaultStyle = {
    backgroundColor: "wheat",
    borderRadius: "4px",
    textAlign: "center",
    margin: "0 auto",
    padding: "20px",
    width: "25%",
    transition: "background-color 0.3s ease",
  };

  const [hoverStyle, setHoverStyle] = useState(defaultStyle);

  const handleMouseOver = () => {
    setHoverStyle({
      ...defaultStyle,
      backgroundColor: "red", // Change this color to your desired hover color
    });
  };

  const handleMouseOut = () => {
    setHoverStyle(defaultStyle);
  };

  return (
    <>
      <section className="price" style={{ padding: "50px" }}>
        <Heading
          title="About Us"
          desc="Welcome to Urated Design — your hub for curated design resources, graphics, and website templates. We're passionate about delivering top-notch assets to elevate your design projects."
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              Welcome to Gosto - Your Design Oasis
            </span>
            <p>
              At Gosto, we're not just a platform; we're your go-to destination
              for curated design resources, graphic assets, and website
              templates. Our mission is to provide a haven for designers,
              whether you're a seasoned professional or just starting on your
              creative journey. Explore a world of possibilities with our
              carefully selected collection of design elements that cater to
              diverse styles and industries.
            </p>
          </div>

          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              Our Vision: Crafting Excellence in Design
            </span>
            <p>
              Step into a realm where design meets excellence. At GOSTO , our
              vision is to empower individuals and businesses to elevate their
              visual identity. We believe that great design has the power to
              inspire, captivate, and communicate effectively. That's why we've
              meticulously curated a range of resources that embody creativity,
              innovation, and the latest design trends.
            </p>
          </div>

          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              Unveiling the Designers Behind the Scenes
            </span>
            <p>
              Meet the passionate minds driving the creativity at [Your Website
              Name]. Our team of dedicated designers and curators are the
              heartbeat of this platform. With a shared commitment to quality
              and aesthetics, we work tirelessly to bring you a collection that
              stands out in the crowded design landscape. Get to know the faces
              and stories behind the artistry that fuels our platform
            </p>
          </div>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              Quality Assurance: Elevating Your Design Standards
            </span>
            <p>
              When you choose GOSTO, you're choosing quality. Our commitment to
              excellence extends beyond mere curation. Every graphic and website
              template undergoes rigorous quality assurance to ensure it meets
              the highest standards. We take pride in being a reliable resource
              for designers who seek nothing but the best for their projects.
            </p>
          </div>

          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              The GOSTO Community: Your Design Tribe
            </span>
            <p>
              Join a thriving community of designers and creatives who call
              GOSTO their design tribe. Whether you're looking for inspiration,
              seeking advice, or simply want to connect with like-minded
              individuals, our community is the place to be. Share your
              creations, collaborate on projects, and immerse yourself in a
              supportive environment that fosters growth and creativity.
            </p>
          </div>

          <div
            style={hoverStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span style={{ padding: "20px", display: "block" }}>
              Your Design Journey Starts Here: Explore, Create, Inspire
            </span>
            <p>
              Embark on a design journey like never before with GOSTO. Whether
              you're a solo designer, part of a creative agency, or a business
              owner in need of a visual identity overhaul, we have the tools and
              resources to make your vision a reality. Explore our curated
              selection, unleash your creativity, and let GOSTO be the catalyst
              for your next design masterpiece. Your journey to design
              excellence starts here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
