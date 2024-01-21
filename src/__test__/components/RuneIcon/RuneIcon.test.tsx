import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { runes } from "src/data/runes/runes";

describe("RuneIcon", () => {
  test("Should render image based on skill", () => {
    const { getAllByRole } = render(<RuneIcon rune={runes[0]} />);
    const images = getAllByRole("img");
    const image = images.find((image) => image.getAttribute("src") === runes[0].image[0]);
    expect(image).toHaveAttribute("src", runes[0].image[0]);

  });
  test("Should have label if it exists", () => {
    const { getByText } = render(<RuneIcon rune={runes[0]} />);
    const label = getByText(runes[0].label || "");
    expect(label).toHaveTextContent(runes[0].label || "");
  });
  test("If label is false, should not have label", () => {
    const { queryByText } = render(<RuneIcon rune={runes[0]} label={false} />);
    const label = queryByText(runes[0].label || "");
    expect(label).toBeNull();
  });
});