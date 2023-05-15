import React from "react";
import "./styles/Home.css";
import ChatBot from "../components/ChatBot";
import chatbot from "./../assets/chatbot.png";
import codeblock from "./../assets/codeblock.png";
import arrow1 from "./../assets/arrow1.png";
import arrow2 from "./../assets/arrow2.png";
import profile from "./../assets/profile.png";
const Home = () => {
  return (
    <div className="home">
      <section className="homeSectionFirst">
        <div className="homeSectionIntro">
          <button className="btn ejoy">Ejoy with Askami AI</button>
          <h1>Create exceptional products using top-notch language skills.</h1>
          <h2>
            AI is causing a transformation in the way we create, innovate, and
            interact with the world, rather than simply building impressive
            products.
          </h2>
          <div className="homeJoinUs">
            <div className="homeJoinUsImgs">
              <img src={profile} alt="profile1" />
              <img src={profile} alt="profile2" className="homeJoinHide" />
              <img src={profile} alt="profile3" className="homeJoinHide" />
              <img src={profile} alt="profile4" className="homeJoinHide" />
              <div className="homejoinText">30+</div>
            </div>
            <p className="homeJoinUsText">
              Join us <a href="mailto:@akami.ai">@akami.ai</a>
            </p>
          </div>
          <div className="homeCodeMapping">
            <img src={arrow2} alt="arrow2" className="arrow2Img" />
            <img src={codeblock} alt="codeblock" className="codeblock" />
            <img src={arrow1} alt="arrow1" className="arrow1Img" />
          </div>
        </div>
        <div className="homeSectionChatBot">
          <img src={chatbot} alt="chatbot" className="chatbotImg" />
        </div>
      </section>
      <section className="homeSectionFeatures">
        <header className="homeSectionFeaturesHeader">
          <h1>Our Features</h1>
        </header>
        <article className="homeSectionFeaturesText">
          <p>
            Say hello to our latest integration - the AI-powered WhatsApp! With
            advanced natural language processing and machine learning
            algorithms, it's now easier than ever to create and summarize
            content right within the app. From generating custom messages to
            summarizing lengthy documents, this cutting-edge technology does it
            all.
          </p>
        </article>
      </section>
      <section className="homeSectionFocus">
        <header className="homeSectionFocusHeader">
          <h1>
            Our focus is on developing secure, high-performing language models
            that cater to the needs of enterprises.
          </h1>
        </header>
        <article className="homeSectionFocusText">
          <p>
            To ensure exceptional support and data security, our
            high-performance language models can be tailored to fit public,
            private, or hybrid clouds. We offer customizable options for our
            language models, allowing you to choose the best fit for your
            specific needs.
          </p>
        </article>
      </section>
      <section className="homeSectionComponent">
        
      </section>
    </div>
  );
};

export default Home;
