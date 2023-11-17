import { useEffect } from "react";

import { useHome } from "@/features/home/hooks";

// Components
import {
  SidebarPlaylistLoading,
  SidebarPlaylist,
  YourLibrary,
  HeaderItem,
  TrackType,
  Filter,
} from "./components";

const Sidebar: React.FC = () => {
  const { homePlaylistsIsLoading, homePlaylistsData, homePlaylists } =
    useHome();

  useEffect(() => {
    void homePlaylists({});
  }, [homePlaylists]);

  return (
    <aside className="app__sidebar">
      <div className="sidebar__header">
        <HeaderItem
          icon="/svg/icon-home-active-24x-24.svg"
          title="Home"
          active
        />
        <HeaderItem icon="/svg/icon-search-deactive-24x24.svg" title="Search" />
      </div>

      <div className="sidebar__content">
        <YourLibrary />
        <TrackType />

        <div className="sidebar__playlists">
          <Filter />

          {homePlaylistsIsLoading ? (
            <SidebarPlaylistLoading />
          ) : (
            <div className="d-flex flex-column gap-4 overflow-y-scroll">
              {homePlaylistsData?.data.map(({ artist, image, title, id }) => (
                <SidebarPlaylist
                  artist={artist}
                  image={image}
                  title={title}
                  key={id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
