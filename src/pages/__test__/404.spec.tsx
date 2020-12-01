import { render, waitFor } from "../../test-utils";
import React from "react";
import { NotFound } from "../404";

describe("<NotFound />", () => {
  it("renders OK", async () => {
    render(<NotFound />);
    await waitFor(() => {
      expect(document.title).toBe("Not Found | Nuber Eats");
    });
  });
});
