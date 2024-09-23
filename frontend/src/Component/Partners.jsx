import React from "react";

const sponsors = [
  {
    id: 1,
    name: "Company A",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Company B",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    id: 3,
    name: "Company C",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
];

const SponsorsPage = () => {
  return (
    <div className="sponsors-container text-center py-10">
      <h1 className="text-4xl font-bold mb-8">Our Sponsors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card p-4 shadow-lg hover:shadow-xl">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="mx-auto mb-4 h-40 w-40 object-contain"
            />
            <h2 className="text-xl font-semibold">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
