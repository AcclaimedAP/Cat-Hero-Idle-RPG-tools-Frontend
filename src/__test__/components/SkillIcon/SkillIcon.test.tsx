import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { SkillIcon } from "components/SkillIcon/SkillIcon";
import { skills } from "src/data/skills/skills";

describe("SkillIcon", () => {
  test("Should render image based on skill", () => {
    const { getAllByRole } = render(<SkillIcon skill={skills[0]} />);
    const images = getAllByRole("img");
    const skillname = skills[0].name.replace(/ /g, '_').replace(/-/g, '_').replace(/'/g, '').replace(/!/g, '').toLowerCase();
    const skillImage = `game-assets/skills/${skills[0].rarity}/${skillname}.png`.toLowerCase();
    const image = images.find((image) => image.getAttribute("src") === skillImage);
    expect(image).not.toBeUndefined();

  });
  test("Should have level label that equals the level if label is true", () => {
    const { getByText } = render(<SkillIcon skill={skills[0]} level={2} />);
    const label = getByText("Lv. 2");
    expect(label).toHaveTextContent("Lv. 2");
  });
  test("If label is false, should not have level label", () => {
    const { queryByText } = render(<SkillIcon skill={skills[0]} label={false} level={1} />);
    const label = queryByText("Lv. 1");
    expect(label).toBeNull();
  });
});