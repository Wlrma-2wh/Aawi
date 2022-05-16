import React, { useEffect, useState } from "react";
import { ItemContainer } from "./itemStyle";

const Item = ({ item, choose, clickChoose, index }: any) => {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setMax(
      item.graph.reduce((max: number, v: any) => (max < v.y ? v.y : max), 0)
    );
    setMin(
      item.graph.reduce((min: number, v: any) => (min > v.y ? v.y : min), 100)
    );
  }, [item]);

  return (
    <ItemContainer
      color={item.graph[item.graph.length - 1].y >= 0 ? "blue" : "red"}
      onClick={() => clickChoose(index)}
    >
      <div className={choose === index ? "click" : "not"}>
        <div className="title">{item.title}</div>
        <div className="graph">
          <svg>
            <polyline
              points={item.graph.map((v: any, index: number) => {
                return `${index * 6},${14 - (14 / (max / v.y) - 14 / min)} `;
              })}
            ></polyline>
          </svg>
        </div>
        <div className="number">{item.num}</div>
      </div>
    </ItemContainer>
  );
};

export default Item;
