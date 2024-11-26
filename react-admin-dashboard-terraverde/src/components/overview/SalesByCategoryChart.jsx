import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const salesByCategoryData = [
  { name: "Orgánico", ventas: 2500 },
  { name: "Tradicional", ventas: 4200 },
  { name: "Descafeinado", ventas: 400 },
  { name: "Gourmet", ventas: 100 },
  { name: "Espresso", ventas: 1000 },
  { name: "Grano", ventas: 1000 },
  { name: "Molido", ventas: 2000 },
  { name: "Instantáneo", ventas: 1500 },
];

const COLORS = [
  "#2563EB", // Orgánico
  "#9D174D", // Tradicional
  "#059A5E", // Descafeinado
  "#C26A07", // Gourmet
  "#4F46E5", // Espresso
  "#DC2626", // Grano
  "#6D3BFB", // Molido
  "#12B4C2", // Instantáneo
];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-gray-600 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Ventas por Categoría
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={salesByCategoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="white" />
            <YAxis stroke="white" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Bar dataKey="ventas" strokeWidth={3}>
              {salesByCategoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesByCategoryChart;
