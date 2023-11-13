import { useEffect, useRef } from "react";
import { LocationWrapper } from "../shared/location-wrapper";
import { Location2 } from "../locations/location2";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

export const Screen4 = () => {
  const metrika = useRef(false);

  useEffect(() => {
    if (metrika.current) return;
    reachMetrikaGoal("location2");
    metrika.current = true;
  }, []);

  return (
    <LocationWrapper canNext canPrev>
      <Location2 />
    </LocationWrapper>
  );
};
