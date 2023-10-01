import React from "react";
import { useEventQuery } from "../app/services/eventApi";
import { Box, Text } from "grommet";

interface EventInfoProps {
  eventId: number;
}

const EventInfo = ({ eventId }: EventInfoProps) => {
  const { isLoading, data: event }: any = useEventQuery({
    eventId,
  });
  console.log({ event });

  return isLoading ? null : (
    <Box margin={{ top: "medium" }}>
      <Text
        size="medium"
        textAlign="center"
        weight="bold"
        margin={{ bottom: "small" }}
      >
        {event.name}
      </Text>
      <Text
        size="small"
        textAlign="center"
        weight="normal"
        margin={{ bottom: "small" }}
      >
        {event.shortDescription}
      </Text>
      <img src={event.image.url} alt={event.name} />
    </Box>
  );
};

export default EventInfo;
