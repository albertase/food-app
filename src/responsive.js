import { css } from "styled-components";


export const tablet = (props) => {
    return css`
      @media only screen and (max-width: 930px) {
        ${props}
      }
    `;
  };


  export const displayImg = (props) => {
    return css`
      @media only screen and (max-width: 768px) {
        ${props}
      }
    `;
  };

  export const displayImgHigher = (props) => {
    return css`
      @media only screen and (min-width: 768px) {
        ${props}
      }
    `;
  };

  export const displayImgHigher2 = (props) => {
    return css`
      @media only screen and (min-width: 1058px) {
        ${props}
      }
    `;
  };


  export const tablet2 = (props) => {
    return css`
      @media only screen and (max-width: 550px) {
        ${props}
      }
    `;
  };

  export const tablet3 = (props) => {
    return css`
      @media only screen and (max-width: 510px) {
        ${props}
      }
    `;
  };


  export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 415px) {
        ${props}
      }
    `;
  };
  









  