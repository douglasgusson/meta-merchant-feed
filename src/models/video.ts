import { Link } from "./link";

export type Video = {
  url: string;
  tag: string[];
};

export namespace Video {
  export type Model = Video;

  export function formatter(value: Model[]): string {
    value.forEach((video) => {
      if (!video.url) {
        throw new Error("Video URL is required");
      }

      Link.formatter(video.url);
    });

    return JSON.stringify(value);
  }
}
