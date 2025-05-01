import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Loading from "../../components/Loading/Loading";
import ReactPaginate from "react-paginate";

export default function Item() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Initialize navigate

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/item/");
      const user = localStorage.getItem("store_id");
      setItems(response.data.payload);
    } catch (err) {
      setError("Failed to fetch data from server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleBuy = (item) => {
    const user = localStorage.getItem("token");

    if (!user) {
      alert("You need to log in to proceed with checkout.");
      navigate("/user/login");
    } else {
      navigate(`/item/checkout/${item.id}`);
    }
  };

  return (
    <div className="w-full h-auto m-auto flex flex-col bg-gradient-to-tr from-blue-400 via-sky-500 to-blue-400">
      <div className="w-full h-full px-10 lg:px-20 flex items-center m-auto max-w-screen-2xl flex-row gap-10 my-10">
        <div className="w-full h-full flex flex-col items-center gap-5">
          <div className="text-sm lg:text-3xl font-bold text-white">Gallery</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-screen-xl">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-t from-blue-600 via-sky-600 to-sky-500 rounded-lg shadow-md hover:shadow-xl transition-all h-auto flex flex-col shadow-black/20 overflow-hidden relative"
              >
                <img
                  src={item.image_url}
                  className="mb-1 object-cover w-full h-48"
                  alt={item.name}
                />
                <div className="h-auto p-5">
                  <h3 className="text-sm lg:text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-white text-xs lg:text-sm">Price: Rp{item.price.toLocaleString()}</p>
                  <p className="text-white text-xs lg:text-sm">Stock: {item.stock}</p>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuy(item)}
                  className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-md font-semibold transition-all"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <ReactPaginate
              previousLabel={"Back"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"flex space-x-2"}
              pageClassName={"px-3 py-2 border rounded-lg cursor-pointer text-white border-white"}
              activeClassName={"bg-white text-fuchsia-800 font-bold"}
              previousClassName={"px-3 py-2 border rounded-lg cursor-pointer text-white border-white"}
              nextClassName={"px-3 py-2 border rounded-lg cursor-pointer text-white border-white"}
              breakClassName={"px-3 py-2 text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
