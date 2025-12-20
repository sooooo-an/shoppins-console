type Props = {
  badge?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

const LandingLayout = ({
  badge,
  title,
  description,
  children,
  className,
}: Props) => {
  return (
    <section className={`py-20 px-6 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto mb-12 text-center">
        {badge && (
          <span className="bg-teal-500 text-white px-2 py-1 rounded-sm mb-4 text-sm font-bold">
            {badge}
          </span>
        )}
        <h3 className="text-teal-700 mb-4 text-4xl font-bold mt-3">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      {children}
    </section>
  );
};

export default LandingLayout;
