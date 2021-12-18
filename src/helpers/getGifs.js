export const getGifs = async(category) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=nNXzfM6E3NbQBSDfXdUAAufscuONz4hU`;

    const answer = await fetch(url);
    const {data} = await answer.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            tittle: img.title,
            url: img.images?.downsized_medium.url,
            size: [img.images?.downsized_medium.width, img.images?.downsized_medium.height]
        }
    });

    return gifs;
}