import "../styles/message.css"
import Navbar from "../components/Navbar";

const Message: React.FC = () =>{
    return(
    <div className="container-message">
        <h1 className="Title">Sock's Mate</h1>
        <p className="button">Messagerie</p>
        <ul className="list-message">
            <li className="item">
                <div className="cercle">
                    <img src="https://lh5.googleusercontent.com/proxy/qLv8SoOi7odqcIveS66RiDdIdYtpo-OF1-9nHQK6vGIrIDzAY539oYyvijNy5o0nFZshoXZoMRK0rW8JqEc3RgwKGM5_jBGVASnRGZMG9O_g" alt="" />
                </div>
                <p>ChaussiSocks</p>
            </li>
            <li className="item">
                <div className="cercle">
                <img src="https://lh5.googleusercontent.com/proxy/qLv8SoOi7odqcIveS66RiDdIdYtpo-OF1-9nHQK6vGIrIDzAY539oYyvijNy5o0nFZshoXZoMRK0rW8JqEc3RgwKGM5_jBGVASnRGZMG9O_g" alt="" />
                </div>
                <p>Cho7</p>
            </li>
            <li className="item">
                <div className="cercle">
                <img src="https://lh5.googleusercontent.com/proxy/qLv8SoOi7odqcIveS66RiDdIdYtpo-OF1-9nHQK6vGIrIDzAY539oYyvijNy5o0nFZshoXZoMRK0rW8JqEc3RgwKGM5_jBGVASnRGZMG9O_g" alt="" />
                </div>
                <p>SoSocks</p>
            </li>
            <li className="item">
                <div className="cercle">
                <img src="https://lh5.googleusercontent.com/proxy/qLv8SoOi7odqcIveS66RiDdIdYtpo-OF1-9nHQK6vGIrIDzAY539oYyvijNy5o0nFZshoXZoMRK0rW8JqEc3RgwKGM5_jBGVASnRGZMG9O_g" alt="" />
                </div>
                <p>ChauSo</p>
            </li>
        </ul>
        <Navbar />
    </div>
    )
}
export default Message;