import axios from 'axios';

async function getStartingPositions() {
  try {
    const response = await axios.get('http://localhost:9000/active_connections');
    const startingPosition = response.data;

    return startingPosition;
    
  } catch (error) {
    console.error('Не удалось получить данные:', error);
  }
}

export { getStartingPositions }