

const CardExperience = ({date, company, paragraphExperience}) => {
  return (
    <div className="cardExperience animationOpacity">
      <div className="contentExperience">
        <div className=" h-full flex flex-col justify-between">
          <p className="italic  font-bold">{date}</p>
          <h1 className="text-4xl text-YellowMain text-center font-bold uppercase">
            {company}
          </h1>
          <p className="text-center">{paragraphExperience}</p>
        </div>
      </div>
    </div>
  );
}

export default CardExperience