import { useAppDispatch } from "../app/store";
import { basketSliceActions } from "../app/slices/basketSlice";
import { Box, Text } from "grommet";
import SubtractIconButton from "./SubtractIconButton";
import AddIconButton from "./AddIconButton";
import React from "react";

interface BasketControlsProps {
  ticketCount?: number;
  variantId: number;
  priceBandId: number;
}

const BasketControls = ({
  ticketCount = 0,
  variantId,
  priceBandId,
}: BasketControlsProps) => {
  const dispatch = useAppDispatch();
  const handleAddButtonOnClick = () =>
    dispatch(
      basketSliceActions.incrementTicketOrderCount({ priceBandId, variantId }),
    );
  const handleSubTractButtonOnClick = () =>
    dispatch(
      basketSliceActions.decrementTicketOrderCount({ priceBandId, variantId }),
    );

  return (
    <Box direction="row" align="center">
      <SubtractIconButton
        onClick={handleSubTractButtonOnClick}
        disabled={ticketCount < 1}
      />
      <Box flex>
        <Text size="small" color="text-strong" weight="normal">
          {ticketCount}
        </Text>
      </Box>
      <AddIconButton onClick={handleAddButtonOnClick} />
    </Box>
  );
};

export default BasketControls;
