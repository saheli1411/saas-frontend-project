"use client";

const mockPlans = [
  { id: 1, name: "Basic", price: "$9/mo", features: ["1 User", "Basic Support", "100MB Storage"] },
  { id: 2, name: "Pro", price: "$29/mo", features: ["5 Users", "Priority Support", "1GB Storage"] },
  { id: 3, name: "Enterprise", price: "$99/mo", features: ["Unlimited Users", "24/7 Support", "Unlimited Storage"] },
];

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPlans.map((plan) => (
          <div key={plan.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-800 font-bold text-2xl mb-4">{plan.price}</p>
            <ul className="mb-4 space-y-1">
              {plan.features.map((f, i) => (
                <li key={i} className="text-gray-600">• {f}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
