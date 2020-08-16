import React from "react";

import ISegment from "../../api-interfaces/segment";

import Skeleton from "../Skeleton";

import { getRouteTime, getDuration, getWordEnding } from "../../utils";

import "./style.css";

type Props = {
  isSkeleton?: boolean;
  segment?: ISegment;
};

export default function Segment({ isSkeleton, segment }: Props) {
  if (isSkeleton || !segment) {
    return (
      <div className="segment">
        <div className="segment-item segment-item--route">
          <p className="segment-item__title">
            <Skeleton width="70px" height="12px" />
          </p>
          <p className="segment-item__value">
            <Skeleton width="90px" height="14px" />
          </p>
        </div>
        <div className="segment-item segment-item--duration">
          <p className="segment-item__title">
            <Skeleton width="70px" height="12px" />
          </p>
          <p className="segment-item__value">
            <Skeleton width="90px" height="14px" />
          </p>
        </div>
        <div className="segment-item segment-item--stops">
          <p className="segment-item__title">
            <Skeleton width="70px" height="12px" />
          </p>
          <p className="segment-item__value">
            <Skeleton width="90px" height="14px" />
          </p>
        </div>
      </div>
    );
  }

  const { origin, destination, date, duration, stops } = segment;
  return (
    <div className="segment">
      <div className="segment-item segment-item--route">
        <p className="segment-item__title">{`${origin} - ${destination}`}</p>
        <p className="segment-item__value">{getRouteTime(date, duration)}</p>
      </div>
      <div className="segment-item segment-item--duration">
        <p className="segment-item__title">В пути</p>
        <p className="segment-item__value">{getDuration(date, duration)}</p>
      </div>
      <div className="segment-item segment-item--stops">
        <p className="segment-item__title">{`${
          stops.length
        } пересад${getWordEnding(stops.length, ["а", "и", "ок"])}`}</p>
        <p className="segment-item__value">{stops.join()}</p>
      </div>
    </div>
  );
}

Segment.defaultProps = {
  isSkeleton: false,
};
