type CardProps = {
  cardTitle: string;
  cardLevel: string;
  isTitleCard: boolean;
};

const Card = ({ cardTitle, cardLevel, isTitleCard }: CardProps) => {
  return (
    <div
      className={`${
        isTitleCard ? "bg-red-800 text-white" : "text-red-900"
      } font-semibold rounded-3xl py-14 text-center w-3/4 cursor-pointer`}
    >
      {isTitleCard && (
        <span className="text-3xl block my-1">LEVEL {cardLevel}</span>
      )}
      <span className="text-xl uppercase">( {cardTitle} )</span>
    </div>
  );
};

export default Card;
