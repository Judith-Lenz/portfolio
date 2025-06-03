export type ProjectAlign = 'left' | 'right';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  align: ProjectAlign;
}
