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

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: orange;
    padding: 0.45rem 1rem;
    border-radius: 0.5rem;
    color: #2e2821;
    transition: 0.2s ease-in-out;

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
      color: orange;
      text-transform: capitalize;
    }
  }
  li {
    list-style: none;
    color: orange;
    font-size: 1.5rem;
    transition: 0.1s;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
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
