import "./sidebar.css"
import   { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss,faMessage,faCirclePlay,faUserGroup,faBookmark,faCircleQuestion,faBriefcase,faCalendarCheck,faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { Users } from "../../dummyData";
import CloseFriend from "../close-friend/closeFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faRss} className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faMessage} className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faCirclePlay} className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faUserGroup} className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faBookmark} className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faCircleQuestion} className="sidebarIcon" />

            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faBriefcase} className="sidebarIcon" />

            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faCalendarCheck} className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon icon={faGraduationCap} className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
    </div>
    </div>
  )
}
