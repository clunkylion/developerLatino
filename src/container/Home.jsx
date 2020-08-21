import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/Carouselitem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";
const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
export default Home;