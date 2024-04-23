import "./topbar.css";
import   { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faUser,faMessage,faBell} from "@fortawesome/free-solid-svg-icons";


export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">
                DropoutZ</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar"> <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
            <input placeholder='Search for  pics' className="searchInput" />
            </div>
       
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <div className="topbarLink">Homepage</div>
                <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faMessage} />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="topbarIconBadge">1</span>
                    </div>
                
                
            </div>
            <img src="/assets/person/7.jpeg" alt="" className="topbarImg"/>
        </div>
    </div>
  )
}

