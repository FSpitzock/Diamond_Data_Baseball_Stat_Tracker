import BaseballCardFront from "@/components/ui/BaseballCardFront";


export default function BaseballCard() {
  const stats = { atBats: 12, hits: 5, homeRuns: 1, rbi: 3 };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <BaseballCardFront
        imageSrc="../src/assets/ethan_pitcher.jpg"
        alt="Player in action"
        name="Ethan Spitzock"
        team="Oviedo Outlaws"
        position="1B"
        stats={stats}
        onClick={() => console.log("card clicked")}
      />
    </div>
  );
}