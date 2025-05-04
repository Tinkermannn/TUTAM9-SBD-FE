import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slide, toast, ToastContainer } from 'react-toastify';

export default function EditTodoPage({ todo, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...todo });

  useEffect(() => {
    setFormData({ ...todo });
  }, [todo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${import.meta.env.VITE_API}todo`, formData);

      if (res.data.success) {
        onSave(res.data.payload); // update list
      } else {
        toast.error('Failed to update');
      }
    } catch (err) {
      console.error('Edit error:', err);
      toast.error('Update failed due to server error.');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Priority (1–5)</label>
        <input
          type="number"
          name="priority"
          min="1"
          max="5"
          value={formData.priority}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="due_date"
          value={formData.due_date?.slice(0, 10)}
          onChange={handleChange}
          className="border p-2"
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
    <ToastContainer 
      position='top-center'
      autoClose={3000}
      closeOnClick
      limit={3}
      transition={Slide}
    ></ToastContainer>
    </>
  );
}
