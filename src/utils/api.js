import { useState, useEffect } from "react";

const getFromAPI = baseURL => endPoint =>
  fetch(`${baseURL}${endPoint}`)
    .then(res => res.json())
    .catch(err => {
      console.error(err.message);
    });

const getHackerNews = getFromAPI("https://hacker-news.firebaseio.com/v0");

function memoizeAsync(func) {
  const memo = async function(key) {
    if (!memo.cache.has(key)) {
      memo.cache.set(key, await func.apply(this, arguments));
    }

    return memo.cache.get(key);
  };
  memo.cache = new Map();
  return memo;
}

const memoizedGetHackerNews = memoizeAsync(getHackerNews);

function useHackerNewsEndpoint(endpoint) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      const data = await memoizedGetHackerNews(endpoint);

      if (!didCancel) {
        setError(!data ? {
          message: "API Error"
        } : null);
        setResponse(data);
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [endpoint]);

  return [response, error];
}

const useUserItems = userId => useHackerNewsEndpoint(`/user/${userId}.json`);

const useItem = itemId => useHackerNewsEndpoint(`/item/${itemId}.json`);

export default useHackerNewsEndpoint;

export { useUserItems, useItem };
