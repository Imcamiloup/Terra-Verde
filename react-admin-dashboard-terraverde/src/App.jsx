import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="flex h-screen bg-white text-black-100 ">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#6A8B25] to-[#4C7550] " />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
