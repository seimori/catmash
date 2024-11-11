import { getDuelingCats } from "../utils/getDuelingCats";
import { useCallback, useEffect, useState } from "react";
import { Cat } from "../types";

export const useGetDuelingCats = () => {
  const [firstDuelingCat, setFirstDuelingCat] = useState<Cat>();
  const [secondDuelingCat, setSecondDuelingCat] = useState<Cat>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDuelingCats = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getDuelingCats();

      setFirstDuelingCat(data[0]);
      setSecondDuelingCat(data[1]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDuelingCats();
  }, [fetchDuelingCats]);

  return {
    firstDuelingCat,
    secondDuelingCat,
    isLoading,
    error,
    refetch: fetchDuelingCats,
  };
};
