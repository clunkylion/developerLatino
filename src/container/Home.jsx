/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/Carouselitem";
//import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

//const API = "http://localhost:3000/initialState";
const Home = ({ mylist, trends, originals }) => {
  //const initialState = useInitialState(API);
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={`${item.id}_mylist`} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
