import React from "react";
import {
  HiOutlineBell,
  HiOutlinePresentationChartBar,
  HiOutlineThumbUp,
  HiOutlineUserGroup,
  HiSearch,
  HiWifi,
} from "react-icons/hi";

const SERVICES_DATA = [
  {
    id: 1,
    title: "SEO Services",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiSearch fontSize={28} />,
  },
  {
    id: 2,
    title: "Collaborative Content",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiOutlineUserGroup fontSize={28} />,
  },
  {
    id: 3,
    title: "Innovation, Creativity on the go",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiOutlinePresentationChartBar fontSize={28} />,
  },
  {
    id: 4,
    title: "24/7 Customer Feedback",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiOutlineThumbUp fontSize={28} />,
  },
  {
    id: 5,
    title: "Recieve instant updates",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiOutlineBell fontSize={28} />,
  },
  {
    id: 6,
    title: "No limit to Bandwidth",
    notes:
      "This is a wider card with supporting text below as a natural content.",
    icon: <HiWifi fontSize={28} />,
  },
];

function Services() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            What we do, How we do it.
          </h2>
          <p className="text-lg sm:text-2xl mb-6 md:mb-14 ">
            Save loads of data working with our all new meta-physical virtual
            reality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          <ServicesCard services={SERVICES_DATA} />
        </div>
      </div>
    </section>
  );
}

export default Services;

function ServicesCard({ services }) {
  return services.map((service) => {
    return (
      <div
        className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        key={service.id}
      >
        <div className="card-body items-center text-center gap-4">
          <span>{service.icon}</span>
          <h2 className="card-title">{service.title}</h2>
          <p className="">{service.notes}</p>
        </div>
      </div>
    );
  });
}
