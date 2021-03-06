import Hero from "../components/Hero"
import Main from "../components/Main"
import UnderLineSection from "../components/UnderLineSection"
import UnderLineSectionReverse from "../components/UnderLineSectionReverse"
import { GlobalStyle } from "../theme/globalStyle"
import Footer from "../components/Footer"
import React from "react"


const data = [
  {"hero": [
      {"image": "/images/pets/pets_desktop_hero_image.png"},
      {"title": "Amazon Pets"}
    ]},
  {"main": [
      {"underline_section":[
          {"section_title": "Brief"},
          {"paragraph": "The pet business partners within Amazon requested aid with “re-branding” of their category.\n      They expressed concern that the pet business was overlooked by customers who preferred to shop with competitors.\n      They want to position themselves as leaders in the category with the knowledge and the ability to meet the needs of any pet parent and their pet.\n      They also aim to have a well performing Instagram account. The deliverable is a blue-print for branding in both digital and print."},
          {"team":[
              {"role": [
                  "Visual Design"
                ]},
              {"members":[
                  "John Mchogh - Design Manager",
                  "Peter Ty - Art Director",
                  "Jeff Turner - Copywriter/ Strategist",
                  "Cathy Synowiec - Project Manager"
                ]}
            ]}
        ]},
      {"underline_section":[
          {"image_row":[
              {"text": [
                  {"section_title": "Competitor Audit"},
                  {"paragraph": "Before we could begin we had to look at the landscape of this business. We looked at top retailers and brands around the world to determine what\n        traits customers are attracted to. In addition, we analyzed color usage, photography and graphic treatment."}
                ]},
              {"image_full": "/images/pets/desktop_project_detail_sml_ima_bg.png"}
            ]}
        ]},
      {"underline_section":[
          {"section_title": "Concepts"},
          {"paragraph": "Once we felt we understood the business, we presented 3 concepts that would be unique to the Amazon Pet category.\n      Identifying pros and cons for each one, the business partners chose to combine 2 concepts. They liked the large toolkit of one and the ownership of another."},
          {"image_full": "/images/pets/desktop_project_detail_lg_imag.png"}
        ]},
      {"underline_section":[
          {"image_row_reverse": [
              {"text":[
                  {"section_title": "Color Pallet"},
                  {"paragraph": "The color is influenced by colors found in nature. Animal color in particular."}
                ]},
              {"image_full": "/images/pets/desktop_project_detail_sml_ima.png"}
            ]}
        ]},
      {"underline_section":[
          {"section_title": "Graphic Treatments"},
          {"paragraph": "Graphic usage was divided into 3 sections. 1 is foundational, following the lead of the core brand with simplicity\n      and authenticity. This is to be used onsite. 2 is for visual enhancements. This is the tone of the brand and it’s identifying markers.\n      This to be used particularly offsite. 3 is for social media only. These are decorative elements to dress up product and photography."},
          {"image_full": "/images/pets/desktop_project_detail_lg_imag_cb.png"},
          {"image_full": "/images/pets/desktop_project_detail_lg_imag_cc.png"},
          {"image_full": "/images/pets/desktop_project_detail_lg_imag_cd.png"}
        ]},
      {"underline_section": [
          {"section_title": "Illustrations"},
          {"paragraph": "I owned illustration for this project with guidance from the Art Director. The drawings are simple and loose with hand drawn\n      qualities. They embody the care-free nature of our own pets."},
          {"image_full": "/images/pets/desktop_project_detail_lg_imag_ce.png"},
          {"image_row":
              [
                {"image_full": "/images/pets/social_illustrations.png"},
                {"image_full": "/images/pets/social_patterns.png"}
              ] },
          {"image_row_no_flex":
              [
                {"image_full": "/images/pets/pets_illustration_DOG_G.png"},
                {"image_full": "/images/pets/pets_illustration_CAT_E.png"},
                {"image_full": "/images/pets/pets_illustration_DOG_E_cr.png"},
                {"image_full": "/images/pets/pets_illustration_HORSE_A.png"},
                {"image_full": "/images/pets/pets_illustration_CAT_D.png"},
                {"image_full": "/images/pets/pets_illustration_REPTILE_A.png"},
                {"image_full": "/images/pets/pets_illustration_DOG_A.png"},
                {"image_full": "/images/pets/pets_illustration_S_ANIMAL_A.png"},
                {"image_full": "/images/pets/pets_illustration_CAT_A.png"},
                {"image_full": "/images/pets/pets_illustration_REPTILE_C.png"}
              ]
          }
        ]},
      {"underline_section":
          [
            {"section_title": "Swag"},
            {"paragraph": "We decided to add a little fun into the book\n                 with examples of fun swag."},
            {"image_row":[
                {"image_column":[
                    {"image_full": "/images/pets/desktop_project_detail_lg_imag_ct.png"},
                    {"image_full": "/images/pets/desktop_project_detail_lg_imag_cu.png"}
                  ]},
                {"image_column": [
                    {"image_full": "/images/pets/desktop_project_detail_lg_imag_cv.png"}
                  ]}
              ]
            }
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
export default function AmazonPets(){
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
