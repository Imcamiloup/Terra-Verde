import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const categoryData = [
  { name: "Orgánico", value: 4500 },
  { name: "Tradicional", value: 3200 },
  { name: "Descafeinado", value: 800 },
  { name: "Gourmet", value: 1000 },
  { name: "Espresso", value: 2000 },
  { name: "Grano", value: 3000 },
  { name: "Molido", value: 4000 },
  { name: "Instantáneo", value: 2500 },
];

const COLORS = [
  "#2563EB", // Más oscuro que #3B82F6
  "#9D174D", // Más oscuro que #EC4899
  "#059A5E", // Más oscuro que #10B981
  "#C26A07", // Más oscuro que #F59E0B
  "#4F46E5", // Más oscuro que #6366F1
  "#DC2626", // Más oscuro que #EF4444
  "#6D3BFB", // Más oscuro que #8B5CF6
  "#12B4C2", // Más oscuro que #22D3EE
];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-400 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Distribución de Stock por Categoría
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
