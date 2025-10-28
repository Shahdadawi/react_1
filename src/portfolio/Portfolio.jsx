import style from './portfolio.module.css'
import img1 from '../assets/images/cabin.png';
import img2 from '../assets/images/cake.png';
import img3 from '../assets/images/circus.png';
import img4 from '../assets/images/game.png';
import img5 from '../assets/images/safe.png';
import img6 from '../assets/images/submarinee.png';

function Portfolio() {


    return <>

        <div id="portfolio"className="container text-center py-5">
            <h1 className={` ${style.h1} fw-bold text-uppercase mb-4`}>Portfolio</h1>

            <div className="row g-4">
                <div className="col-md-4">
                    <img
                        src={img1}
                        alt="Cabin"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src={img2}
                        alt="Cake"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src={img3}
                        alt="Circus"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                <div className="col-md-4">
                    <img
                        src={img4}
                        alt="Game Controller"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src={img5}
                        alt="Safe"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src={img6}
                        alt="Submarine"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
            </div>
        </div>


    </>

}

export default Portfolio;