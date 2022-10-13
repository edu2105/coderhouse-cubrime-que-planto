import React from "react";
import '../../stylesheets/Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home-container">
            <section>
                <h1>Conectá con la vida</h1>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum non repellendus id ut possimus consectetur commodi, animi aspernatur est perspiciatis, tenetur molestias dignissimos aperiam? Quas provident deserunt animi quidem qui sed dolores esse, nesciunt deleniti quia exercitationem ad veritatis, numquam ratione nemo eum sunt adipisci assumenda dignissimos nulla. In
                </article>
            </section>
            <section>
                <h2>Conocé nuestras plantas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, modi.</p>
                <div className="home-buttons-container">
                    <button className="button-int"><Link to="/categoria/interior">Interior</Link></button>
                    <button className="button-ext"><Link to="/categoria/exterior">Exterior</Link></button>
                </div>
            </section>
        </div>
    );
};

export default Home;