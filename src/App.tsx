import { AppRouter } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@utils/react-query";
import React from "react";

const App: React.FC = () => {
  const { logout } = useAuth();
  const [queryClient] = React.useState(() => createQueryClient(logout));

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
