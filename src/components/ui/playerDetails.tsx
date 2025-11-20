import React from "react";
import { Player } from "../../types/player";
import ethan_outlaw from "../../assets/ethan_outlaw.jpg"

const newPlayer: Player = {
  id: 1,
  firstName: "Ethan",
  lastName: "Spitzock",
  height: "4 ft 7",
  weight: 90,
  image: ethan_outlaw,
  position: "1B",
  birthDate: "08-18-2016",
  team: "Oviedo Outlaws",
  totalStats: null,
};

type PlayerDetailsProps = {
  player: Player;
};

function PlayerDetails({ player }: PlayerDetailsProps) {
  return (
    <section className="flex w-[100%] py-8 items-center justify-between mx-auto">
      <img
        src={player.image}
        alt={`${player.firstName} ${player.lastName}`}
        className="w-[50%] rounded-xl bg-gray-300"
      />
      <div className="flex flex-grow flex-col px-16 gap-4 items-start">
        <div className="flex flex-col items-start">
          <h1>{player.firstName}</h1>
          <h2>{player.lastName}</h2>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="bg-blue-500 h-10 w-10 text-white px-2 rounded-full">
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>{player.team}</p>
          </div>
          <div className="flex w-8 h-6 flex-col border border-blue-500 rounded items-center justify-center">
            <h3>{player.position}</h3>
          </div>
        </div>
        <div className="flex w-[80%] lg:max-w-[50%] flex-row gap-4 justify-between">
          <div className="flex flex-col items-start">
            <h4>Height</h4>
            <p>{player.height} in</p>
          </div>
          <div className="flex flex-col items-start">
            <h4>Weight</h4>
            <p>{player.weight} lbs</p>
          </div>
          <div className="flex flex-col items-start">
            <h4>Birth Date</h4>
            <p>{player.birthDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayerDetails;

export function DemoPlayerDetails() {
  return <PlayerDetails player={newPlayer} />;
}
