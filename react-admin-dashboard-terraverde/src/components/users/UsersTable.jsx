import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
  {
    id: 1,
    name: "Carlos Pérez",
    email: "carlos@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 15,
    ultimaActividad: "2023-10-01",
  },
  {
    id: 2,
    name: "María Gómez",
    email: "maria@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 20,
    ultimaActividad: "2023-10-02",
  },
  {
    id: 3,
    name: "Juan Rodríguez",
    email: "juan@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 10,
    ultimaActividad: "2023-09-25",
  },
  {
    id: 4,
    name: "Ana Martínez",
    email: "ana@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 5,
    ultimaActividad: "2023-10-03",
  },
  {
    id: 5,
    name: "Luis Fernández",
    email: "luis@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 8,
    ultimaActividad: "2023-10-01",
  },
  {
    id: 6,
    name: "Laura Sánchez",
    email: "laura@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 12,
    ultimaActividad: "2023-10-04",
  },
  {
    id: 7,
    name: "Pedro Ramírez",
    email: "pedro@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 18,
    ultimaActividad: "2023-10-05",
  },
  {
    id: 8,
    name: "Sofía Torres",
    email: "sofia@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 7,
    ultimaActividad: "2023-09-28",
  },
  {
    id: 9,
    name: "Miguel López",
    email: "miguel@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 22,
    ultimaActividad: "2023-10-06",
  },
  {
    id: 10,
    name: "Isabel Morales",
    email: "isabel@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 10,
    ultimaActividad: "2023-10-07",
  },
  {
    id: 11,
    name: "Jorge Herrera",
    email: "jorge@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 14,
    ultimaActividad: "2023-10-08",
  },
  {
    id: 12,
    name: "Patricia Ruiz",
    email: "patricia@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 9,
    ultimaActividad: "2023-09-29",
  },
  {
    id: 13,
    name: "Andrés Castro",
    email: "andres@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 11,
    ultimaActividad: "2023-10-09",
  },
  {
    id: 14,
    name: "Gabriela Ortiz",
    email: "gabriela@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 16,
    ultimaActividad: "2023-10-10",
  },
  {
    id: 15,
    name: "Ricardo Mendoza",
    email: "ricardo@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 8,
    ultimaActividad: "2023-09-30",
  },
  {
    id: 16,
    name: "Natalia Vargas",
    email: "natalia@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 14,
    ultimaActividad: "2023-10-11",
  },
  {
    id: 17,
    name: "Fernando Ríos",
    email: "fernando@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 19,
    ultimaActividad: "2023-10-12",
  },
  {
    id: 18,
    name: "Valeria Guzmán",
    email: "valeria@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 6,
    ultimaActividad: "2023-09-27",
  },
  {
    id: 19,
    name: "Diego Paredes",
    email: "diego@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 21,
    ultimaActividad: "2023-10-13",
  },
  {
    id: 20,
    name: "Camila Peña",
    email: "camila@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 13,
    ultimaActividad: "2023-10-14",
  },
  {
    id: 21,
    name: "Sebastián Flores",
    email: "sebastian@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 17,
    ultimaActividad: "2023-10-15",
  },
  {
    id: 22,
    name: "Daniela Silva",
    email: "daniela@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 5,
    ultimaActividad: "2023-09-26",
  },
  {
    id: 23,
    name: "Alejandro Reyes",
    email: "alejandro@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 9,
    ultimaActividad: "2023-10-16",
  },
  {
    id: 24,
    name: "Paula Romero",
    email: "paula@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 15,
    ultimaActividad: "2023-10-17",
  },
  {
    id: 25,
    name: "Manuel Díaz",
    email: "manuel@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 4,
    ultimaActividad: "2023-09-24",
  },
  {
    id: 26,
    name: "Andrea Navarro",
    email: "andrea@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 12,
    ultimaActividad: "2023-10-18",
  },
  {
    id: 27,
    name: "Francisco Vega",
    email: "francisco@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 18,
    ultimaActividad: "2023-10-19",
  },
  {
    id: 28,
    name: "Lucía Campos",
    email: "lucia@example.com",
    role: "Distribuidor",
    status: "Inactivo",
    numPedidosDistribuidos: 3,
    ultimaActividad: "2023-09-23",
  },
  {
    id: 29,
    name: "Tomás Aguilar",
    email: "tomas@example.com",
    role: "Productor",
    status: "Activo",
    numProductos: 11,
    ultimaActividad: "2023-10-20",
  },
  {
    id: 30,
    name: "Elena Fuentes",
    email: "elena@example.com",
    role: "Comprador",
    status: "Activo",
    numPedidos: 20,
    ultimaActividad: "2023-10-21",
  },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterUsers(term, roleFilter, startDate, endDate);
  };

  const handleRoleFilter = (e) => {
    const role = e.target.value;
    setRoleFilter(role);
    filterUsers(searchTerm, role, startDate, endDate);
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    filterUsers(searchTerm, roleFilter, date, endDate);
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    filterUsers(searchTerm, roleFilter, startDate, date);
  };

  const filterUsers = (term, role, start, end) => {
    const filtered = userData.filter((user) => {
      const userDate = new Date(user.ultimaActividad);
      const startDate = start ? new Date(start) : new Date("1970-01-01");
      const endDate = end ? new Date(end) : new Date();
      return (
        (user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term)) &&
        (role === "" || user.role === role) &&
        userDate >= startDate &&
        userDate <= endDate
      );
    });
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Usuarios</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar usuarios..."
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
              value={roleFilter}
              onChange={handleRoleFilter}
            >
              <option value="">Todos los roles</option>
              <option value="Productor">Productor</option>
              <option value="Comprador">Comprador</option>
              <option value="Distribuidor">Distribuidor</option>
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
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Productos/Pedidos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Última Actividad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {currentUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Activo"
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    {user.role === "Productor" &&
                      `${user.numProductos} productos`}
                    {user.role === "Comprador" && `${user.numPedidos} pedidos`}
                    {user.role === "Distribuidor" &&
                      `${user.numPedidosDistribuidos} pedidos distribuidos`}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    {user.ultimaActividad}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    Editar
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Eliminar
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
          {Math.ceil(filteredUsers.length / usersPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredUsers.length / usersPerPage)
          }
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
};

export default UsersTable;
