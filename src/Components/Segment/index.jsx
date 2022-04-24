import React from "react";
import { SegmentContainer } from "./style";

const Segment = ({
  selectedValue = "",
  onSelect = () => {},
  data = [],
}) => {

  return(
    <SegmentContainer>
      {
        data.map((item) => (
            <div
              key={item}
              className={`segment ${selectedValue === item ? 'selected-segment' : ''}`}
              onClick={() => onSelect(item)}
            >
              {item}
            </div>
        ))
      }
    </SegmentContainer>
  )
};

export default Segment;