export function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100+", label: "Happy Clients" },
  ];

  return (
    <section className="bg-gray-800 dark:bg-gray-900 text-white dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-muted-foreground dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
