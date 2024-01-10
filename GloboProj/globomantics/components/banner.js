import {logo} from "./banner.module.css"

const subtitleStyle = {
    fontSyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = ({headerText}) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="..\public\GloboLogo.png" alt="logoo" className={logo}/>
            </div>
            <div  className="col-7 mt-5" style={subtitleStyle}>
                {headerText}
                Providing houses all over the world
            </div>
        </header>
    );
};

export default Banner; 