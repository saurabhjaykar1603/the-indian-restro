import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import PageNotFound from "./pages/PageNotFound"
import Account from "./pages/Account"
import Login from "./pages/Login"
import GlobalStyle from "./styles/GlobalStyle"
import AppLayout from "./ui/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={< PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" gutter={12} containerStyle={{
        marginTop: "8px"
      }} toastOptions={{
        success: { theme: { primary: "#4ade80" }, duration: 3000 }, error: {
          duration: 3000
        }, style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          border: "1px solid var(--color-grey-700)"
        }
      }} />
    </QueryClientProvider>
  )
}

export default App
