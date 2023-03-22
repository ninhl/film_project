import { callApi } from "../utils";

export const apiClient = {
  fetchApiMovieUpcoming() {
    return callApi("upcoming");
  },
};
