// React

// Components
import {
  Filter,
  HeaderItem,
  SidebarPlaylist,
  TrackType,
  YourLibrary,
} from "./components";

const Sidebar: React.FC = () => {
  return (
    <aside className="app__sidebar">
      <div className="sidebar__header">
        <HeaderItem icon="icon-home-active-24x-24.svg" title="Home" active />
        <HeaderItem icon="icon-search-deactive-24x24.svg" title="Search" />
      </div>

      <div className="sidebar__content">
        <YourLibrary />
        <TrackType />

        <div className="sidebar__playlists">
          <Filter />

          <div className="d-flex flex-column gap-4 overflow-y-scroll">
            <SidebarPlaylist title="Zidaneee" artist="Zidaneee" image="" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
