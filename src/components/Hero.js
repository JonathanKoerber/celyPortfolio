import React from 'react';
import styled, {css} from 'styled-components';
import logo from '../components/images/logo.png';
import exit from '../components/images/exit.png';
import Link from "gatsby-link"

const Wrapper = styled.figure`
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
`;
const Container = styled.div`
    position: absolute;
    z-index: 99;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 2%;
    text-align: center;
    width: 40%;
@media only screen and (min-width: 992px){
    
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
`;

const Image = styled.img`
    max-width: 100%;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    z-index: -2;
    background-color: #000000;
`;
const Logo = styled.img`
    height: 2em;
    width: auto;
    align-self: center;
@media only screen and (min-width: 582px){
    height: 2.7em;
    }
@media only screen and (min-width: 778px){
    height: 4em;
    }
@media only screen and (min-width: 992px){
    height: 5em;
   }
`;

const Title = styled.h1`
    align-self: center;
    display: block;
    font-size: 2em;
    color: #ffffff;
    font-family: "Times New Roman", serif;
    padding: 5% 0 2% 0;
@media only screen and (min-width: 992px){
    font-size: 4.5em;
}
@media only screen and (min-width: 1199px){
    padding: 2% 0 2% 0;
    font-size: 5.2em;
    font-weight: bolder;
    }
`;
const Exit = styled.img`
    //display: block;
    padding-top: 10%;
    //padding-left: 45%;
    //padding-right: 50%;
    height: 2em;
    width: 2.5em;
    align-self: center;
@media only screen and (min-width: 582px){
    height: 2.7em;
    width: 4em;
    }
@media only screen and (min-width: 778px){
    height: 4em;
    width : 4em;
    }
@media only screen and (min-width: 992px){
    height: 5em;
    width: 5em;
   }
    :hover{
        opacity: .7;
    }
`;

const Hero = (props) => (
<Wrapper>
    {props.data.map((d, index)=>{
        if(d.image){
        return <Image src={'https://react-flask-app.s3-us-west-2.amazonaws.com'+d.image}/>
            }else if(d.title){
            return(  <Container>
                    <Content>
                        <Logo src={logo}/>
                        <Title>{d.title}</Title>
                      <Link target={'_blank'} to={'/'} ><Exit src={exit}/></Link>
                    </Content>
              </Container>)
            }
        })}
</Wrapper>
)


export default Hero
