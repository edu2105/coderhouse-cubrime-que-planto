import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-section">
                <section>
                    <div className="home-title">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>á </span>
                        <span>c</span>
                        <span>o</span>
                        <span>n </span>
                        <span>l</span>
                        <span>a </span>
                        <span>v</span>
                        <span>i</span>
                        <span>d</span>
                        <span>a</span>
                    </div>
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum non repellendus id ut possimus consectetur commodi, animi aspernatur est perspiciatis, tenetur molestias dignissimos aperiam? Quas provident deserunt animi quidem qui sed dolores esse, nesciunt deleniti quia exercitationem ad veritatis, numquam ratione nemo eum sunt adipisci assumenda dignissimos nulla. In
                    </article>
                </section>
                <section>
                    <h2>Conocé nuestras plantas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, modi.</p>
                    <div className="home-buttons-container">
                        <Link to="/categoria/bonsai"><button className="button-bon">Bonsais</button></Link>
                        <Link to="/categoria/interior"><button className="button-int">Interior</button></Link>
                        <Link to="/categoria/exterior"><button className="button-ext">Exterior</button></Link>
                    </div>
                </section>
            </div>            
        </div>
    );
};

export default Home;