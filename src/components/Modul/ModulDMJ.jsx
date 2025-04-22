import React from 'react';

const modules = [
  {
    title: "Modul 1",
    description: "Multi-access & Multi-area OSPFv2"
  },
  {
    title: "Modul 2",
    description: "Enhanced Interior Gateway Routing Protocol (EIGRP)"
  },
  {
    title: "Modul 3",
    description: "Network Address Translation (NAT) & Access Control List (ACL)"
  },
  {
    title: "Modul 4",
    description: "Wide Area Network (WAN PPP & Frame Relay)"
  },
  {
    title: "Modul 5",
    description: "Virtual Private Network (VPN)"
  },
  {
    title: "Modul 6",
    description: "Quality of Service (QoS) & Network Management"
  },
  {
    title: "Modul 7",
    description: "Network Monitoring"
  },
  {
    title: "Modul 8",
    description: "Network Virtualization"
  },
  {
    title: "Modul 9",
    description: "Network Automation"
  },
];

export default function ModulDMJ() {
  return (
    <div className="w-full h-screen m-auto bg-gradient-to-b from-pink-600/80 via-green-500/90 to-fuchsia-900 py-16 px-20 flex flex-col gap-10 items-center">
      <div className="w-full h-full m-auto max-w-screen-2xl flex flex-col items-center gap-5 bg-white/30 px-5 pt-5 rounded-xl">
        <h2 className="text-4xl font-bold text-pink-700">Modul Dasar Manajemen Jaringan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {modules.map((modul, index) => (
            <div key={index} className="bg-pink-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">{modul.title}</h3>
              <p className="text-pink-600">{modul.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
