import { useQueryState, parseAsString } from 'nuqs';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useSearchProducts(fetchFn: (query: string) => Promise<any[]>) {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState('NO_LOAD');
  const [noResults, setNoResults] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      return;
    }

    fetchFn(debouncedSearch)
      .then(setResults)
      .catch(console.error)
      .finally(() => {
        setLoading('LOADING_ENDED');
        // setSearchingStartStatus(false);
      });
  }, [debouncedSearch, fetchFn]);

  useEffect(() => {
    if (search) {
      setLoading('LOADING_STARTED');
    } else {
      setLoading('NO_LOAD');
      // setSearchingStartStatus(false);
    }
  }, [search]);

  return { results, search, setSearch, loading, noResults };
}
