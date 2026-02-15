"use client";

const mockFeatures = [
  { id: 1, title: "User Management", description: "Manage users, roles, and access." },
  { id: 2, title: "Analytics", description: "View charts, trends, and metrics." },
  { id: 3, title: "Settings", description: "Customize your profile and dashboard." },
];

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockFeatures.map((f) => (
          <div key={f.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

