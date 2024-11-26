import React from "react";
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

const ndviData = [
  { degreeDays: 100, ndvi: -0.5 },
  { degreeDays: 200, ndvi: -0.2 },
  { degreeDays: 300, ndvi: 0.0 },
  { degreeDays: 400, ndvi: 0.2 },
  { degreeDays: 500, ndvi: 0.4 },
  { degreeDays: 600, ndvi: 0.6 },
  { degreeDays: 700, ndvi: 0.8 },
  { degreeDays: 800, ndvi: 1.0 },
  { degreeDays: 900, ndvi: 0.8 },
  { degreeDays: 1000, ndvi: 0.6 },
  { degreeDays: 1100, ndvi: 0.4 },
  { degreeDays: 1200, ndvi: 0.2 },
  { degreeDays: 1300, ndvi: 0.0 },
  { degreeDays: 1400, ndvi: -0.2 },
  { degreeDays: 1500, ndvi: -0.5 },
];

const NDVILineChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Unidades de Grado Días Acumuladas vs NDVI
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={ndviData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              type="number"
              dataKey="degreeDays"
              name="Unidades de Grado Días"
              stroke="white"
            />
            <YAxis
              type="number"
              dataKey="ndvi"
              name="NDVI"
              domain={[-1, 1]}
              stroke="white"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Line type="monotone" dataKey="ndvi" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default NDVILineChart;
