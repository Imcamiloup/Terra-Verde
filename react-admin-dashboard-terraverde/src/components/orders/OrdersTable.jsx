import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
  {
    id: "1",
    humedad: "60%",
    temperatura: "22°C",
    viento: "15 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-01",
  },
  {
    id: "2",
    humedad: "65%",
    temperatura: "24°C",
    viento: "10 km/h",
    precipitaciones: "1 mm",
    date: "2023-10-02",
  },
  {
    id: "3",
    humedad: "70%",
    temperatura: "20°C",
    viento: "20 km/h",
    precipitaciones: "5 mm",
    date: "2023-10-03",
  },
  {
    id: "4",
    humedad: "55%",
    temperatura: "25°C",
    viento: "12 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-04",
  },
  {
    id: "5",
    humedad: "80%",
    temperatura: "18°C",
    viento: "8 km/h",
    precipitaciones: "10 mm",
    date: "2023-10-05",
  },
  {
    id: "6",
    humedad: "75%",
    temperatura: "21°C",
    viento: "14 km/h",
    precipitaciones: "2 mm",
    date: "2023-10-06",
  },
  {
    id: "7",
    humedad: "68%",
    temperatura: "23°C",
    viento: "16 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-07",
  },
  {
    id: "8",
    humedad: "72%",
    temperatura: "19°C",
    viento: "18 km/h",
    precipitaciones: "7 mm",
    date: "2023-10-08",
  },
  {
    id: "9",
    humedad: "60%",
    temperatura: "22°C",
    viento: "15 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-09",
  },
  {
    id: "10",
    humedad: "65%",
    temperatura: "24°C",
    viento: "10 km/h",
    precipitaciones: "1 mm",
    date: "2023-10-10",
  },
  {
    id: "11",
    humedad: "70%",
    temperatura: "20°C",
    viento: "20 km/h",
    precipitaciones: "5 mm",
    date: "2023-10-11",
  },
  {
    id: "12",
    humedad: "55%",
    temperatura: "25°C",
    viento: "12 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-12",
  },
  {
    id: "13",
    humedad: "80%",
    temperatura: "18°C",
    viento: "8 km/h",
    precipitaciones: "10 mm",
    date: "2023-10-13",
  },
  {
    id: "14",
    humedad: "75%",
    temperatura: "21°C",
    viento: "14 km/h",
    precipitaciones: "2 mm",
    date: "2023-10-14",
  },
  {
    id: "15",
    humedad: "68%",
    temperatura: "23°C",
    viento: "16 km/h",
    precipitaciones: "0 mm",
    date: "2023-10-15",
  },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.humedad.toLowerCase().includes(term) ||
        order.temperatura.toLowerCase().includes(term) ||
        order.viento.toLowerCase().includes(term) ||
        order.precipitaciones.toLowerCase().includes(term) ||
        order.date.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Humedad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Temperatura
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Viento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Precipitaciones
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredOrders.map((order, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.humedad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.temperatura}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.viento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.precipitaciones}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
