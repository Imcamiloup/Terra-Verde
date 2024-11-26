import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";
import SalesByCategoryChart from "../components/overview/SalesByCategoryChart";
import StockChart from "../components/overview/StockChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Productos" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Productos"
            icon={Package}
            value={30}
            color="#6366F1"
          />
          <StatCard
            name="Top Ventas"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Bajo Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Total Ganancias"
            icon={DollarSign}
            value={"$53'210.000"}
            color="#EF4444"
          />
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className="mt-8">
          <SalesByCategoryChart />
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <CategoryDistributionChart />
          <StockChart />
        </div>
      </main>
    </div>
  );
};
export default ProductsPage;
