import parse from "html-react-parser";
import styled from "styled-components";
import { Box } from "grommet";
import React from "react";

// Decided to use event short description for this project, might be useful for a future update
interface EventDescriptionProps {
  description: string; // HTML string
}

const EventDescription = ({ description }: EventDescriptionProps) => (
  <ParsedDescriptionContainer>
    {/*parse and convert the HTML string into React elements*/}
    {parse(description)}
  </ParsedDescriptionContainer>
);

const ParsedDescriptionContainer = styled(Box)({
  textAlign: "center",
});

export default EventDescription;
