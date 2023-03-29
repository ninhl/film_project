export const BASE_URL_MOVIE = "https://api.themoviedb.org/3/movie"
export const BASE_URL_PERSON = "https://api.themoviedb.org/3/person"

export const API_KEY = "63f98d7f4bc57925911341cbdbb4a548"

const getImage = {
    originalImage: (imgPath?: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath?: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default getImage;
