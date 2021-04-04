import Hero from "../components/Hero"
import Main from "../components/Main"
import UnderLineSection from "../components/UnderLineSection"
import UnderLineSectionReverse from "../components/UnderLineSectionReverse"
import { GlobalStyle } from "../theme/globalStyle"
import Footer from "../components/Footer"
import React from "react"

const data = [
  {"hero":[
      {"image": "/images/flair/flair_desktop_hero_image.png"},
      {"title":"Flair"}
    ]},
  {"main":[
      {"underline_section":[
          {"section_title": "Brief"},
          {"paragraph":"I’ve been interested in UX and UI design. I took the Udacity Product Design course and this was it’s outcome.\n      The course covers, product ideation and validation, UI/UX design, design sprints and identifying key metrics.\n      Students can choose to ideate their own unique product or complete the course with one of their examples.\n      I created a unique app that enables a user to design their own pin-back buttons."
          },
          {"team":[
              {"role": [
                  "Visual Design & Motion Design"
                ]},
              {"team":[
                  "Solo project for a course.",
                  "Feedback and critiques by Amazon employees"
                ]}

            ]}
        ]}
    ]}
]
function getElements(e) {
  if (e.hero) {
    return (
      <Hero data={e.hero}/>
    )
  } else if (e.main) {
    return (
      <Main>
        {e.main.map((u, i) => {
            if (u.underline_section) {
              return (
                <UnderLineSection data={u.underline_section}/>
              )
            }else if(u.underline_section_reverse){
              return (
                <UnderLineSectionReverse data={u.underline_section_reverse}/>
              )
            }
          }
        )
        }
      </Main>
    )
  }
}
export default function OTF(){
  return (
    <div>
      <GlobalStyle/>
      {/*<Heading/>*/}
      {/* todo makes routes */}

      {data.map((d, index) => {
        return getElements(d);
      })}
      <Footer/>
    </div>
  )
}
