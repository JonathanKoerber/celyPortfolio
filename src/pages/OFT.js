import React from "react"
import styled, {css} from "styled-components"
import { GlobalStyle } from "../theme/globalStyle"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import UnderLineSection from "../components/UnderLineSection"
import UnderLineSectionReverse from "../components/UnderLineSectionReverse"

const data = [
  {"hero":[
      {"image": "/images/oprah_fav/oft_desktop_hero_image.png"},
      {"title": "OFT 2019"}
    ]},
  {"main":[
      {"underline_section": [
          {"section_title": "Brief"},
          {"paragraph": "If there is a holiday shopping list worth merit, it’s Oprah’s Favorite Things. The list has been curated by Oprah,\n      herself for the last 25 years. Amazon has partnered with Oprah for the last five to offer shopping for these goodies\n      at one place. Our target audience are women of color aged 30-50. In 2019 the media buy consisted of 2 spreads in O magazine,\n      digital ad page take over on Oprah.com, digital ads on Oprahmag.com, organic video placements on Oprah.com’s Facebook and\n      Instagram social channels and the shopping experience of Oprah’s Favorite Things on Amazon.com. It takes a small village\n      to make this “Christmas” miracle come true."},
          {"team": [
              {"role": [
                  "Visual Design & Motion Design"
                ]},
              {"members":[
                  "Heather Mounsey - Creative Director",
                  "Allison Wagner - Photo Art Director",
                  "Katie Bren - Lead Design & Art Director",
                  "Abigail Harris - Project"
                ]}
            ]}
        ]},
      {"underline_section":[
          {"section_title": "Print Ads"},
          {"paragraph": "I had little oversight on print ads after conceptualizing. We hired an agency to photo retouch and create the\n      mechanicals. I spoke with them early on about process and expectations. The photo art director annotated editing\n      notes passed on by our producer. I assisted only as an extra pair of eyes when reviewing proofs and offering critique.\n      Upon, receiving mechanicals I proofed them for any potential errors and uploaded final mechanicals to Hearst\n      (O magazine) on the due date."},

          {"color_back": [
              {"image": "/images/oprah_fav/Image_1.png"},
              {"image": "/images/oprah_fav/Image_2.png"},
              {"color": "#e3f7f7"}
            ]}
        ]},
      {"underline_section_reverse":[
          {"thin_column":[
              {"section_title": "Dynamic Ads"},
              {"paragraph": "Due to budget constraints (and life challenges), I was not able to attend the photo shoot. However, I armed\n        my fellow creatives with concept sketches and a run-down of what I needed. To make sure they captured everything\n        to properly execute these ads I got on a live call with the photographer on set and explained to him my concept\n        and discussed thoughts on what would be the best way to capture the shots. With his partnership, shots for digital\n        were done in two days. After retouch was completed and assets where masked in individual layers, I utilized Animate\n        CC to create motion graphics in multiple sizes. Depending on the size of the creative different assets we used. I included\n        a hover state for each graphic (where applicable) to tie in with our “sparkle” onsite creative."},
              {"image_tall": "/images/oprah_fav/Gif_MP4/2019_q3_us_oft_300x600_F.gif"}
            ]},
          {"weird_image_grid":[
              {"image_one": "/images/oprah_fav/HTML5_concepts.png"},
              {"image_two": "/images/oprah_fav/Gif_MP4/2019_q3_us_oft_728x90_F.gif"},
              {"image_three": "/images/oprah_fav/Gif_MP4/2019_q4_us_oft_970x250_F.gif"}
            ]}
        ]},
      {"underline_section": [
          {"section_title": "Social"},
          {"paragraph": "As a creative team, we stretched on the ask for social content. Originally, Oprah’s team asked us for static images.\n      We asked if there was an opportunity to do something more for our customer on social platforms. After asking several\n      times… weeks later we were told we could do video. We had no video content, Oh no! But there was no fear. We quickly\n      researched, concepted and consulted social experts and delivered 3 MP4s. 1 to be used on both Facebook and Instagram\n      and the other two were specific for each channel. In addition, we also gave them the static images they requested."},
          {"video": [
              {"poster": "/images/oprah_fav/desktop_project_detail_lg_imag.png"},
              {"source": "/images/oprah_fav/Gif_MP4/OFT_social.mp4"}
            ]}
        ]},
      {"underline_section": [
          {"section_title": "Onsite"},
          {"paragraph": "It took 3 visual designers to bring together the onsite shopping experience. We partnered with UX to offer customers\n      1 page shopping for Oprah’s list. We captured an editorial feel above the fold with a combination of Amazon’s Holiday\n      Styleguide and Oprah creative featuring top products. Below, customers could explore products and read actual Oprah\n      quotes for each. I helped create onsite traffic drivers as static and animated gifs. I helped create graphics for product\n      collections within the product grid and I helped create the Spanish version of the onsite experience."},
          {"image_full": "/images/oprah_fav/desktop_project_detail_lg_imag_x.png"}
        ]},
      {"underline_section": [
          {"section_title": "Customer Journey"},
          {"video":[
              {"poster": "/images/oprah_fav/desktop_project_detail_lg_imag_y.png"},
              {"source": "/images/oprah_fav/Gif_MP4/OFT_journey.mp4"}
            ]}
        ]}
    ]
  }
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
