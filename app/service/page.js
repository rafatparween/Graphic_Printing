"use client"; // Required for interactivity if needed.

const services = [
  {
    title: "Digital Marketing",
    description:
      "We excel in crafting effective digital marketing strategies, leveraging the power of SEO, SEM, social media, and content marketing to boost your online presence and drive growth.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 15h-2v-2h2zm0-4h-2V7h2zm6 4h-4v-2h4zm0-4h-4V7h4z" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description:
      "Our team of skilled app developers can transform your ideas into user-friendly and innovative mobile and web applications, tailored to your business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zM8 17H6v-2h2zm0-4H6v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2z" />
      </svg>
    ),
  },
  {
    title: "Web Designing & Development",
    description:
      "We create visually stunning and responsive websites that not only captivate your audience but also deliver exceptional user experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm1-13h-2V4h2zm-1 12a5.978 5.978 0 0 1-3.216-.951l1.475-1.475A3.978 3.978 0 0 0 12 15a3.978 3.978 0 0 0 1.742-.426l1.475 1.475A5.978 5.978 0 0 1 12 19z" />
      </svg>
    ),
  },
  {
    title: "Printer Support & Services",
    description:
      "We provide expert printer solutions including setup, troubleshooting, and maintenance. Whether you're dealing with hardware issues or print quality problems, we’ve got you covered.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 6h-3V2H8v4H5a3 3 0 0 0-3 3v8h4v4h12v-4h4V9a3 3 0 0 0-3-3zm-7 12H8v-4h4zm5 0h-4v-4h4zM8 6V4h8v2z" />
      </svg>
    ),
  },
  {
    title: "Printer Driver Installation",
    description:
      "Our services include installing and updating printer drivers for seamless functionality. We ensure your printer is compatible and running efficiently with the latest software.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 14h-4v-2h4zm4-4H6v-2h12zm0-4H6V6h12z" />
      </svg>
    ),
  },
  {
    title: "Printer Setup & Networking",
    description:
      "We help set up your printer and connect it to your home or office network for effortless printing from any device, ensuring maximum efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4v3h6v-3h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zm-1 7H6v-2h12zm0-4H6V8h12z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 text-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-purple-300 text-xl font-medium font-dancing">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">What we do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0 justify-items-center 2xl:ml-[212px] 2xl:mr-[227px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg overflow-hidden transition-colors duration-300 h-[366px] w-[400px] bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
          >
            <div className="mb-4 flex items-center">
              {service.icon}
              <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
