import {Button} from "grommet";
import styled from "styled-components";
import {AddCircle} from "grommet-icons/icons";
import React from "react";
import {ButtonExtendedProps} from "grommet/components/Button";

const AddIconButton = ({disabled, ...props}: ButtonExtendedProps) => {
  const icon = <StyledAddIcon disabled={disabled} />
  return <Button icon={icon} secondary {...props} />
}

const StyledAddIcon = styled(AddCircle)<{
  disabled?: boolean;
}>(({ disabled }) => ({
  width: "32px",
  height: "auto",
  ...(!disabled && {
    "& path": {
      stroke: "white !important",
      fill: "#161e5b !important",
      "&:hover": {
        opacity: 0.5
      }
    }
  })
}));

export default AddIconButton;