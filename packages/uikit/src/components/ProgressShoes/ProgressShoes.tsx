import React from "react";
import StyledProgress, { BarShoes } from "./StyledProgress";
import ProgressBunnyWrapper from "./ProgressBunnyWrapper";
import { ProgressBunny } from "../Svg";
import { ProgressShoesProps, variants, scales } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const ProgressShoes: React.FC<React.PropsWithChildren<ProgressShoesProps>> = ({
  variant = variants.ROUND,
  scale = scales.MD,
  primaryStep = 0,
  secondaryStep = null,
  showProgressBunny = false,
  useDark = true,
  children,
}) => {
  return (
    <StyledProgress $useDark={useDark} variant={variant} scale={scale}>
      {children || (
        <>
          {showProgressBunny && (
            <ProgressBunnyWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
              <ProgressBunny />
            </ProgressBunnyWrapper>
          )}
          <BarShoes $useDark={useDark} primary style={{ width: `${stepGuard(primaryStep)}%` }} />
          {secondaryStep ? <BarShoes $useDark={useDark} style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
        </>
      )}
    </StyledProgress>
  );
};

export default ProgressShoes;
