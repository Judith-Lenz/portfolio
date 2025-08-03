/**
 * Alignment options for displaying a project.
 */
export type ProjectAlign = 'left' | 'right';

/**
 * Interface representing a portfolio project entry.
 */
export interface Project {
  /**
   * Project title shown in the UI.
   */
  title: string;

  /**
   * Short translated description of the project.
   */
  description: string;

  /**
   * List of technologies used in the project.
   */
  technologies: string[];

  /**
   * Path to the preview image.
   */
  imageUrl: string;

  /**
   * Public URL to the live demo or deployed project.
   */
  liveUrl: string;

  /**
   * URL to the GitHub repository of the project.
   */
  githubUrl: string;

  /**
   * Alignment of the project card on the page layout.
   */
  align: ProjectAlign;
}
