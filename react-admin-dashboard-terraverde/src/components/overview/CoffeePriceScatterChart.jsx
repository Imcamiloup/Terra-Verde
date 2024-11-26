import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const coffeeDataMin = [
  { sku: "SKU_A", name: "Granos de Café Verde", price: 10 },
  { sku: "SKU_B", name: "Café Molido", price: 15 },
  { sku: "SKU_C", name: "Café Instantáneo", price: 5 },
  { sku: "SKU_D", name: "Café en Cápsulas", price: 20 },
  { sku: "SKU_F", name: "Aceite de Café", price: 25 },
  { sku: "SKU_G", name: "Harina de Café", price: 8 },
  { sku: "SKU_H", name: "Exfoliante de Café", price: 12 },
  { sku: "SKU_I", name: "Café Deshidratado", price: 18 },
  { sku: "SKU_J", name: "Cáscara de Café", price: 4 },
  { sku: "SKU_K", name: "Café Liofilizado", price: 22 },
];

const coffeeDataMed = [
  { sku: "SKU_A", name: "Granos de Café Verde", price: 15 },
  { sku: "SKU_B", name: "Café Molido", price: 20 },
  { sku: "SKU_C", name: "Café Instantáneo", price: 10 },
  { sku: "SKU_D", name: "Café en Cápsulas", price: 25 },
  { sku: "SKU_F", name: "Aceite de Café", price: 30 },
  { sku: "SKU_G", name: "Harina de Café", price: 12 },
  { sku: "SKU_H", name: "Exfoliante de Café", price: 18 },
  { sku: "SKU_I", name: "Café Deshidratado", price: 22 },
  { sku: "SKU_J", name: "Cáscara de Café", price: 8 },
  { sku: "SKU_K", name: "Café Liofilizado", price: 28 },
];

const coffeeDataMax = [
  { sku: "SKU_A", name: "Granos de Café Verde", price: 20 },
  { sku: "SKU_B", name: "Café Molido", price: 25 },
  { sku: "SKU_C", name: "Café Instantáneo", price: 15 },
  { sku: "SKU_D", name: "Café en Cápsulas", price: 30 },
  { sku: "SKU_F", name: "Aceite de Café", price: 35 },
  { sku: "SKU_G", name: "Harina de Café", price: 16 },
  { sku: "SKU_H", name: "Exfoliante de Café", price: 24 },
  { sku: "SKU_I", name: "Café Deshidratado", price: 26 },
  { sku: "SKU_J", name: "Cáscara de Café", price: 12 },
  { sku: "SKU_K", name: "Café Liofilizado", price: 34 },
];

const CoffeePriceScatterChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Elasticidad de Precios por tipo de Café
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              type="number"
              dataKey="price"
              name="Precio"
              unit="$"
              stroke="white"
            />
            <YAxis type="category" dataKey="sku" name="SKU" stroke="white" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Café Min" data={coffeeDataMin} fill="#34D399" />
            <Scatter name="Café Med" data={coffeeDataMed} fill="#FBBF24" />
            <Scatter name="Café Max" data={coffeeDataMax} fill="#EF4444" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CoffeePriceScatterChart;
