const myAPIUrl = "https://60603de504b05d0017ba2181.mockapi.io/api/v1/topplayers";
const getAllPlayers = async () => {
    const response = await fetch(myAPIUrl);
    const data = await response.json();
    return data;
}