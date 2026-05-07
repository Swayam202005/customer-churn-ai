function Customers() {

  const customers = [
    {
      name: "John Doe",
      risk: "High",
      revenue: "$1,200"
    },
    {
      name: "Sarah Smith",
      risk: "Low",
      revenue: "$890"
    }
  ];

  return (

    <div>

      <h1 className="text-5xl font-black mb-8">
        Customers
      </h1>

      <div className="space-y-5">

        {customers.map((c, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between"
          >

            <div>
              <h2 className="text-2xl font-bold">
                {c.name}
              </h2>

              <p className="text-gray-400">
                Revenue: {c.revenue}
              </p>
            </div>

            <div
              className={`text-xl font-bold ${
                c.risk === "High"
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {c.risk} Risk
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Customers;