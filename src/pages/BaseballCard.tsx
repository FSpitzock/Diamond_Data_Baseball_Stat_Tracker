import BaseballCardFront from "@/components/ui/BaseballCardFront";


export default function BaseballCard() {
  const stats = { atBats: 12, hits: 5, homeRuns: 1, rbi: 3 };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <BaseballCardFront
        imageSrc="/images/player1.jpg"
        alt="Player in action"
        name="Frank Spitzock"
        team="Diamond Data"
        position="1B"
        stats={stats}
        onClick={() => console.log("card clicked")}
      />
    </div>
  );
}