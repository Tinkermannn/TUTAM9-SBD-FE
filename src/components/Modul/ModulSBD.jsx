import React from 'react';

const modules = [
  {
    title: "Modul 1",
    description: "Setup RDBMS"
  },
  {
    title: "Modul 2",
    description: "Relational Database Design & Data Definition/Manipulation"
  },
  {
    title: "Modul 3",
    description: "Join, Views, and Advanced Query"
  },
  {
    title: "Modul 4",
    description: "Normalization"
  },
  {
    title: "Modul 5",
    description: "Express JS"
  },
  {
    title: "Modul 6",
    description: "Advanced Express JS"
  },
  {
    title: "Modul 7",
    description: "MongoDB (NOSQL)"
  },
  {
    title: "Modul 8",
    description: "Basic Frontend"
  },
  {
    title: "Modul 9",
    description: "Advanced Frontend"
  },
];

export default function ModulSBD() {
  return (
    <div className="w-full h-screen m-auto bg-gradient-to-b from-orange-900/80 via-green-400 to-fuchsia-900 py-16 px-20 flex flex-col gap-10 items-center">
      <div className="w-full h-full m-auto max-w-screen-2xl flex flex-col items-center gap-5 bg-white/30 px-5 pt-5 rounded-xl">
        <h2 className="text-4xl font-bold text-green-100">Modul Sistem Basis Data</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {modules.map((modul, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-green-700 mb-2">{modul.title}</h3>
              <p className="text-green-600">{modul.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
