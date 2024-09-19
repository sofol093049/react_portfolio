
import './App.css'


function App() {
 

  return (
    <>
      <Test_div_head></Test_div_head>
      <Test_div_main></Test_div_main>
      <Footer_div></Footer_div>
    </>
  )
}

export default App

function Test_div_head(){
  const myelement = (
    <header>
    <nav>
        <h3 className="nav-title">
            MA<span className="common">R</span>K
        </h3>
        <ul>
            <li>Portfolio</li>
            <li>Blog</li>
            <li><a><button className="btn-primary">
                        Hire Me
                    </button>

                </a></li>
        </ul>
    </nav>
    <div className="banner">
        <div className="banner-content">
            <h4 className="banner-greetings">Hi, i am</h4>
            <h1 className="banner-title">
                Mary Hardy
            </h1>
            <p className="banner-description">Shot what able cold new see hold.Friendly as an betrayed formerly he.
                Morning
                because as to society behaved moments.</p>
            <button className="btn-primary">Download cv</button>
            <button className="btn-primary">Contact</button>
        </div>

        <img className="banner-profile-pic" src="hardy.png" alt="picture of hardy"/>
    </div>

</header>
  );
 return (myelement);
}

function Test_div_main(){
  const myelement2 = (
   <main>
        <section className="about secondary-bg">
            <h3 className="section-title">About Me</h3>
            <p className="section-description">I, m a designer & developer with a passion for web design. I enjoy developing
                simple, clean and slick
                websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs
                while working with me. Delivering work within time and budget which meets clients requirements in our
                mata.</p>


            <div className="about-items">
                <div className="about-item">
                    <p className="item-title">Name:</p>
                    <p className="item-description">Mary Hardy</p>
                </div>
                <div className="about-item">
                    <p className="item-title">Email:</p>
                    <p className="item-description">info@gmail.com</p>
                </div>
                <div className="about-item">
                    <p className="item-title">Date of Birth</p>
                    <p className="item-description">11 November 1987</p>
                </div>
                <div className="about-item">
                    <p className="item-title">Form:</p>
                    <p className="item-description">Los Angeles, USA</p>
                </div>
            </div>
        </section>

        <section className="skills">
            <h3 className="section-title text-center">
                what I do
            </h3>
            <p className="section-description text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptatum consequuntur placeat ex a
                vero laboriosam quis omnis. Alias perferendis vel esse accusamus atque! Recusandae, neque, cum a ea
                dolorem corporis placeat minima voluptatem delectus labore veniam vel harum inventore? Vel cupiditate
                sequi non magnam ea est molestiae, placeat iusto esse alias blanditiis voluptates, consectetur obcaecati
                aperiam neque fugiat labore voluptatibus sint quidem deleniti tempore exercitationem. Inventore rerum,
                libero magni quibusdam obcaecati.
            </p>
            <div className="skill-container">
                <div className="skill">
                    <img src="icons/js.png"/>
                    <h4 className="skill-title">Java Vanila</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, magnam.</p>

                </div>
                <div className="skill">
                    <img src="icons/react.png"/>
                    <h4 className="skill-title">React</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, magnam.</p>

                </div>
                <div className="skill">
                    <img src="icons/nodejs.png"/>
                    <h4 className="skill-title">Node Js</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, magnam.</p>

                </div>
                <div className="skill">
                    <img src="icons/mongo.png"/>
                    <h4 className="skill-title">Mongo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, magnam.</p>

                </div>
            </div>
        </section>

        <section className="resume"/>
            <h3 className="section-title text-center">
                A Summary of My Resume
            </h3>
            <div className="resume-container">
                <div className="left-column">
                    <h3>My Education

                    </h3>
                    <h4>Masters in Computer Programming</h4>
                    <h5>Harvard University/ 2015-216</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                <hr/>
                <div className="left-column">
                    <h3>My Education</h3>
                    <h4>Masters in Computer Programming</h4>
                    <h5>Harvard University/ 2015-216</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                <hr/>
               </div>
                <div className="left-column">
                    <h3>My Education</h3>
                    <h4>Masters in Computer Programming</h4>
                    <h5>Harvard University/ 2015-216</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                <hr/>
                </div>
                
                </div>
                <div className="right-column">
                    <div><h3>My Education</h3>
                        <h4>Masters in Computer Programming</h4>
                        <h5>Harvard University/ 2015-216</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                        <hr/>
                    </div>
                    
                    <div className="left-column">
                        <h3>My Education</h3>
                        <h4>Masters in Computer Programming</h4>
                        <h5>Harvard University/ 2015-216</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                    <hr/>
                    
                       
                    
                    </div>
                    <div className="left-column">
                        <h3>My Education</h3>
                        <h4>Masters in Computer Programming</h4>
                        <h5>Harvard University/ 2015-216</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio.</p>
                    <hr/>
                    
                       
                    
                    </div>
                    
            </div>
        </div>
        </main>
  );
  return(myelement2);
}

function Footer_div(){
  const myelement3=(
    <footer className="secondary-bg">
        <div className="footer-column">
            <h3>Lets connect</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, magni!</p>
            <div>
                <a href=""><img src="icons/facebook.png"/></a>
                <a href=""><img src="icons/twitter.png"/></a>
                <a href=""><img src="icons/insta.png"/></a>

            </div>
        </div>
        <div className="footer-column">
            <h3>Lets Message Me</h3>
            <form action="">
                <input type=" text" placeholder="name"/>
                <input type="email" placeholder="Your Email"/>
                <textarea placeholder="Message" cols="30" rows="20"></textarea>
                <input className="btn-primary" type="submit" value="submit"/>
            </form>
        </div>


    </footer>
  );
  return(myelement3);
}