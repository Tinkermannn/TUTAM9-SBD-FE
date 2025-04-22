import React from 'react';

const modules = [
  {
    title: "Modul 1",
    description: "Setup VM and Linux Introduction"
  },
  {
    title: "Modul 2",
    description: "Basic Bootloader"
  },
  {
    title: "Modul 3",
    description: "Process Creation"
  },
  {
    title: "Modul 4",
    description: "Exec Family"
  },
  {
    title: "Modul 5",
    description: "Signals"
  },
  {
    title: "Modul 6",
    description: "File I/O"
  },
  {
    title: "Modul 7",
    description: "Pipe"
  },
  {
    title: "Modul 8",
    description: "Input Parsing"
  },
  {
    title: "Modul 9",
    description: "Input Parsing"
  },
];

export default function ModulOS() {
  return (
    <div className="w-full h-screen m-auto bg-gradient-to-b from-fuchsia-900/80 via-orange-600 to-fuchsia-900 py-16 px-20 flex flex-col gap-10 items-center">
      <div className="w-full h-full m-auto max-w-screen-2xl flex flex-col items-center gap-5 bg-white/30 px-5 pt-5 rounded-xl">
        <h2 className="text-4xl font-bold text-orange-400/80">Modul Operating System</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {modules.map((modul, index) => (
            <div key={index} className="bg-orange-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">{modul.title}</h3>
              <p className="text-orange-600">{modul.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
