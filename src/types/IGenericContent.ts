import { JSX } from "react";

/**
 * Interface for generic content
 * @interface IGenericContent
 *
 * @deprecated This interface is not used in the project.
 *
 * @param {string} category - The category of the content
 * @param {string} title - The title of the content
 * @param {() => JSX.Element} content - The content component.
 *
 */
export interface IGenericContent {
  category: string;
  title: string;
  content: () => JSX.Element;
}
