import { baseService } from "./baseService.ts";

interface MediaLibraryApiResponse {
  id: string;
  title: string;
  type: string;
  director: string[];
  cast: string[];
  country: string[];
  date: Date;
  releasedYear: number;
  duration: string;
  genre: string[];
  description: string;
}

const mediaService = baseService.injectEndpoints({
  endpoints: (build) => ({
    getMedia: build.query<MediaLibraryApiResponse, object>({
      query: () => ({
        url: "/getMedia",
        method: "GET",
      }),
    }),
  }),
});

const useGetMediaLibrary = () => {
  const { useGetMediaQuery } = mediaService;
  return {
    useGetMediaQuery,
  };
};

export { mediaService, useGetMediaLibrary };
export type { MediaLibraryApiResponse };
