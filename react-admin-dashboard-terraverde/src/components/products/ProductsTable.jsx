import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    nombre: "Café Orgánico Premium",
    precio: 25.5,
    tamaño: "500g",
    stock: 120,
    id_productor: 1,
    ventas: 350,
    categoria: "Orgánico",
  },
  {
    id: 2,
    nombre: "Café Tradicional",
    precio: 18.0,
    tamaño: "1kg",
    stock: 80,
    id_productor: 2,
    ventas: 200,
    categoria: "Tradicional",
  },
  {
    id: 3,
    nombre: "Café Descafeinado Suave",
    precio: 20.75,
    tamaño: "250g",
    stock: 50,
    id_productor: 3,
    ventas: 100,
    categoria: "Descafeinado",
  },
  {
    id: 4,
    nombre: "Café Gourmet de Altura",
    precio: 30.0,
    tamaño: "500g",
    stock: 60,
    id_productor: 4,
    ventas: 180,
    categoria: "Gourmet",
  },
  {
    id: 5,
    nombre: "Café Expreso Intenso",
    precio: 22.5,
    tamaño: "250g",
    stock: 40,
    id_productor: 5,
    ventas: 90,
    categoria: "Expreso",
  },
  {
    id: 6,
    nombre: "Café Grano de Montaña",
    precio: 19.5,
    tamaño: "1kg",
    stock: 150,
    id_productor: 6,
    ventas: 300,
    categoria: "Grano",
  },
  {
    id: 7,
    nombre: "Café Molido Tradicional",
    precio: 18.5,
    tamaño: "500g",
    stock: 100,
    id_productor: 7,
    ventas: 250,
    categoria: "Molido",
  },
  {
    id: 8,
    nombre: "Café Instantáneo Clásico",
    precio: 15.0,
    tamaño: "200g",
    stock: 180,
    id_productor: 8,
    ventas: 400,
    categoria: "Instantáneo",
  },
  {
    id: 9,
    nombre: "Café Orgánico de Altura",
    precio: 27.0,
    tamaño: "500g",
    stock: 110,
    id_productor: 9,
    ventas: 220,
    categoria: "Orgánico",
  },
  {
    id: 10,
    nombre: "Café Tradicional Suave",
    precio: 18.75,
    tamaño: "750g",
    stock: 90,
    id_productor: 10,
    ventas: 200,
    categoria: "Tradicional",
  },
  {
    id: 11,
    nombre: "Café Descafeinado Premium",
    precio: 21.0,
    tamaño: "250g",
    stock: 60,
    id_productor: 11,
    ventas: 150,
    categoria: "Descafeinado",
  },
  {
    id: 12,
    nombre: "Café Gourmet Premium",
    precio: 32.5,
    tamaño: "500g",
    stock: 45,
    id_productor: 12,
    ventas: 130,
    categoria: "Gourmet",
  },
  {
    id: 13,
    nombre: "Café Expreso Doble",
    precio: 23.0,
    tamaño: "250g",
    stock: 80,
    id_productor: 13,
    ventas: 170,
    categoria: "Expreso",
  },
  {
    id: 14,
    nombre: "Café Grano de Colombia",
    precio: 28.0,
    tamaño: "1kg",
    stock: 50,
    id_productor: 14,
    ventas: 120,
    categoria: "Grano",
  },
  {
    id: 15,
    nombre: "Café Molido Suave",
    precio: 19.99,
    tamaño: "500g",
    stock: 140,
    id_productor: 15,
    ventas: 290,
    categoria: "Molido",
  },
  {
    id: 16,
    nombre: "Café Instantáneo Gourmet",
    precio: 18.5,
    tamaño: "200g",
    stock: 150,
    id_productor: 16,
    ventas: 320,
    categoria: "Instantáneo",
  },
  {
    id: 17,
    nombre: "Café Orgánico Ecológico",
    precio: 29.0,
    tamaño: "500g",
    stock: 70,
    id_productor: 17,
    ventas: 160,
    categoria: "Orgánico",
  },
  {
    id: 18,
    nombre: "Café Tradicional Extra Fino",
    precio: 21.0,
    tamaño: "1kg",
    stock: 85,
    id_productor: 18,
    ventas: 230,
    categoria: "Tradicional",
  },
  {
    id: 19,
    nombre: "Café Descafeinado Natural",
    precio: 22.0,
    tamaño: "250g",
    stock: 40,
    id_productor: 19,
    ventas: 110,
    categoria: "Descafeinado",
  },
  {
    id: 20,
    nombre: "Café Gourmet de Venezuela",
    precio: 33.0,
    tamaño: "500g",
    stock: 65,
    id_productor: 20,
    ventas: 140,
    categoria: "Gourmet",
  },
];
const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterProducts(term, categoryFilter, minPrice, maxPrice);
  };

  const handleCategoryFilter = (e) => {
    const category = e.target.value;
    setCategoryFilter(category);
    filterProducts(searchTerm, category, minPrice, maxPrice);
  };

  const handleMinPriceChange = (e) => {
    const price = e.target.value;
    setMinPrice(price);
    filterProducts(searchTerm, categoryFilter, price, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const price = e.target.value;
    setMaxPrice(price);
    filterProducts(searchTerm, categoryFilter, minPrice, price);
  };

  const filterProducts = (term, category, minPrice, maxPrice) => {
    const filtered = PRODUCT_DATA.filter((product) => {
      const matchesTerm = product.nombre.toLowerCase().includes(term);
      const matchesCategory = category === "" || product.categoria === category;
      const matchesMinPrice =
        minPrice === "" || product.precio >= parseFloat(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || product.precio <= parseFloat(maxPrice);
      return (
        matchesTerm && matchesCategory && matchesMinPrice && matchesMaxPrice
      );
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Lista de Productos
        </h2>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div>
            <select
              className="bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={categoryFilter}
              onChange={handleCategoryFilter}
            >
              <option value="">Todas las categorías</option>
              <option value="Orgánico">Orgánico</option>
              <option value="Tradicional">Tradicional</option>
              <option value="Descafeinado">Descafeinado</option>
              <option value="Gourmet">Gourmet</option>
              <option value="Espresso">Espresso</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Precio mínimo"
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleMinPriceChange}
              value={minPrice}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Precio máximo"
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleMaxPriceChange}
              value={maxPrice}
            />
          </div>
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
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Precio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Tamaño
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ventas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {currentProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.precio.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.tamaño}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.ventas}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.categoria}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
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
          {Math.ceil(filteredProducts.length / productsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredProducts.length / productsPerPage)
          }
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
