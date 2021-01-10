import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Map = () => {
  return (
    <div>
      <h1>Map Page</h1>
      <p>Map page content goes here.</p>
      <ReactSpeedometer
        maxValue={200}
        value={55}
        needleColor="red"
        startColor="tan"
        segments={16}
        width={600}
        height={600}
        ringWidth={250}
        customSegmentStops={[
          0,
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
          120,
          140,
          160,
          180,
          200,
        ]}
        valueTextFontSize={40}
        paddingVertical={40}
        endColor="tan"
      />
    </div>
  );
};

export default Map;
