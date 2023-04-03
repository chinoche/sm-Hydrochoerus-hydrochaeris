import {useState, useEffect} from 'react';

/**
 *
 * @param key :The value for how we're supposed to save the value in the localStorage
 * @param initialValue :The object that we're gonna store in the localStorage
 *
 * Notes: in the future, we could use ContextAPI for handling this same logic and use the localstorage too
 *
 * @category Custom Hooks
 */
function useStateWithStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStateWithStorage;
