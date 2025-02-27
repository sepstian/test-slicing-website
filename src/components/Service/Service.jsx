import React from 'react';

const services = [
    {
      title: "Web Design Project",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      borderColor: "border-red-500",
      textColor: "text-red-500",
    },
    {
      title: "Digital Artwork",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Website Development",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      borderColor: "border-green-500",
      textColor: "text-green-500",
    },
  ];
  
const Services = () => {
    return (
        <section className="p-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {services.map((service, index) => (
            <div
            key={index}
            className={`p-6 border-t-4 ${service.borderColor} bg-white shadow-lg rounded-lg w-full md:w-1/3 text-center`}
            >
            <div className={`text-4xl mb-3 ${service.textColor}`}>
                {/* Tempatkan icon di sini jika ada */}
                ⬤
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
            </div>
        ))}
        </section>
    );
};

export default Services;
  