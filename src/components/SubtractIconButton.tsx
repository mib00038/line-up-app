import React from "react";
import {Button} from "grommet";
import styled from "styled-components";
import {SubtractCircle} from "grommet-icons/icons";
import {ButtonExtendedProps} from "grommet/components/Button";

const SubtractIconButton = ({disabled, ...props}: ButtonExtendedProps) => {
  const icon = <StyledSubtractIcon disabled={disabled} />
  return <Button disabled={disabled} icon={icon} secondary {...props} />
}

const StyledSubtractIcon = styled(SubtractCircle)<{
  disabled?: boolean;
}>(({ disabled }) => ({
  width: "2rem",
  height: "auto",
  "& path": {
    stroke: "white !important",
    fill: "#161e5b !important",
    ...(!disabled && {
      "&:hover": {
        opacity: 0.5
      }
    }),
  }
}));

export default SubtractIconButton;
