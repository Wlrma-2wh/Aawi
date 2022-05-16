import styled from "styled-components";

export const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .rogo {
    position: absolute;
    display: flex;
    top: 29px;
    right: 20px;
    gap: 54px;
    svg {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.2em;
    padding-left: 52px;
    padding-top: 6px;
    color: #000000;
  }
`;
