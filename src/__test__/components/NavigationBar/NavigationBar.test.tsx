import { navigationData } from "src/components/NavigationBar/navigationData";
import { NavigationBar } from "src/components/NavigationBar/NavigationBar";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

describe("NavigationBar", () => {
  test("render the navigation bar and have the links from navigationData", () => {
    const { getAllByRole } = render(<NavigationBar />, { wrapper: BrowserRouter });
    const links = getAllByRole("link");
    const icons = getAllByRole("img");
    const linksWithIcons = navigationData.links.filter((link) => link.icon !== undefined);
    expect(links.length).toBe(navigationData.links.length);
    expect(icons.length).toBe(linksWithIcons.length);
  });
});