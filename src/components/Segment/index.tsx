import React from "react";

import ISegment from "../../services/api-interfaces/segment";

import { getRouteTime, getDuration } from "../../utils/date-helper";

import "./style.css";

type Props = {
  segment: ISegment;
};

export default function Segment({ segment }: Props) {
  const { origin, destination, date, duration, stops } = segment;
  return (
    <div className="segment">
      <div className="segment-item">
        <p className="segment-item__title">{`${origin} - ${destination}`}</p>
        <p className="segment-item__value">{getRouteTime(date, duration)}</p>
      </div>
      <div className="segment-item">
        <p className="segment-item__title">В пути</p>
        <p className="segment-item__value">{getDuration(date, duration)}</p>
      </div>
      <div className="segment-item">
        <p className="segment-item__title">{`${stops.length} пересадки`}</p>
        <p className="segment-item__value">{stops.join()}</p>
      </div>
    </div>
  );
}
