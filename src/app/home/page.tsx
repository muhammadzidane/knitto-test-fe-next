"use client";

import { useCallback, useEffect } from "react";

import { MainLayout } from "@/features/app/components";
import { useHome } from "@/features/home/hooks";

import {
  LatestPlayedLoading,
  ListMusicLoading,
  LatestPlayed,
  ListMusic,
  Section,
} from "./components";
import "./styles.scss";

const Home: React.FC = () => {
  const {
    homeCurrentPlaylistsIsLoading,
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
        <Section title="Good Afternoon">
          <div className="my-playlist">
            {homeCurrentPlaylistsIsLoading && <LatestPlayedLoading />}
            {homeCurrentPlaylistsData?.data.map((currentPlaylist) => (
              <LatestPlayed
                title={currentPlaylist.title}
                img={currentPlaylist.image}
                key={currentPlaylist.id}
              />
            ))}
          </div>
        </Section>

        {/* Made For You */}
        <Section
          onClickShowAll={onClickShowAllContentForYou}
          loading={homeCurrentPlaylistsIsLoading}
          title="Made For Muhammad Zidane"
          showAll
        >
          <div className="for-you">
            {homeCurrentPlaylistsIsLoading && <ListMusicLoading />}
            {homeCurrentPlaylistsData?.data.map((currentPlaylist) => (
              <ListMusic
                artists={currentPlaylist.artist}
                title={currentPlaylist.title}
                img={currentPlaylist.image}
                key={currentPlaylist.id}
              />
            ))}
          </div>
        </Section>
      </div>
    </MainLayout>
  );
};

export default Home;
