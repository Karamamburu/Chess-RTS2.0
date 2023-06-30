import axios from 'axios';

const HANDLERS = {
  searchGames: 'search_games'
}
const PLAYER_NAMES = ['Vova', 'Denis', 'Test', 'Kto-to tam', 'Chess']

const baseUrl = 'http://localhost:9000/'



async function searchGames(plaerName: any): Promise<any> {
  const url = 'http://localhost:9000/search_games';
  const headers = {
    accept: 'application/json',
    name: plaerName,
  };

  try {
    const response = await axios.post(url, '', { headers });
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
}




// async function getStartingPositions() {
//   try {
//     const response = await axios.get(`${baseUrl}`);
//     const startingPosition = response.data;

//     return startingPosition;

//   } catch (error) {
//     console.error('Не удалось получить данные:', error);
//   }
// }

export { PLAYER_NAMES, searchGames }