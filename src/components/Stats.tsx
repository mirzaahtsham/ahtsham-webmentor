export function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100+", label: "Happy Clients" },
  ];

  return (
    <section className="bg-gray-800 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold md:text-5xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 dark:text-gray-400">{stat.value}</div>
              <div className="text-white dark:text-gray-400 ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
