import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Stayed", value: 73 },
  { name: "Churned", value: 27 },
];

const COLORS = ["#06b6d4", "#ef4444"];

function Charts() {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">

      <h2 className="text-2xl font-bold mb-6">
        Customer Analytics
      </h2>

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Charts;