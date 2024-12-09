export const fetchHistoricalData = async (cryptoId = "bitcoin", vsCurrency = "usd", days = 7) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${vsCurrency}&days=${days}`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };
  
  