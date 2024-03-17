import { describe, test, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { RuneIcon } from "components/RuneIcon/RuneIcon";
import { getMockData } from "src/__test__/mockData/MockData";

let runes: any;
describe("RuneIcon", () => {
  beforeEach(() => {
    runes = getMockData("mainRunes");
  });
  test("Should render image based on rune", () => {
    const { getAllByRole } = render(<RuneIcon type="main" rune={runes[0]} />);
    const images = getAllByRole("img");
    const runeImage = `game-assets/runes-main/${runes[0].rarity}/${runes[0].slug.replaceAll('-', '_')}.webp`.toLowerCase();
    const image = images.find((image) => image.getAttribute("src") === runeImage);
    expect(image).not.toBeUndefined();
  });
});