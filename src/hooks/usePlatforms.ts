import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from 'ms'
import APICLIENT,{ FetchResponse } from "../services/api-client";

const apiClient= new APICLIENT<Platform>('/platforms/lists/parents')
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn:apiClient.getAll,
  staleTime: ms('24h'),
  initialData: { count: platforms.length, results: platforms , next:null}

})

export default usePlatforms;