import Hero from "../components/Hero"
import Main from "../components/Main"
import UnderLineSection from "../components/UnderLineSection"
import UnderLineSectionReverse from "../components/UnderLineSectionReverse"
import { GlobalStyle } from "../theme/globalStyle"
import Footer from "../components/Footer"
import React from "react"

const data = [
  {"hero":[
      {"image": "/images/prime_day/pdc_desktop_hero_image.png"},
      {"title":"Prime Day Concerts"}
    ]},
  {"main":[
      {"underline_section": [
          {"section_title": "Brief"},
          {"paragraph": "2019 was the 2nd year Amazon celebrated Prime membership with an exclusive Prime Day Concert. Featuring live performances\n        by headliner, Taylor Swift, Dua Lipa, Sza, Becky G, and hosted by Jane Lynch. With a large budget and multiple stakeholders\n        including Amazon Music and Amazon Video, this concert was to be broadcast live on Amazon Video. The venue itself allowed\n        entrance to Prime members by invitation only at absolutely no cost with multiple photo opportunities and swag at the venue\n        with Prime Day creative. A small creative team of three were responsible for the physical NYC venue experience with the creative\n        director being stretched to oversee cross-over to onsite and Amazon Video. Managing 3rd party vendors, maintaining brand authenticity\n        and maintaining creative at a high bar was a priority for myself and the rest of the creative team. With pantone colors in hand we headed\n        to New York City 5 days prior to show time!"},
          {"team": [
              {"role": [
                  "Visual Design & Motion Design"
                ]},
              {"members": [
                  "Heather Mounsey - Creative Director",
                  "Allison Wagner - Photo Art Director",
                  "Katie Bren - Lead Design & Art Director",
                  "Abigail Harris - Project Manager"
                ]}

            ]}
        ]},
      {"underline_section":[
          {"image_row":[
              {"text": [
                  {"section_title": "Assets & Color Pallet"},
                  {"paragraph": "  Prime Day Concert exclusive creative assets were made for this event and utilized through-out the venue. In addition,\n        we utilized the Out-of-Home color pallet which had more saturated colors. It was a conscience choice to use some of\n        the on-site (pastel) color pallet as accent colors."}
                ]},
              {"image_full": "/images/prime_day/desktop_project_detail_sml_ima_b.png"}
            ]}
        ]},
      {"underline_section": [
          {"section_title": "Exterior Signage & Posters"},
          {"paragraph": "I assisted in managing installation of the 3D printed marquee that sat atop of Manhattan Center. Careful attention\n        was given to kerning and orientation to each piece for brand authenticity. Taking a creative que from the motion\n        graphics used for the event, I designed four 8ft x 4ft posters featuring our performers. These oversized posters\n        were placed at the entrance of the venue. Assets for these ???larger-than-life??? posters was not an easy feat to acquire\n        causing art direction to change from the original concept. Utilizing my past experience in photo editing I was able to\n        salvage images that would otherwise not be usable in print of this scale. In addition to the art posters, I also designed\n        an oversized ???schedule of events??? with art director oversight. Color matching between pieces was a challenge."},
          {"image_full": "/images/prime_day/desktop_project_detail_lg_imag_b.png"}
        ]},
      {"underline_section": [
          {"image_row_reverse":[
              {"text": [
                  {"section_title": "Lobby"},
                  {"paragraph":"This area did get lots of traffic. Most guests used the restroom facilities in this area where we partnered with\n            ???Belei??? for freebies. Catering was also set-up here as well as additional Wickedly Prime freebies. An opportunity\n            for guests to get free on demand t-shirts printed of exclusive Prime Day Concert swag! Designing for these t-shirts\n            was simple leveraging our Prime Day assets however, I did do a touch of editing and adjusted layout to a couple of the\n            designs.<br/><br/>As visual designer, I also handled the toolkit. This consisted of wayfinding signage, wristbands,\n            ambassador uniforms, partner signage, merch, catering menu??? Pretty much any of the extra things to make the event come together."}
                ]},
              {"image_full": "/images/prime_day/desktop_project_detail_sml_ima_bq.png"}
            ]}
        ]},
      {"underline_section": [
          {"section_title": "Promenade"},
          {"paragraph":    "All guests stepped and viewed this space. On either side of this area, were photo opportunities to interact with\n        our Prime Day papercrafts in the form of life size 3D sculptures. To the left of the entrance of the entrance was\n        the Prime Day band. This sculpture featured a female singer, while guest were encouraged by our ambassadors to pose\n        with guitars, keyboards and even play a drum set! On the right side of this space was a rather peculiar 3D sculpture\n        featuring what we affectionally call ???Cat DJ??? who our ambassadors also encouraged guests to take pictures with. The\n        challenge of setting up the promenade was to allow plenty of walking space towards the performance stage. The crew for\n        sound control, lighting and effects were also set up here. It was upmost importance for them to do their jobs well, while\n        our guests and ambassadors celebrated Prime Day with photos and music. Before show time, I and the rest of the creative\n        team helped pose and place the 3D sculptures and signage while also noting defects and requesting the staging crew to make\n        any repairs. The stage was made to look like Echo dots on either side. Looking up to the balconies there were barricades\n        wrapped in Prime Day colors and music notes to carry through the theme and message. Pst??? Stage motion graphics took a\n        cue from me in colorizing the artist photos."},
          {"image_full": "/images/prime_day/desktop_project_detail_lg_imag.png"}
        ]},
      {"underline_section":[
          {"image_row": [
              {"text": [
                  {"section_title": "VIP Balcony"},
                  {"paragraph": "Although, I had little design work in this area, I helped with pre-press of the throw pillows, table tents and Rivet\n        sign. I helped most with some physical labor moving furniture. I voiced my opinion about where to place catering tables\n        and also helped stage the photo opportunities in this space. The directional signs to the restrooms were my handywork. lol"}
                ]},
              {"image_full": "/images/prime_day/desktop_project_detail_sml_ima.png"}
            ]}
        ]},
      {"underline_section":[
          {"section_title": "Basement & Toolkits"},
          {"paragraph": "This area did get lots of traffic. Most guests used the restroom facilities in this area where we partnered with\n        ???Belei??? for freebies. Catering was also set-up here as well as additional Wickedly Prime freebies. An opportunity\n        for guests to get free on demand t-shirts printed of exclusive Prime Day Concert swag! Designing for these t-shirts\n        was simple leveraging our Prime Day assets however, I did do a touch of editing and adjusted layout to a couple of the\n        designs. As visual designer, I also handled the toolkit. This consisted of wayfinding signage, wristbands,\n        ambassador uniforms, partner signage, merch, catering menu??? Pretty much any of the extra things to make the event come together."},
          {"image_row_no_flex": [
              {"image_full": "/images/prime_day/desktop_project_detail_tall_im.png"},
              {"image_full": "/images/prime_day/desktop_project_detail_tall_im_bc.png"},
              {"image_full": "/images/prime_day/desktop_project_detail_tall_im_bb.png"}
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
