import React from "react";
import Information from "./information/Information";
import Item from "./item/Item";

const dumy = [
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 400 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: -840 },
      { x: 48, y: -80 },
      { x: 54, y: -40 },
      { x: 60, y: -20 },
    ],
    num: 2328,
  },
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 40 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: 40 },
      { x: 48, y: 40 },
      { x: 54, y: 90 },
      { x: 60, y: 40 },
    ],
    num: 2328,
  },
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 40 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: 40 },
      { x: 48, y: 40 },
      { x: 54, y: 90 },
      { x: 60, y: 40 },
    ],
    num: 2328,
  },
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 40 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: 40 },
      { x: 48, y: 40 },
      { x: 54, y: 90 },
      { x: 60, y: 40 },
    ],
    num: 2328,
  },
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 40 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: 40 },
      { x: 48, y: 40 },
      { x: 54, y: 90 },
      { x: 60, y: 40 },
    ],
    num: 2328,
  },
  {
    title: "꽃가루",
    graph: [
      { x: 0, y: 20 },
      { x: 6, y: 40 },
      { x: 12, y: 30 },
      { x: 18, y: 40 },
      { x: 24, y: 60 },
      { x: 30, y: 40 },
      { x: 36, y: 40 },
      { x: 42, y: 40 },
      { x: 48, y: 40 },
      { x: 54, y: 90 },
      { x: 60, y: 40 },
    ],
    num: 2328,
  },
];

const index = () => {
  return (
    <>
      <div>
        {dumy.map((v) => (
          <Item item={v} />
        ))}
      </div>
      <div>
        <Information />
      </div>
    </>
  );
};

export default index;
