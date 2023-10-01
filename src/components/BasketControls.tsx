import { useAppDispatch } from "../app/store";
import { basketSliceActions } from "../app/slices/basketSlice";
import { Box, Text } from "grommet";
import SubtractIconButton from "./SubtractIconButton";
import AddIconButton from "./AddIconButton";
import React, { memo, useCallback } from "react";

interface BasketControlsProps {
  ticketCount?: number;
  variantId: number;
  priceBandId: number;
  atCapacity: boolean;
}

const BasketControls = ({
  ticketCount = 0,
  variantId,
  priceBandId,
  atCapacity,
}: BasketControlsProps) => {
  const dispatch = useAppDispatch();
  const handleAddButtonOnClick = useCallback(
    () =>
      dispatch(
        basketSliceActions.incrementTicketOrderCount({
          priceBandId,
          variantId,
        }),
      ),
    [priceBandId, variantId, dispatch],
  );

  const handleSubTractButtonOnClick = useCallback(
    () =>
      dispatch(
        basketSliceActions.decrementTicketOrderCount({
          priceBandId,
          variantId,
        }),
      ),
    [priceBandId, variantId, dispatch],
  );

  return (
    <Box direction="row" align="center">
      <SubtractIconButton
        onClick={handleSubTractButtonOnClick}
        disabled={ticketCount < 1}
      />
      <Box flex width="1rem">
        <Text
          size="small"
          color="text-strong"
          weight="normal"
          textAlign="center"
        >
          {ticketCount}
        </Text>
      </Box>
      <AddIconButton onClick={handleAddButtonOnClick} disabled={atCapacity} />
    </Box>
  );
};

export default memo(BasketControls);
