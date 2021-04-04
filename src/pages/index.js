import React from "react"
import { Header } from "../../.cache/fast-refresh-overlay/components/overlay"
import Main from "../components/Main"
import About from "../components/About"
import Footer from "../components/Footer"
import Heading from "../components/Heading"
import Gallery from "../components/Gallery"
import { GlobalStyle } from "../theme/globalStyle"

export default function Home() {
  return (<div>
    <GlobalStyle/>
    <Heading />
    <Gallery/>
    <About />
    <Footer />
  </div>)
}
