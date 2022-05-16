import styled from "styled-components";

export const ItemContainer = styled.div`
  [class="click"] {
    background: #fbe5ff;
    width: 500px;
    height: 102px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    padding-right: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4px;
    position: relative;
    color: ${(props) => props.color};
    cursor: pointer;
  }
  [class="not"] {
    background: #ffffff;
    width: 500px;
    height: 102px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    padding-right: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4px;
    position: relative;
    color: ${(props) => props.color};
    cursor: pointer;
    &:hover {
      background: rgba(251, 229, 255, 0.3);
    }
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: black;
  }

  .graph {
    width: 66px;
    height: 100%;
    position: relative;
    /* overflow: hidden; */

    svg {
      position: absolute;
      top: 0;
      left: 0%;
      width: 100%;
      height: 100%;

      polyline {
        transform: translateY(40%);
        fill: none;
        stroke-width: 2;
        stroke: ${(props) => props.color};
        stroke-linecap: round;
        z-index: 2;
      }
    }
  }

  .number {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;
