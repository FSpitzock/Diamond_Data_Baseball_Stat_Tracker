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
      <div>
        <h1 className="text-2xl font-bold mb-2">{player.firstName}</h1>
        <h2 className="text-lg font-bold mb-2">{player.lastName}</h2>
        <div className="flex flex-row gap-4 justify-center">
          <div className="bg-blue-500 h-10 w-10 text-white px-2 rounded-full">
          </div>
          <h3 className="text-md font-bold mb-2">{player.team}</h3>
          {player.position}
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default PlayerDetails;

export function DemoPlayerDetails() {
  return <PlayerDetails player={newPlayer} />;
}
