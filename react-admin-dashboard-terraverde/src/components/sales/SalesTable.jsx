import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Edit, Trash2 } from "lucide-react";

const SALES_DATA = [
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440000",
    name_producto: "Café Orgánico Premium",
    latitud: "4.7110",
    longitud: "-74.0721",
    fecha: "2023-10-01",
    hora: "08:30",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440001",
    name_producto: "Café Tradicional",
    latitud: "4.6097",
    longitud: "-74.0817",
    fecha: "2023-10-02",
    hora: "09:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440002",
    name_producto: "Café Descafeinado",
    latitud: "4.7100",
    longitud: "-74.0720",
    fecha: "2023-10-03",
    hora: "10:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440003",
    name_producto: "Café Gourmet",
    latitud: "4.6090",
    longitud: "-74.0810",
    fecha: "2023-10-04",
    hora: "11:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440004",
    name_producto: "Café Espresso",
    latitud: "4.7115",
    longitud: "-74.0725",
    fecha: "2023-10-05",
    hora: "12:00",
    status: "Cancelado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440005",
    name_producto: "Café Molido",
    latitud: "4.6095",
    longitud: "-74.0815",
    fecha: "2023-10-06",
    hora: "13:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440006",
    name_producto: "Café Instantáneo",
    latitud: "4.7120",
    longitud: "-74.0730",
    fecha: "2023-10-07",
    hora: "14:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440007",
    name_producto: "Café Orgánico de Altura",
    latitud: "4.6100",
    longitud: "-74.0820",
    fecha: "2023-10-08",
    hora: "15:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440008",
    name_producto: "Café Tradicional Suave",
    latitud: "4.7125",
    longitud: "-74.0735",
    fecha: "2023-10-09",
    hora: "16:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440009",
    name_producto: "Café Descafeinado Premium",
    latitud: "4.6105",
    longitud: "-74.0825",
    fecha: "2023-10-10",
    hora: "17:00",
    status: "Cancelado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440010",
    name_producto: "Café Gourmet Premium",
    latitud: "4.7130",
    longitud: "-74.0740",
    fecha: "2023-10-11",
    hora: "18:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440011",
    name_producto: "Café Espresso Doble",
    latitud: "4.6110",
    longitud: "-74.0830",
    fecha: "2023-10-12",
    hora: "19:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440012",
    name_producto: "Café Grano de Colombia",
    latitud: "4.7135",
    longitud: "-74.0745",
    fecha: "2023-10-13",
    hora: "20:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440013",
    name_producto: "Café Molido Suave",
    latitud: "4.6115",
    longitud: "-74.0835",
    fecha: "2023-10-14",
    hora: "21:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440014",
    name_producto: "Café Instantáneo Gourmet",
    latitud: "4.7140",
    longitud: "-74.0750",
    fecha: "2023-10-15",
    hora: "22:00",
    status: "Cancelado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440015",
    name_producto: "Café Orgánico Ecológico",
    latitud: "4.6120",
    longitud: "-74.0840",
    fecha: "2023-10-16",
    hora: "23:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440016",
    name_producto: "Café Tradicional Extra Fino",
    latitud: "4.7145",
    longitud: "-74.0755",
    fecha: "2023-10-17",
    hora: "00:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440017",
    name_producto: "Café Descafeinado Natural",
    latitud: "4.6125",
    longitud: "-74.0845",
    fecha: "2023-10-18",
    hora: "01:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440018",
    name_producto: "Café Gourmet de Venezuela",
    latitud: "4.7150",
    longitud: "-74.0760",
    fecha: "2023-10-19",
    hora: "02:00",
    status: "Pendiente",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440019",
    name_producto: "Café Expreso Intenso",
    latitud: "4.6130",
    longitud: "-74.0850",
    fecha: "2023-10-20",
    hora: "03:00",
    status: "Cancelado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440020",
    name_producto: "Café Grano de Montaña",
    latitud: "4.7155",
    longitud: "-74.0765",
    fecha: "2023-10-21",
    hora: "04:00",
    status: "Completado",
  },
  {
    id_venta: "550e8400-e29b-41d4-a716-446655440021",
    name_producto: "Café Molido Tradicional",
    latitud: "4.6135",
    longitud: "-74.0855",
    fecha: "2023-10-22",
    hora: "05:00",
    status: "Pendiente",
  },
];

const SalesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredSales, setFilteredSales] = useState(SALES_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const salesPerPage = 6;
  const [isEditing, setIsEditing] = useState(false);
  const [currentSale, setCurrentSale] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterSales(term, statusFilter, startDate, endDate);
  };

  const handleStatusFilter = (e) => {
    const status = e.target.value;
    setStatusFilter(status);
    filterSales(searchTerm, status, startDate, endDate);
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    filterSales(searchTerm, statusFilter, date, endDate);
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    filterSales(searchTerm, statusFilter, startDate, date);
  };

  const filterSales = (term, status, start, end) => {
    const filtered = SALES_DATA.filter((sale) => {
      const saleDate = new Date(sale.fecha);
      const startDate = start ? new Date(start) : new Date("1970-01-01");
      const endDate = end ? new Date(end) : new Date();
      return (
        sale.name_producto.toLowerCase().includes(term) &&
        (status === "" || sale.status === status) &&
        saleDate >= startDate &&
        saleDate <= endDate
      );
    });
    setFilteredSales(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Get current sales
  const indexOfLastSale = currentPage * salesPerPage;
  const indexOfFirstSale = indexOfLastSale - salesPerPage;
  const currentSales = filteredSales.slice(indexOfFirstSale, indexOfLastSale);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditClick = (sale) => {
    setCurrentSale(sale);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentSale({ ...currentSale, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedSales = filteredSales.map((sale) =>
      sale.id_venta === currentSale.id_venta ? currentSale : sale
    );
    setFilteredSales(updatedSales);
    setIsEditing(false);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Ventas</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar producto..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div>
            <select
              className="bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={handleStatusFilter}
            >
              <option value="">Todos los estados</option>
              <option value="Completado">Completado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID Venta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Producto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Latitud
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Longitud
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {currentSales.map((sale) => (
              <motion.tr
                key={sale.id_venta}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sale.id_venta}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sale.name_producto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {sale.latitud}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {sale.longitud}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {sale.fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {sale.hora}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      sale.status === "Completado"
                        ? "bg-green-800 text-green-100"
                        : sale.status === "Pendiente"
                        ? "bg-yellow-800 text-yellow-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {sale.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    className="text-indigo-400 hover:text-indigo-300 mr-2"
                    onClick={() => handleEditClick(sale)}
                  >
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-gray-300">
          Página {currentPage} de{" "}
          {Math.ceil(filteredSales.length / salesPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredSales.length / salesPerPage)
          }
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      {isEditing && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-100 mb-4">
            Editar Venta
          </h3>
          <form onSubmit={handleEditSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Producto
                </label>
                <input
                  type="text"
                  name="name_producto"
                  value={currentSale.name_producto}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Latitud
                </label>
                <input
                  type="text"
                  name="latitud"
                  value={currentSale.latitud}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Longitud
                </label>
                <input
                  type="text"
                  name="longitud"
                  value={currentSale.longitud}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Fecha
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={currentSale.fecha}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Hora
                </label>
                <input
                  type="time"
                  name="hora"
                  value={currentSale.hora}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Estado
                </label>
                <select
                  name="status"
                  value={currentSale.status}
                  onChange={handleEditChange}
                  className="mt-1 block w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Completado">Completado</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default SalesTable;
