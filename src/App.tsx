import { AppRouter } from "@constants/routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { queryConfig } from "@utils/react-query"
import React from "react"

const App: React.FC = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
