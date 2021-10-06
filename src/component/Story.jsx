import { Container } from "@mui/material";
import React from "react";
import Card from "./Card";

function Story() {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "10px" }}>
        <table>
          <tr>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
          </tr>
        </table>
      </Container>
    </div>
  );
}

export default Story;
