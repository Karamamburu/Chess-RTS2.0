import axios from 'axios';

const HANDLERS = {
  searchGames: 'search_games',
  foundGames: 'found_games',
  readyPlayers: 'ready_players'
}
const PLAYER_NAMES = ['Vova', 'Denis', 'Test', 'Kto-to tam', 'Chess', 'Michalych', 'Petrovich', 'Semyonych', 'Santa']

const baseUrl = 'http://localhost:9000/'



async function searchGames(plaerName: string): Promise<any> {
  const url = `${baseUrl}${HANDLERS.searchGames}`
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