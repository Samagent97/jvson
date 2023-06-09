import React from "react";
import "./styles/Home.css";
import chatbot from "./../assets/chatbot.png";
import codeblock from "./../assets/codeblock.png";
import arrow1 from "./../assets/arrow1.png";
import arrow2 from "./../assets/arrow2.png";
import footerImg from "./../assets/footerImage.png"


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="homeSectionFirst">
          <div className="homeSectionIntro">
            <h1>
              Experience cutting-edge AI at your fingertips.
            </h1>
            <h2>
            Obtain swift responses, engage in delightful discussions, request scrumptious recipes, check weather forecasts, and so much more. 
            </h2>
            <button className="btn ejoy">Explore Now!</button>
            <div className="homeCodeMapping">
              <img src={arrow2} alt="arrow2" className="arrow2Img" />
              <img src={codeblock} alt="codeblock" className="codeblock" />
              <img src={arrow1} alt="arrow1" className="arrow1Img" />
            </div>
          </div>
          <div className="homeSectionChatBot">
            <img src={chatbot} alt="chatbot" className="chatbotImg" />
            <img src={chatbot} alt="chatbot" className="chatbotImg2" />
          </div>
        </section>
        <footer>
          <img src={footerImg} alt="footer-image" />
        </footer>
      </div>
    </div>
  );
};

export default Home;
