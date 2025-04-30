import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-300 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          Catch all the breaking news, trending updates, and important alerts
          from around the world. From technology to sports, weather to education
          — we bring you real-time headlines in one continuous scroll. Stay
          informed, stay ahead.
        </p>
        <p className="font-bold">
          Catch all the breaking news, trending updates, and important alerts
          from around the world. From technology to sports, weather to education
          — we bring you real-time headlines in one continuous scroll. Stay
          informed, stay ahead.
        </p>
        <p className="font-bold">
          Catch all the breaking news, trending updates, and important alerts
          from around the world. From technology to sports, weather to education
          — we bring you real-time headlines in one continuous scroll. Stay
          informed, stay ahead.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
