type ModeCardProps = {
  color: string;
  title: string;
  handleClick: (mode: string) => void;
};

const ModeCard = ({ color, title, handleClick }: ModeCardProps) => {
  const colorList: Record<string, string> = {
    blue: "bg-blue-400 text-blue-900",
    green: "bg-green-400 text-green-900",
    yellow: "bg-yellow-400 text-yellow-900",
  };

  return (
    <div
      onClick={() => handleClick(title)}
      className={`${colorList[color]}
  font-semibold rounded-3xl py-14 text-center w-3/4 cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default ModeCard;
