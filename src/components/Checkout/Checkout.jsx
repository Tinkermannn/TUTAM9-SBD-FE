import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { toast, ToastContainer, Slide } from "react-toastify";

export default function Checkout() {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);
  const [store, setStore] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const itemRes = await axios.get(`${import.meta.env.VITE_API}item/byId/${item_id}`);
      const storeId = itemRes.data.payload.store_id;
      if (!storeId) throw new Error("Store ID tidak ditemukan.");

      const storeRes = await axios.get(`${import.meta.env.VITE_API}store/${storeId}`);
      if (storeRes.data.success && storeRes.data.payload) {
        setItem(itemRes.data.payload);
        setStore(storeRes.data.payload);
      } else {
        throw new Error("Data toko tidak ditemukan.");
      }
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [item_id]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(prev - 1, 1)
    );
  };

  const handleCheckout = async () => {
    try {
      const user_id = localStorage.getItem("user_id");
      if (!user_id || user_id === "undefined" || user_id === "null") {
        setError("User is not logged in atau user_id tidak valid.");
        return;
      }

      console.log("DEBUG - Data transaksi yang dikirim:", {
        item_id: item.id,
        quantity,
        user_id,
      });

      const transactionResponse = await axios.post(`${import.meta.env.VITE_API}transaction/create`, {
        item_id: item.id,
        quantity,
        user_id,
      });

      console.log("DEBUG - Response dari /transaction/create:", transactionResponse.data);

      await axios.post(`${import.meta.env.VITE_API}transaction/pay/${transactionResponse.data.payload.id}`);
      toast.success("Pembayaran berhasil!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);      

    } catch (err) {
      console.error("Gagal melakukan transaksi", err);
      if (err.response) {
        console.error("DETAIL ERROR RESPONSE:", err.response.data);
      }
      setError("Gagal melakukan transaksi");
    }
  };

  const subtotal = item.price * quantity;

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-blue-200 max-md:px-4 max-md:pt-16 max-md:min-h-full px-20 pt-20">
        <div className="w-full max-w-screen-2xl bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-10 max-md:gap-6">
          <div className="max-md:order-2">
            <img 
              src={item.image_url} 
              alt={item.name} 
              className="w-full h-64 object-cover rounded-lg mb-4 max-md:h-48" 
            />
            <h1 className="text-2xl font-bold mb-2 max-md:text-xl">{item.name}</h1>
            <p className="text-gray-600 mb-1">Harga: <strong>IDR {parseFloat(item.price).toLocaleString('id-ID')}</strong></p>
            <p className="text-gray-500 mb-1">Stock: {item.stock}</p>
            <p className="text-gray-500 mb-1">Store: {store?.name}</p>
          </div>

          {/* RIGHT - Checkout Summary */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-sm max-md:order-1">
            <h2 className="text-xl font-semibold mb-4 max-md:text-lg">Ringkasan Pembelian</h2>

            {/* Quantity control */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700">Jumlah:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="bg-gray-300 text-black w-8 h-8 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="bg-gray-300 text-black w-8 h-8 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between mb-6">
              <span className="text-gray-700 font-medium">Subtotal:</span>
              <span className="text-lg font-semibold text-blue-600">
                IDR {parseFloat(subtotal).toLocaleString("id-ID")}
              </span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} transition={Slide} limit={3} />
    </>
  );
}