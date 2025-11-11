import React from "react";
import { Player } from "../../types/player";

const newPlayer: Player = {
  id: 1,
  firstName: "Dwayne",
  lastName: "Burns",
  height: 72,
  weight: 180,
  image: "",
  position: "P",
  birthDate: "2000-01-01",
  team: "Marlins",
  totalStats: null,
};

type PlayerDetailsProps = {
  player: Player;
};

function PlayerDetails({ player }: PlayerDetailsProps) {
  return (
    <section className="flex items-center justify-between">
      <img
        src={player.image || "#"}
        alt={`${player.firstName} ${player.lastName}`}
        className="w-96 h-64 rounded bg-gray-300"
      />
      <div className="flex flex-col items-start">
        <h1>{player.firstName}</h1>
        <h2>{player.lastName}</h2>
        <div className="flex flex-row gap-4 justify-center">
          <div className="bg-blue-500 h-10 w-10 text-white px-2 rounded-full">
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>{player.team}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{player.position}</h3>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center">
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
