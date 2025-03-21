import * as React from "react";

const SvgIcon = ({className}) => (
  <svg
    ariaHidden="true"
    className={className}
    data-testid="ArrowForwardIcon"
    viewBox="0 0 24 24"
  >
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
  </svg>
);

export default SvgIcon;
