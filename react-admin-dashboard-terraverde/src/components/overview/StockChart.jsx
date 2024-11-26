import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const stockData = {
  1: [
    { date: "2023-10-01", stock: 120 },
    { date: "2023-10-02", stock: 115 },
    { date: "2023-10-03", stock: 110 },
    { date: "2023-10-04", stock: 105 },
    { date: "2023-10-05", stock: 100 },
    { date: "2023-10-06", stock: 95 },
    { date: "2023-10-07", stock: 90 },
    { date: "2023-10-08", stock: 85 },
    { date: "2023-10-09", stock: 80 },
    { date: "2023-10-10", stock: 75 },
    { date: "2023-10-11", stock: 70 },
    { date: "2023-10-12", stock: 65 },
    { date: "2023-10-13", stock: 60 },
    { date: "2023-10-14", stock: 55 },
    { date: "2023-10-15", stock: 50 },
    { date: "2023-10-16", stock: 45 },
    { date: "2023-10-17", stock: 40 },
    { date: "2023-10-18", stock: 35 },
    { date: "2023-10-19", stock: 30 },
    { date: "2023-10-20", stock: 25 },
    { date: "2023-10-21", stock: 20 },
    { date: "2023-10-22", stock: 15 },
    { date: "2023-10-23", stock: 10 },
    { date: "2023-10-24", stock: 5 },
    { date: "2023-10-25", stock: 0 },
    { date: "2023-10-26", stock: 0 },
    { date: "2023-10-27", stock: 0 },
    { date: "2023-10-28", stock: 0 },
    { date: "2023-10-29", stock: 0 },
    { date: "2023-10-30", stock: 0 },
  ],
  2: [
    { date: "2023-10-01", stock: 80 },
    { date: "2023-10-02", stock: 78 },
    { date: "2023-10-03", stock: 75 },
    { date: "2023-10-04", stock: 73 },
    { date: "2023-10-05", stock: 70 },
    { date: "2023-10-06", stock: 68 },
    { date: "2023-10-07", stock: 65 },
    { date: "2023-10-08", stock: 63 },
    { date: "2023-10-09", stock: 60 },
    { date: "2023-10-10", stock: 58 },
    { date: "2023-10-11", stock: 55 },
    { date: "2023-10-12", stock: 53 },
    { date: "2023-10-13", stock: 50 },
    { date: "2023-10-14", stock: 48 },
    { date: "2023-10-15", stock: 45 },
    { date: "2023-10-16", stock: 43 },
    { date: "2023-10-17", stock: 40 },
    { date: "2023-10-18", stock: 38 },
    { date: "2023-10-19", stock: 35 },
    { date: "2023-10-20", stock: 33 },
    { date: "2023-10-21", stock: 30 },
    { date: "2023-10-22", stock: 28 },
    { date: "2023-10-23", stock: 25 },
    { date: "2023-10-24", stock: 23 },
    { date: "2023-10-25", stock: 20 },
    { date: "2023-10-26", stock: 18 },
    { date: "2023-10-27", stock: 15 },
    { date: "2023-10-28", stock: 13 },
    { date: "2023-10-29", stock: 10 },
    { date: "2023-10-30", stock: 8 },
  ],
  3: [
    { date: "2023-10-01", stock: 50 },
    { date: "2023-10-02", stock: 48 },
    { date: "2023-10-03", stock: 47 },
    { date: "2023-10-04", stock: 45 },
    { date: "2023-10-05", stock: 43 },
    { date: "2023-10-06", stock: 42 },
    { date: "2023-10-07", stock: 40 },
    { date: "2023-10-08", stock: 38 },
    { date: "2023-10-09", stock: 37 },
    { date: "2023-10-10", stock: 35 },
    { date: "2023-10-11", stock: 33 },
    { date: "2023-10-12", stock: 32 },
    { date: "2023-10-13", stock: 30 },
    { date: "2023-10-14", stock: 28 },
    { date: "2023-10-15", stock: 27 },
    { date: "2023-10-16", stock: 25 },
    { date: "2023-10-17", stock: 23 },
    { date: "2023-10-18", stock: 22 },
    { date: "2023-10-19", stock: 20 },
    { date: "2023-10-20", stock: 18 },
    { date: "2023-10-21", stock: 17 },
    { date: "2023-10-22", stock: 15 },
    { date: "2023-10-23", stock: 13 },
    { date: "2023-10-24", stock: 12 },
    { date: "2023-10-25", stock: 10 },
    { date: "2023-10-26", stock: 8 },
    { date: "2023-10-27", stock: 7 },
    { date: "2023-10-28", stock: 5 },
    { date: "2023-10-29", stock: 3 },
    { date: "2023-10-30", stock: 2 },
  ],
  // Agrega más productos aquí
};

const productOptions = [
  { id: 1, name: "Café Orgánico Premium" },
  { id: 2, name: "Café Tradicional" },
  { id: 3, name: "Café Descafeinado Suave" },
  { id: 4, name: "Café Gourmet de Altura" },
  { id: 5, name: "Café Expreso Intenso" },
  { id: 6, name: "Café Grano de Montaña" },
  { id: 7, name: "Café Molido Tradicional" },
  { id: 8, name: "Café Instantáneo Clásico" },
  { id: 9, name: "Café Orgánico de Altura" },
  { id: 10, name: "Café Tradicional Suave" },
  { id: 11, name: "Café Descafeinado Premium" },
  { id: 12, name: "Café Gourmet Premium" },
  { id: 13, name: "Café Expreso Doble" },
  { id: 14, name: "Café Grano de Colombia" },
  { id: 15, name: "Café Molido Suave" },
  { id: 16, name: "Café Instantáneo Gourmet" },
  { id: 17, name: "Café Orgánico Ecológico" },
  { id: 18, name: "Café Tradicional Extra Fino" },
  { id: 19, name: "Café Descafeinado Natural" },
  { id: 20, name: "Café Gourmet de Venezuela" },
];
const StockChart = () => {
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0].id);

  const handleProductChange = (e) => {
    setSelectedProduct(parseInt(e.target.value));
  };

  return (
    <motion.div
      className="bg-gray-600 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-100">Cambio de Stock</h2>
        <select
          className="bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedProduct}
          onChange={handleProductChange}
        >
          {productOptions.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={stockData[selectedProduct]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"date"} stroke="white" />
            <YAxis stroke="white" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="stock"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default StockChart;
