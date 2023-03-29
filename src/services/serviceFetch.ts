import { callApiMovie, callApiPerson } from "../utils";

export const apiClient = {
  fetchApiMovieUpcoming() {
    return callApiMovie("upcoming");
  },
  fetchApiMovieTopRated() {
    return callApiMovie("top_rated");
  },
  fetchApiMoviePopular() {
    return callApiMovie("popular");
  },
  fetchApiMovieNowPlaying() {
    return callApiMovie("now_playing");
  },
  fetchApiPeoplePopular() {
    return callApiPerson("popular");
  },

}