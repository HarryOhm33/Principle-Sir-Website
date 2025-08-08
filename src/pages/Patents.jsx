export default function Patents() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects & Patents</h1>

      <h2 className="text-2xl font-semibold mb-2">Funded Projects</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>MeitY 3D Printing Project – ₹54 Cr (Co-PI, CDAC Kolkata)</li>
        <li>IoT/Drone Agriculture Monitoring – ₹44.6 Lakh</li>
        <li>Multiple AKTU/DST funded student innovation projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Patents Filed</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Multifunctional Agribot</li>
        <li>Optimized Air Fuel Mixing Device (AFMFD)</li>
        <li>Engine Efficiency Enhancement Designs</li>
      </ul>
    </div>
  );
}
