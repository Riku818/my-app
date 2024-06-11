import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

interface FormItem {
  time: string;
  decktype: string;
  deckcode: string;
  id: string;
}

interface Data {
  form: FormItem[];
}

const useFetchGss = (sheetName: string) => {
  const [data, setData] = useState<Data>({ form: [] });
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGss = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://script.google.com/macros/s/AKfycbxyY9yE0I6E11wlf52nmglUmwJxRuuUvFFZm36EODvvhkXKCQSfJQtpGi4N8tOqMqzj/exec?sheetName=${sheetName}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGss();
  }, [sheetName]);

  return { data, error, isLoading };
};

export default useFetchGss;
