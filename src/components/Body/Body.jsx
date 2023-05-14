import React from "react";
import  codeimg from "../../assets/carbon (2).svg"
import "./Body.css";

function Body() {
  return (
    <div className="container">
      <bdy className="bdy">
        <div className="tim">
          <h1 className="t1">Enjoy with Askam.ai</h1>
          <h2 className="t2">
            Create exceptional <br /> products using top-notch <br /> language
            skills.{" "}
          </h2>
          <h4 className="t3">
            {" "}
            AI is causing a transformation in the way we create,
            <br /> innovate, and interact with the world, rather than
            <br /> simply building impressive products.
          </h4>
        </div>
        <div className="card" id="card">
          <div className="inner-card">
            <h4 className="ask1">AskamAi Bot</h4>
            <h5 className="cl1">Hi there, @askamibot, can you suggest ways for me to improve my product design skills?</h5>
            <h5 className="cl2">Certainly! Here are some suggestions for improving your product design skills: <br/> <br/> 1.

Learn design principles: Familiarize <br/> yourself with the basic principles of <br/> design, such as color theory,<br/> typography, layout, and <br/>composition.<br/>
 2.
Study user experience (UX) design:<br/> UX design is an important aspect of<br/> product design, and involves <br/>creating products that are easy to</h5>
          </div>
        </div>
      </bdy>
      <div>
<div className="tire">
  <img src={codeimg} alt="" width="500px"/>
</div>
      </div>
      <div>
        <div>
          <h1 className="i1">Our Features</h1>

          <h3 className="l1">Say hello to our latest integration - the AI-powered WhatsApp! With advanced natural language processing and machine learning <br/> algorithms, it's now easier than ever to create and summarize content right within the app. From generating custom messages to <br/> summarizing lengthy documents, this cutting-edge technology does it all. </h3>
        </div>
      </div>
      
    </div>
  );
}

export default Body;
