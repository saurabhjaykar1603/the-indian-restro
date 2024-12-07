import styled, { css } from "styled-components";
const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  ${props => props.as === 'h1' && css`
    font-size: 40px;
    font-weight: 700;
  ` }
  ${props => props.as === 'h2' && css`
    font-size: 30px;
    font-weight: 600;
  ` }
  ${props => props.as === 'h3' && css`
    font-size: 24px;
    font-weight: 600;
  ` }
  ${props => props.as === 'h4' && css`
    font-size: 20px;
    font-weight: 600;
  ` }
  ${props => props.as === 'h5' && css`
    font-size: 16px;
    font-weight: 600;
  ` }
  ${props => props.as === 'h6' && css`
    font-size: 14px;
    font-weight: 600;
  ` }
  line-height: 1.5;
  
`;

export default Heading;