import './fronted.css';

export default function Navs(props){

    return(
        <>
        
           <div>
            <nav className="container">
                <div className="logo">
                   
                    <img src={props.img1} className="img2"></img>
                </div>

                <ul>
                    <li href="#">{props.menu}</li>
                    <li href="#">{props.location}</li>
                    <li href="#">{props.about}</li>
                    <li href="#">{props.contact}</li>
                </ul>

                <button>LOGIN</button>
            </nav>
           </div>

           <main className="hero container">
            <div className="hero-content">
                <h1>{props.text1}</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On </p>
                    <div className="brand-icons">
                        <img src={props.img2} className="img1"></img>
                        <img src={props.img3} className="img1"></img>
                    </div>
                </div>
            </div>

           


            <div className="hero-image">
                <img src={props.img4} className="img3"></img>
            </div>
           </main>

        </>
    );

}