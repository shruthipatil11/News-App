

export const getAllNews = async () => {
    const response = await fetch("http://localhost:9000/news");
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const getNewsByPhrase = async (phrase) => {
    const response = await fetch(`http://localhost:9000/searchNews?phrase=${phrase}`);
    const jsonResponse = await response.json();
    return jsonResponse;
}

