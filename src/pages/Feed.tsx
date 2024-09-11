import SockCards from "../components/SockCards";
import Navbar from "../components/Navbar";

const Feed: React.FC = () =>{
    return(
        <div className="Container">
            <div className="feedContent">
                <h1 className="Title">Sock's Mate</h1>
                <SockCards userId={1}/>
                <Navbar />
            </div>
      </div>
    )
}
export default Feed;