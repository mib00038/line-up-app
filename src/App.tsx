import React from "react";
import { Grommet, Main, Page, PageContent } from "grommet";
import GridContainer from "./components/GridContainer";
import "./App.css";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  tab: {
    color: "grey",
    active: {
      color: "#161e5b",
    },
    border: {
      color: "lightgrey",
      active: {
        color: "#161e5b",
      },
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Main>
        <Page kind="narrow">
          <PageContent>
            <GridContainer />
          </PageContent>
        </Page>
      </Main>
    </Grommet>
  );
}

export default App;
