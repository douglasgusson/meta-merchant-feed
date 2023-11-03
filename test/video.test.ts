import { Link } from "../src/models/link";
import { Video } from "../src/models/video";

describe("Video", () => {
  describe("formatter", () => {
    it("throws an error if a video URL is missing", () => {
      const videos = [
        { tag: ["Video 1"], url: "https://www.youtube.com/watch?v=123" },
        { tag: ["Video 2"], url: "" },
        { tag: ["Video 3"] },
      ];
      // @ts-ignore - because we are testing an error
      expect(() => Video.formatter(videos)).toThrow("Video URL is required");
    });

    it("calls Link.formatter for each video URL", () => {
      const videos = [
        { tag: ["Video 1"], url: "https://www.youtube.com/watch?v=123" },
        { tag: ["Video 2"], url: "https://vimeo.com/456" },
      ];
      const linkFormatterSpy = jest.spyOn(Link, "formatter");
      //
      Video.formatter(videos);
      expect(linkFormatterSpy).toHaveBeenCalledTimes(2);
      expect(linkFormatterSpy).toHaveBeenCalledWith(videos[0].url);
      expect(linkFormatterSpy).toHaveBeenCalledWith(videos[1].url);
      linkFormatterSpy.mockRestore();
    });

    it("returns a JSON string of the input value", () => {
      const videos = [
        { tag: ["Video 1"], url: "https://www.youtube.com/watch?v=123" },
        { tag: ["Video 2"], url: "https://vimeo.com/456" },
      ];
      const expected = JSON.stringify(videos);
      const actual = Video.formatter(videos);
      expect(actual).toEqual(expected);
    });
  });
});
