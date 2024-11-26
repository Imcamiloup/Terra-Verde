import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
  { name: "Productores", productos: 23, pedidos: 0, pedidosDistribuidos: 0 },
  { name: "Compradores", productos: 0, pedidos: 25, pedidosDistribuidos: 0 },
  { name: "Distribuidores", productos: 0, pedidos: 0, pedidosDistribuidos: 10 },
];

const UserActivityChart = () => {
  return (
    <motion.div
      className="bg-gray-600 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Actividad de Usuarios por Rol
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={userActivityData}>
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
            <Legend />
            <Bar
              dataKey="productos"
              fill="#6366F1"
              strokeWidth={3}
              name="Productos"
            />
            <Bar
              dataKey="pedidos"
              fill="#EC4899"
              strokeWidth={3}
              name="Pedidos"
            />
            <Bar
              dataKey="pedidosDistribuidos"
              fill="#10B981"
              strokeWidth={3}
              name="Pedidos Distribuidos"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityChart;
