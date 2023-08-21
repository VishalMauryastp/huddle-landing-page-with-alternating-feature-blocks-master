import React from "react";
import LandingSection from "./LandingSection";
import Service from "./Service";

import grow from "../assets/images/illustration-grow-together.svg";
import Flowing from "../assets/images/illustration-flowing-conversation.svg";
import Users from "../assets/images/illustration-your-users.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <main>
      <LandingSection />
      <section className="services setWidth">
        <Service
          imgSrc={grow}
          title="Grow Together"
          para="Generate meaningful discussions with your audience and build a strong, loyal community.
          Think of the insightful conversations you miss out on with a feedback form."
        />
        <Service
          imgSrc={Flowing}
          title="Flowing Conversations"
          para="You wouldn't paginate a conversation in real life, so why do it online? Our threads
          have just-in-time loading for a more natural flow."
        />
        <Service
          imgSrc={Users}
          title="Your Users"
          para="It takes no time at all to integrate Huddle with your app's authentication solution.
          This means, once signed in to your app, your users can start chatting immediately."
        />
      </section>
      <section className="contact boxShadow d-f ai-c jc-c fd-c">
        <h3>Ready To Build Your Community?</h3>
        <Button
          text="Get Started For Free"
          color=" hsl(193, 100%, 96%)"
          bg_color=" hsl(322, 100%, 66%)"
        />
      </section>
    </main>
  );
};

export default Hero;
