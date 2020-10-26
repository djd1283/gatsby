import React from "react"
import './index.css'
import { Link } from "gatsby"
import { SocialIcon } from 'react-social-icons'
import keyboard_background from '../images/keyboard.png'
import red_mountain_background from '../images/red_mountain.jpg'
import mountain_background from '../images/mountain.jpg'
import dark_wood_background from '../images/dark_wood.jpg'
import wood_background from '../images/wood.jpg'
import blue_background from '../images/blue_background.jpg'
import trees_background from '../images/trees.jpg'

function GitHubLink(props) {
  //return <a href="https://www.github.com/djd1283"> Github </a>;
  return <SocialIcon url="https://www.github.com/djd1283" />
}

function LinkedInLink(props) {
  //return <a href="https://www.linkedin.com/in/david-donahue-77685591/"> LinkedIn </a>;
  return <SocialIcon url="https://www.linkedin.com/in/david-donahue-77685591/" />
}

function GoogleScholarLink(props) {
  //return <a href="https://www.linkedin.com/in/david-donahue-77685591/"> LinkedIn </a>;
  return <SocialIcon url="https://scholar.google.com/citations?user=Ja0Peu8AAAAJ&hl=en" />
}



function EmailLink(props) {

  let style = {fontSize: '40px'}

  return <p style={style}> david_donahue@student.uml.edu </p>
}

function UpperBar(props) {
  //styles = {backgroundColor: 'yellow'};
  //return <div className="my-box" style={styles}> David Donahue </div>;

  var bar_style = {
    margin: '0px',
    width: '100%',
    height: '100px',
    backgroundColor: 'yellow',
    display: 'inline-block',
    float: 'right'
  };

  var strip_style = {
    margin: '0px',
    width: '100%',
    height: '10px',
    backgroundColor: 'white',
    display: 'inline-block',
  };

  // var horiz = {
  //   float: 'left',
  //   marginTop: '2%',
  //   marginLeft: '3%',
  //   marginRight: '10%',
  //   width: '25%'
  // };
  var horiz = {
    float: 'left',
    marginTop: '2%',
    width: '25%',
    display: 'inline-block',
  };

  var link_style = {
    color: 'black',
    textDecoration: 'none',
    float: 'center',
    fontFamily: "Courier New, Times, serif",
    fontSize: '30px',
    marginLeft: '10%'
  };

  return (
    <div>
     <div style={bar_style}>
       <div style={horiz}><a style={link_style} href="#about_me"> About Me </a></div>
       <div style={horiz}><a style={link_style} href="#personal_projects"> Qualifications </a></div>
       <div style={horiz}><a style={link_style} href="#research_projects"> Projects </a></div>
       <div style={horiz}><a style={link_style} href="#contact"> Contact </a></div>
     </div>
     <div style={strip_style}></div>
    </div>
  );
}

function IntroSection(props) {

  let text_style = {color: 'white', margin: '3%'};

  let desc_style = {color: 'white', margin: '3%', fontSize: '30px',
                    marginRight: '20%', lineHeight: '110%'}

  let section_style = {
    backgroundImage: "url(" + red_mountain_background + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '1000px',
    overflow: 'hidden',
  }

  var horiz = {
    float: 'left',
    textAlign: 'left',
    marginLeft: '3%'
  };

  return (
  <div style={section_style} className='lowerPage'>
    <body>
      <h1 style={text_style}> Hi, I am David. </h1>

      <p style={desc_style}> Here is a place to learn about me and the projects I am interested in!
          Scroll onward for relaxing stock photos. </p>

      <div style={horiz}><GitHubLink /></div>
      <div style={horiz}><LinkedInLink /></div>
      <div style={horiz}><GoogleScholarLink /></div>
    </body>
  </div>
  );
}

function AboutMeSection(props) {
  let text_style = {color: 'white', margin: '3%'};

  let desc_style = {color: 'white', margin: '3%', fontSize: '30px',
                    marginRight: '20%', lineHeight: '110%'}

  let section_style = {
    backgroundImage: "url(" + dark_wood_background + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '1000px',
    overflow: 'hidden',
  }

  var strip_style = {
    margin: '0px',
    width: '100%',
    height: '10px',
    backgroundColor: 'white',
    display: 'inline-block',
  }

  return (
    <div id="about_me">
      <div style={strip_style}></div>
      <div style={section_style}>
        <h1 style={text_style}> About Me </h1>
        <p style={desc_style}> {"I a master's graduate from the University of Massachusetts Lowell (graduated September 2020). Last year, I received a double degree \
        in Electrical Engineering and Computer Science. I do research in the field of deep learning for Natural Language Processing (NLP). \
        In my free time I enjoy hiking and puns."} </p>
      </div>
    </div>
  )
}

function AchievementSection(props) {
  let head_style = {color: 'white', margin: '3%'};

  let desc_style = {color: 'white', marginLeft: '3%', fontSize: '30px',
                    marginRight: '20%', lineHeight: '110%'}

  let text_style = {color: 'white', marginLeft: '3%', fontSize: '20px',
                    marginRight: '20%', lineHeight: '110%'}

  let section_style = {
    backgroundImage: "url(" + blue_background + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    overflow: 'hidden',
  }

  var strip_style = {
    margin: '0px',
    width: '100%',
    height: '10px',
    backgroundColor: 'white',
    display: 'inline-block',
  }

  var link_style = {
    color: 'white',
    textDecoration: 'bold'
  }

  return (
    <div id="personal_projects">
      <div style={strip_style}></div>
      <div style={section_style}>
        <h1 style={head_style}> Qualifications </h1>

        <h2 style={desc_style}> University of Massachusetts Lowell </h2>

        <p style={text_style}>
        Degree in Electrical Engineering and Computer Science (2015-2019)
        <ul>
          <li>GPA: 3.970 / 4.0 </li>
          <li> Honors College </li>
          <li> {"Recipient of Dean's Scholarship"} </li>
        </ul>

        {"Master's Degree in Computer Science (2019-2020)"}
        <ul>
          <li> GPA: 4.0 / 4.0 </li>
          <li> Algorithms </li>
          <li> Machine Learning </li>
          <li> Advanced Database Systems </li>
          <li> Advanced Social Computing </li>
          <li> Computer and Network Security </li>
          <li> Computer Graphics </li>
        </ul>
        </p>

        <h2 style={desc_style}> Text Machine Lab - Research Assistant </h2>

        <p style={text_style}>
          <ul>
            <li> Advisor: Dr. Anna Rumshisky </li>
            <li> 3+ years of research experience (2016-present)</li>
            <li> 1 workshop paper, 1 coauthor, additional arxiv </li>
            <li> Gave two lectures at the <a style={link_style} href="http://deephack.me/ciss2"> 2nd Conversational Intelligence Summer School </a>  (lectures 11, 12)</li>
          </ul>
        </p>

        <h2 style={desc_style}> Internship at Microsoft Research Montreal (summer 2018) </h2>
        <p style={text_style}>
          <ul>
            <li> Mentor: Kaheer Suleman </li>
            <li> Utilized Generative Adversarial Networks for text generation with Transformer networks </li>
            <li> On winning team of internal MS Montreal hackathon, prize trip to Punta Cana :) </li>
          </ul>
        </p>

        <h2 style={desc_style}> UML IEEE Student Branch (2015-2019)</h2>
        <p style={text_style}>
          <ul>
            <li> Served as Secretary, Vice President and President </li>
            <li> As President, directed branch to hold personal development and recreational events </li>
            <li> Company talks: Analog Devices, Energy Initiatives Group, Raytheon, MathWorks and more </li>
            <li> Helped with recruitment of volunteers for EECE department events </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

function ResearchProjectSection(props) {
  let head_style = {color: 'white', margin: '3%'};

  let desc_style = {color: 'white', marginLeft: '3%', fontSize: '30px',
                    marginRight: '20%', lineHeight: '110%'}

  let text_style = {color: 'white', marginLeft: '3%', fontSize: '20px',
                    marginRight: '20%', lineHeight: '110%'}

  let section_style = {
    backgroundImage: "url(" + wood_background + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    overflow: 'hidden',
  }

  var strip_style = {
    margin: '0px',
    width: '100%',
    height: '10px',
    backgroundColor: 'white',
    display: 'inline-block',
  }

  return (
    <div id="research_projects">
      <div style={strip_style}></div>
      <div style={section_style}>
        <h1 style={head_style}> My Projects </h1>

        <h2 style={desc_style}> Injecting Hierarchy With U-Net Transformers </h2>



        <a style={text_style} href="https://arxiv.org/abs/1910.10488"> Paper </a><a style={text_style} href="https://github.com/text-machine-lab/HierarchicalTransformer"> Github </a>

        <p style={text_style}> Recently, the Transformer architecture has dominated language generation tasks such as machine translation.
        However, the Transformer operates by performing per-token attention operations to produce contextual representations.
        It is unclear whether these representations are able to store high-level information about input language structure.
        In this work we introduce a hierarchical variant called the U-Net Transformer, capable of forming hierarchical representations, and
        outperform the vanilla Transformer on several datasets. </p>

        <h2 style={desc_style}> Humorhawk at Semeval-2017 Task 6: Mixing Meaning
        and Sound for Humor Recognition </h2>


        <a style={text_style} href="https://www.aclweb.org/anthology/S17-2010/"> Paper </a><a style={text_style} href="https://github.com/text-machine-lab/ht_wars"> Github </a>

        <p style={text_style}> Of all language tasks attempted by the latest recurrent neural networks, humor recognition stands as one of the
        more difficult challenges with a shortage of coherent datasets. However, the recent dataset constructed from the Televison series "#HashtagWars"
        provides a fair opportunity to tackle this task. In this work, we develop a specialized humor recognition system which judges which tweet
        in a pair is more humorous. Our system was top-performing on subtask A of the Semeval-2017 competition. </p>

        <h2 style={desc_style}> Adversarial Text Generation Without Reinforcement Learning </h2>

        <a style={text_style} href="https://arxiv.org/abs/1810.06640"> Paper </a><a style={text_style} href="https://github.com/text-machine-lab/cic/"> Github </a>

        <p style={text_style}> When observing the output of recurrent neural networks (RNN) on the conversational dialogue task, it is often observed
        that generated responses are grammatical but nonsensical. We hypothesize that a major problem of RNN language generation is the next-word prediction
        task, which may lack long-term coherence. We create a Generative Adversarial Network architecture to allow high-level modeling of the output text. </p>

        <h2 style={desc_style}> Honors Project: Memory-Augmented Recurrent Networks for Dialogue Coherence </h2>

        <a style={text_style} href="https://arxiv.org/abs/1910.10487"> Paper </a><a style={text_style} href="https://github.com/text-machine-lab/dialogue-pytorch"> Github </a>

        <p style={text_style}> Honors project as part of the completion of the undergrad Honors College requirements. In this work, we apply memory networks
        for the purpose of neural dialogue generation. Recurrent neural networks (RNN) such as the Long-Short Term Memory Network (LSTM) have difficulty
        storing information over longer time scales. We augment existing RNN models with multiple variants of memory module for improved generation. </p>

        <h2 style={desc_style}> Class Project: Label-Conditioned Next-Frame Video Generation with Neural Flows </h2>

        <a style={text_style} href="https://arxiv.org/abs/1910.11106"> Paper </a><a style={text_style} href="https://github.com/djd1283/glowvideogen"> Github </a>

        <p style={text_style}> Computer vision class project. Generative Adversarial Networks (GAN) have achieved state-of-the-art in multiple image generation tasks.
        However, in local experiments we observe the GAN to be unstable for small batch sizes and large data spaces. The recent Glow model, a normalizing flow (NF),
        trains with a non-cyclic maximum likelihood objective and so does not suffer such instability. We apply conditional Glow models for short video generation.
        Result: our experiments confirm the neural flow architectures outlined are unable to model the intricacies of video. </p>

        <h2 style={desc_style}> Adversarial Decomposition of Text Representation </h2>

        <a style={text_style} href="https://arxiv.org/abs/1808.09042"> Paper </a>

        <p style={text_style}> Co-author on work by Dr. Alexey Romanov. Model which converted a given text representation into both a "meaning" and
        "style" vector. Allowed unaligned translation of a given text from normal to Shakespearian English by swapping out the appropriate style vector.
        I contributed to the initial idea and performed language model evaluation to measure fluency of output sentences. </p>

        <h2 style={desc_style}> Capstone Project: Semantic Segmentation of Oblique Aerial Images </h2>

        <p style={text_style}> Capstone Team: Leith Namou, Chris McKenna, Blaine McMahon, Me </p>

        <p style={text_style}> Project for capstone project, no paper provided. Over two semesters, our capstone group planned, prototyped and configured
        a DeepLab v3+ architecture (from existing repo) for the semantic segmentation of oblique aerial photographs. We partnered with Collins Aerospace
        (formerly UTC Aerspace Systems) to ensure the product was well documented with an interface usable by Collins.</p>

        <h2 style={desc_style}> Stock Prediction </h2>

        <p style={text_style}> Stay Tuned! Stock prediction on both technical and article indicators using Alpaca trading API and Polygon historical API. </p>

      </div>
    </div>
  )
}

function ContactSection(props) {

  let text_style = {color: 'white', margin: '3%'};

  let desc_style = {color: 'white', margin: '3%', fontSize: '30px',
                    marginRight: '20%', lineHeight: '110%'}

  let section_style = {
    backgroundImage: "url(" + mountain_background + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '1000px',
    overflow: 'hidden',
  }

  var horiz = {
    float: 'left',
    marginRight: '3%',
    textAlign: 'left',
    margin: '3%'
  };

  var strip_style = {
    margin: '0px',
    width: '100%',
    height: '10px',
    backgroundColor: 'white',
    display: 'inline-block',
  }

  return (
  <div id="contact">
    <div style={strip_style}></div>
    <div style={section_style}>
      <body>
        <h1 style={text_style}> Contact </h1>
        <p style={desc_style}> Feel free to contact me anytime at this email address: </p>
        <div style={desc_style}><EmailLink /></div>
      </body>
    </div>
  </div>
  );
}

const IndexPage = () => (
<div>
  <UpperBar/>
  <IntroSection/>
  <AboutMeSection/>
  <AchievementSection/>
  <ResearchProjectSection/>
  <ContactSection/>
</div>
)

export default IndexPage
