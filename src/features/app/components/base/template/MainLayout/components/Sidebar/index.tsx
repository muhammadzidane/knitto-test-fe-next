import { useEffect } from "react";

import { useHome } from "@/features/home/hooks";

import {
  SidebarPlaylistLoading,
  SidebarPlaylist,
  YourLibrary,
  HeaderItem,
  TrackType,
  Filter,
} from "./components";
import "./styles.scss";

const Sidebar: React.FC = () => {
  const { homePlaylistsIsLoading, homePlaylistsData, homePlaylists } =
    useHome();

  useEffect(() => {
    void homePlaylists({});
  }, [homePlaylists]);

  return (
    <div className="app__sidebar">
      <div className="sidebar__header">
        <HeaderItem icon="icon-home-active" title="Home" active />
        <HeaderItem icon="icon-search-deactive" title="Search" />
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
    </div>
  );
};

export default Sidebar;
