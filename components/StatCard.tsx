type StatCardProps = {
  title: string;
  description: string;
  stat: string | number;
  statLabel: string;
  borderColor?: string;
  className?: string; 
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
  stat,
  statLabel,
  borderColor = "border-white",
  className = "",
}) => {
  return (
    <div className={`bg-black/50 p-5 rounded-4xl space-y-6 ${className}`}>
      <div>
        <h3 className={`text-xl xl:text-3xl xl:leading-10 pl-4 border-l-2 mb-5 ${borderColor}`}>
          {title}
        </h3>
        <p className="text-gray-light">{description}</p>
      </div>

      <div>
        <h4 className="text-xl xl:text-3xl mb-2">{stat.toLocaleString()}</h4>
        <p className="uppercase">{statLabel}</p>
      </div>
    </div>
  );
};

export default StatCard;
