export async function fetchHome() {
    const key = 'a42a61c067e66eee5834012056e5662a';
    return await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}

export async function fetchCast(movieId) {
    const key = 'a42a61c067e66eee5834012056e5662a';
    return await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}

export async function fetchHomeMovies(movieId) {
    const key = 'a42a61c067e66eee5834012056e5662a';
    return await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}

export async function fetcMovies(name) {
    const key = 'a42a61c067e66eee5834012056e5662a';
    return await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}