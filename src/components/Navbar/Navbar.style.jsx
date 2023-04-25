import styled from "styled-components";

const Nav = styled.nav`
  width: calc(100vw - 15px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #1e19147c;
`;

const NavContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  img {
    width: 70px;

    @media only screen and (max-width: 768px) {
      width: 50px;
    }
  }


  
  .btn {
 background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)
}

.btn {
 margin: 10px;
 padding: 10px 15px;
 text-align: center;
 text-transform: uppercase;
 transition: 0.5s;
 background-size: 200% auto;
 color: white;
 border-radius: 10px;
 display: block;
 border: 0px;
 font-weight: 500;
 cursor: pointer;
 font-size: .9rem;
 box-shadow: 0px 0px 14px -7px #f09819;

 @media only screen and (max-width: 768px) {
      padding: 7px 6px;
      font-size: 0.8rem;
      width: 20%;
      transform: scale(1);

    }
}

.btn:hover {
 background-position: right center;
 /* change the direction of the change here */
 color: #fff;
 text-decoration: none;
}

.btn:active {
 transform: scale(0.95);
}

  button {
   

    @media only screen and (max-width: 768px) {
      padding: 0.35rem 1rem;
      font-size: 0.8rem;
      margin-left: 1rem;
      margin-right: 1rem;
      width: 100%;
      margin-left: 2rem;
    }

    &:hover {
      background-color: #ff8c00;
      color: white;
    }
  }

  ul {
    display: flex;
    margin-top: 1rem;
    padding-left: 2.5rem;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
      gap: 5px;
    }

    a {
      text-decoration: none;
      color: transparent;
      text-transform: capitalize;
    }
  }
  li {
    list-style: none;
    background: linear-gradient(45deg,#fc7e09,#ffffffc5 80%);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 500;
    font-size: 1.4rem;
    transition: 0.1s;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    border-bottom: 2px solid orange;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      margin-right: 0.6.5rem;
    }

    &:hover {
      border-bottom: none;
      cursor: pointer;
    }
  }
`;

export { Nav, NavContainer };
