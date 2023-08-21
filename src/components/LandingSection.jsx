import React from "react";
import Button from "./Button";

const LandingSection = () => {
  return (
    <section className="landing_section d-f ai-c jc-c">
      <div className="landing d-f ai-c jc-sb">
        <div className="landing__text d-f jc-c fd-c">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button
            text="Get Started For Free"
            color="hsl(193, 100%, 96%)"
            bg_color=" hsl(322, 100%, 66%)"
          />
        </div>
        <div className="landing__image ">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
