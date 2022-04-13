import React from "react";
import Styled from "styled-components";
import Logo from "../AI/images/logo.svg";
import Rasm from  "../AI/images/showcase.svg"
import Lo1 from  "../AI/images/Partner 1.png"
import Lo2 from  "../AI/images/Partner 2.png"
import Lo3 from  "../AI/images/Partner 3.png"
import Lo4 from  "../AI/images/Partner 4.png"

export const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Icon>
          <img className="icon" src={Logo} />
          <p>Articial intellegience</p>
        </Icon>
        <div className="li">
          <p>Home</p>
          <p>About</p>
          <p>Servises</p>
          <p>Blog</p>
          <p>Contact</p>
          <div className="Bar">-_-</div>
        </div>
        <button className="but1" style={{ cursor: "pointer" }}>
          Sign In
        </button>
      </Nav>

      <div className="wrap">
        <div className="section1">
          <p>Next Generation Platforrm</p>
          <h3 className="arti" style={{color:"white"}}>Article intellegience & Syber security</h3>
          <h6 className="Lorem" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, non blanditiis autem id dolore illum exercitationem deserunt commodi officia aperiam?</h6>
          <div className="Get">
          <button> Get Started</button>
          <button> Watch Video</button>
        </div>
        </div>
        
        <div className="img">

          <img className="wrap_right" src={Rasm}/>
        </div>
      </div>

      <div className="logo_group">

<img src={Lo1}/>
<img src={Lo2}/>
<img src={Lo3}/>
<img src={Lo4}/>


      </div>
    </Container>
  );
};

const Container = Styled.div`
height:100vh;
background: #09111F;




 
`;
const Nav = Styled.div`
padding:10px;

display: flex;
justify-content: space-around;
/* align-items:center */

background-color:#0A121F;



`;
const Icon = Styled.div`
display: flex;
justify-content:center;
align-items:center;
p{
  color: #3A68B8;
}

`;
