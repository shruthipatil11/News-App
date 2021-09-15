

export const getAllNews = async (param) => {
    const response = await fetch(`http://localhost:9000/news?country=${param}`);
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const getNewsByPhrase = async (phrase) => {
    const response = await fetch(`http://localhost:9000/searchNews?phrase=${phrase}`);
    const jsonResponse = await response.json();
    return jsonResponse;
}

