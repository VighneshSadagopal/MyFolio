import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Header/Navbar";
import Project from "./components/Projects/Project";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <>
    
      <div className="App">
       <Navbar />
        <Banner />
        <div className="second-container">
          <About aboutme = {
            <>
            <h2>About Me</h2>
    <p>I am 22 years old techie who has being into business since 2021</p>

<p>My key goals have always been to learn and do things/tasks which are not that common and try to acheive the maximum of it once I undertook the tasks. And due to this I was able to learn few development enviroments over the years in my Educational and Professional Carrer</p>

<p>I Have pretty much good information about the LAMP Stack and currently I have developed my keen intrest in learning the MERN stack too. Also i have a prior experience of Basic and Advance PHP from the last Internship that I had. I have also be training under Content-Management-System(CMS) workflow and have a very good knowledge about Drupal CMS.</p>
<p>I have practised Drupal for more than a year now and also been very familiar with most of the modules and themes in Drupal. I have also gained the knowledge about PHP-Unit Testing and different Functional and Browser-Based Testing in the Drupal Environment.</p>

<p>I am currently working as a Full Stack Engineer at QED42 Engineering Pvt Ltd in Pune, India, where I am focused on developing Digital Experiences using Drupal CMS and Decoupled Drupal.</p></>
          }/>
          <Project />
          <div className='skill'>
          <Skill skillname = {'html'} skillno = {'80%'}/>
          <Skill skillname = {'Drupal'} skillno = {'100%'}/>
          <Skill skillname = {'Php'} skillno = {'90%'}/>
          <Skill skillname = {'lamp'} skillno = {'80%'}/>
          </div>
          
        </div>
        <Contact locationname = {'Pune,India'} mailid={'vighneshp65@gmail.com'}
          linkicon1 = {<TwitterIcon fontSize="medium"/>} 
          linkname1 = {'https://twitter.com/_vighnesh_vs'}
          linkicon2 = {<InstagramIcon fontSize="medium" />}
          linkname2 = {'https://www.instagram.com/vighnesh__.p/'}
          linkicon3 = {<LinkedInIcon fontSize="medium" />}
          linkname3 = {'https://www.linkedin.com/in/vighnesh-sadagopal-9b72721b5/'}
          />
<Copyright />
      </div>
      
    </>
  );
}

export default App;
