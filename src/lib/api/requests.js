
export const requests = {
    movieTrending: `/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    movieUpcoming:`/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
    moviePopular:`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1 `,
    movieNetflixOriginals: `/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`,
    movieTopRated: `/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    movieAction: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28`,
    movieComedy: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=35`,
    movieHorror: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=27`,
    movieRomance: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=10749`,
    movieDocumantaries: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=99`
}