import SockCards from "../components/SockCards";
import Navbar from "../components/Navbar";

const Feed: React.FC = () =>{
    return(
        <div className="Container">
            <div className="feedContent">
                <h1 className="Title">Sock's Mate</h1>
                <SockCards/>
                <div className="containerNavbar">
                <Navbar />
                </div>
            </div>
      </div>
    )
}
export default Feed;