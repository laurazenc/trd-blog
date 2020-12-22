import { SummaryProps } from "./components/Summary";

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  captions: string;
  width: number;
  height: number;
  formats: Object;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  created_at: Date;
  updated_at: Date;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  resume: string;
  the_box?: string;
  content: Object;
  thoughts: string;
  goal: string;
  goal_image?: Image;
  summary: SummaryProps;
  how_to_play: string;
  how_to_play_image: Image;
  published_at: Date;
  images: Image[];
  cover: Image;
  rank: number;
}
