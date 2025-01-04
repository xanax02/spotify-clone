import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigation";
import HomeHero from "./HomeHero";
import {
  getArtistsName,
  getRecentlyPlayed,
  getTopArtist,
} from "../../utils/userDataFetch";
import CardWrapper from "../UI/CardWrapper";
import Card from "../UI/Card";

const Body = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const [favArtist, setFavArtist] = useState();
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    getRecentlyPlayed(token).then((items) => {
      setRecentlyPlayed(items);
      // if (items.items[0]) {
      //   dispatch(trackSliceActions.setCurrentSong(items.items[0]));
      // }
    });
    getTopArtist(token).then((items) => {
      setFavArtist(items);
    });
  }, []);

  // console.log(recentlyPlayed?.items)

  return (
    <div className="rounded-md">
      {/* Navigation */}
      <Navigation />

      {/* <Home Hero Section/> */}
      <HomeHero />

      {/* Recently Played */}
      <CardWrapper title={"Recently played"}>
        {recentlyPlayed?.items.slice(0, 6).map((track, index) => {
          return (
            <Card
              key={index + 1}
              isProfile={false}
              image={track.track?.album?.images[0]?.url}
              name={track.track?.name.slice(0, 15)}
              desc={getArtistsName(track.track).slice(0, 15)}
            />
          );
        })}
      </CardWrapper>

      {/* Fav Artists */}
      <CardWrapper title={"Your favorite artists"}>
        {favArtist?.slice(0, 6).map((artist, index) => {
          return (
            <Card
              key={index}
              image={artist.images[0].url}
              name={artist.name}
              isProfile={true}
              desc={"Artist"}
            />
          );
        })}
      </CardWrapper>
    </div>
  );
};

export default Body;
