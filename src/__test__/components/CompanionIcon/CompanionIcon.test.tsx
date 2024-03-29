import { describe, test, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { CompanionIcon } from "components/CompanionIcon/CompanionIcon";
import { getMockData } from "src/__test__/mockData/MockData";

let companions: any;
describe("companionIcon", () => {
  beforeEach(() => {
    companions = getMockData("companions");
  });
  test("Should render image based on companion", () => {
    const { getAllByRole } = render(<CompanionIcon companion={companions[0]} />);
    const images = getAllByRole("img");
    const image = images.find((image) => image.getAttribute("src") === `game-assets/companions/${companions[0].rarity}/${companions[0].slug.replace('-', '_')}.png`.toLowerCase());
    expect(image).not.toBeUndefined();

  });
  test("Should have level label that equals the level if label is true", () => {
    const { getByText } = render(<CompanionIcon companion={companions[0]} level={5} />);
    const label = getByText("Lv. 5");
    expect(label).toHaveTextContent("Lv. 5");
  });
  test("If label is false, should not have level label", () => {
    const { queryByText } = render(<CompanionIcon companion={companions[0]} label={false} level={1} />);
    const label = queryByText("Lv. 1");
    expect(label).toBeNull();
  });
  test("Should have mana cost label that equals the mana cost of the companion", () => {
    const { getByText } = render(<CompanionIcon companion={companions[0]} label={false} />);
    const label = getByText(companions[0].base_mp.toString());
    expect(label).toHaveTextContent(companions[0].base_mp.toString());
  });
});