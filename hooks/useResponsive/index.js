import { useContext, useMemo } from "react";
import { ResponsiveContext } from "grommet";

export default () => {
  const size = useContext(ResponsiveContext);

  return useMemo(
    () => ({
      isSmall: size === "small",
      isMedium: size === "medium",
      isLarge: size === "large",
    }),
    [size]
  );
};
