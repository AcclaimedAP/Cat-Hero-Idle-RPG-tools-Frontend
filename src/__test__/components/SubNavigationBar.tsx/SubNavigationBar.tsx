import { SubNavigationBar } from "src/components/SubNavigationBar/SubNavigationBar";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

const mockNavigationData = {
  links: [
    {
      displayText: 'All',
      url: '/game-data',
    },
    {
      displayText: 'Companions',
      url: '/game-data/companions',
    },
    {
      displayText: 'Skills',
      url: '/game-data/skills',
    },
    {
      displayText: 'Runes',
      url: '/game-data/runes',
    },
  ],
};

describe("SubNavigationBar", () => {
  test("render the navigation bar and have the links from navigationData", () => {
    const { getAllByRole } = render(<SubNavigationBar navigationData={mockNavigationData} />, { wrapper: BrowserRouter });
    const links = getAllByRole("link");
    expect(links.length).toBe(mockNavigationData.links.length);
  });
});