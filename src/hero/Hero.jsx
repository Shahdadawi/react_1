import style from './hero.module.css'
import heroAvatar from '../assets/images/avataaars.svg';
function Hero() {

    return <header>

        <div className={`${style.centered} mx-auto p-5 mb-5" style="width: 200px; `}>
            <div className="text-center pt-5 ">
                <img
                    src={heroAvatar}
                    className="img-fluid rounded mx-auto d-block "
                    style={{ width: "250px" }}
                    alt="Hero Avatar"
                />

                <h1 className='mx-auto fs-1 text-light fw-bold mt-4 '>START BOOTSTRAP</h1>
                <h2 className='mx-auto fs-6 text-light  mt-4  '>Graphic Artist - Web Designer - Illustrator</h2>
        </div>


    </div>



    </header >




}

export default Hero;