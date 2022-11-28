import { createClient, Operations } from '../components/generated/client';

import { createHooks } from '@wundergraph/swr';

const client = createClient() // Typesafe WunderGraph client

export const {
  useQuery,
  useMutation,
  useSubscription,
  useUser,
  useFileUpload,
  useAuth,
  queryKey,
} = createHooks<Operations>(client)
