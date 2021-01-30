import styled from 'styled-components';

export const Styles = styled.div`
  .navbar {
    background: var(--black);
  }

  .navbar-items {
    z-index: 9;
  }

  /* .navbar-styles {
    overflow: hidden;
    position: fixed; 
    top: 0; 
    width: 100%;
    z-index: 4;
  } */

  .button-style {
    border: 1px solid var(--white);
    color: var(--white);
    font-size: 14px;

    &:hover {
      background: var(--white);
      color: var(--black);
      text-decoration: underline;
    }
  }

  nav .nav-item .nav-link a {
    color: var(--white);
    font-weight: 300;
    font-size: 14px;

    &:hover {
      color: #ddd;
      text-decoration: underline;
    }
  }

  .navbar-brand a {
    color: var(--white);
    font-weight: 700;
    font-size: 1.4rem;

    &:hover {
      color: #ddd;
      text-decoration: none;
    }
  }

  .navbar-light .navbar-nav .nav-link {
    color: var(--white);
    font-weight: 300;
    font-size: 14px;

    &:hover {
      color: #ddd;
      text-decoration: underline;
    }
  }

  .dropdown-menu .dropdown-item a {
    color: #515254;

    &:hover {
      text-decoration: none;
    }

    &:active {
      color: var(--white);
    }
  }

  .text-size {
    font-size: 14px;
  }
`;
