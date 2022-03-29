import { useState, useEffect } from "react";

function useLocalStorageTodo(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItems] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }

        setItems(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItems = (newItem) => {
    try {
      const newItemstringifi = JSON.stringify(newItem);
      localStorage.setItem(itemName, newItemstringifi);
      setItems(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItems, loading, error };
}

export { useLocalStorageTodo };
