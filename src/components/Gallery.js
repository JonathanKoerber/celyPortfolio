import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "./Project";

const Figure = styled.figure`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;

`;

const projects = [
  {"title": "Prime Day",
    "image": "/images/prime_day/pdc_desktop_hero_image.png",
    "href": "/PrimeDay"}
  ,
  {"title": "OFT",
    "image": "/images/oprah_fav/oft_desktop_hero_image.png",
    "href": "/OFT"}
  ,
  {"title": "Flair",
    "image": "/images/flair/flair_desktop_hero_image.png",
    "href": "/Flair"}
  ,
  {"title": "Amazon Pets",
    "image": "/images/pets/pets_desktop_hero_image.png",
    "href": "/AmazonPets"}
]

function Gallery() {
   //  const [projects , setProjects] = useState([]);
   //  useEffect(()=> {
   //      fetch('/gallery').then(res => res.json()).then(data =>{
   //          setProjects(data.data)
   //   }).catch(function(err){
   //     console.log(err)
   //   })
   // }, []);
  console.log('hello')
    return(
              <Figure>
                      {projects.map((p, index)=>{
                          return <Project project={p} />
                  })}
              </Figure>
      );
}



export default Gallery;
