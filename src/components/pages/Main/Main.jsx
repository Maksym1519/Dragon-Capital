import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import m from "./main.module.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import  Header  from '../../organisms/Header'


const Main = () => {
 
  return (
    <div className={m.main__wrapper}>
      <Header />
    </div>
  );
};
export default Main;
