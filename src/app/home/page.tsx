"use client";

import { useCallback, useEffect } from "react";

import { MainLayout } from "@/features/app/components";
import { useHome } from "@/features/home/hooks";

import { SectionContent, LatestPlayed, ListMusic } from "./components";
import "./styles.scss";

const Home: React.FC = () => {
  const {
    // homeCurrentPlaylistsIsLoading,
    homeCurrentPlaylistsData,
    homeCurrentPlaylists,
  } = useHome();

  const getCurrentPlaylists = useCallback(() => {
    const params = { params: { limit: 5, size: 5 } };

    void homeCurrentPlaylists(params);
  }, [homeCurrentPlaylists]);

  useEffect(() => {
    getCurrentPlaylists();
  }, [getCurrentPlaylists]);

  const onClickShowAllContentForYou = () => {
    console.log(true);
  };

  return (
    <MainLayout>
      <div className="d-flex flex-column gap-8">
        {/* My Playlist */}
        <SectionContent title="Good Afternoon">
          <div className="my-playlist">
            {homeCurrentPlaylistsData?.data.map((currentPlaylist) => (
              <LatestPlayed
                title={currentPlaylist.title}
                img={currentPlaylist.image}
                key={currentPlaylist.id}
              />
            ))}
          </div>
        </SectionContent>

        {/* Made For You */}
        <SectionContent
          onClickShowAll={onClickShowAllContentForYou}
          title="Made For Muhammad Zidane"
          showAll
        >
          <div className="for-you">
            {homeCurrentPlaylistsData?.data.map((currentPlaylist) => (
              <ListMusic
                artists={currentPlaylist.artist}
                title={currentPlaylist.title}
                img={currentPlaylist.image}
                key={currentPlaylist.id}
              />
            ))}
          </div>
        </SectionContent>
      </div>
    </MainLayout>
  );
};

export default Home;
