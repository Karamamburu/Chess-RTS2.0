import axios from 'axios';

const baseUrl = 'http://89.19.210.96/'

async function getStartingPositions() {
  try {
    const response = await axios.get('http://89.19.210.96/active_connections');
    const startingPosition = response.data;

    return startingPosition;
    
  } catch (error) {
    console.error('Не удалось получить данные:', error);
  }
}

export { getStartingPositions }