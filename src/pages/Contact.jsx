export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-2">
        <strong>Email:</strong>{" "}
        <a href="mailto:sandeeptiwari1970@gmail.com" className="text-blue-600">
          sandeeptiwari1970@gmail.com
        </a>
      </p>
      <p className="mb-2">
        <strong>Phone:</strong> +91 9891460727 / 9415427948
      </p>
      <p className="mb-2">
        <strong>Address:</strong> CPC-001, Omaxe Palm Green Society, Sector MU,
        Greater Noida
      </p>
      <p className="mb-2">
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/dr-sandeep-tiwari-7a186029"
          className="text-blue-600"
          target="_blank"
        >
          View Profile
        </a>
      </p>
    </div>
  );
}
