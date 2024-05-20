import React from "react";
import Point from "./Point";

export default function PointList({
  points,
}: {
  points: { title: string; subtitle: string }[];
}) {
  return (
    <ul className="w-full py-10 space-y-8">
      {points.map((item, index) => (
        <Point key={index} title={item.title} subtitle={item.subtitle} />
      ))}
    </ul>
  );
}
