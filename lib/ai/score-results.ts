type ScorableOffer = {
  priceAmount: number | null;
  direct: boolean | null;
  durationMinutes: number | null;
};

export function scoreOffer(offer: ScorableOffer) {
  const priceScore = offer.priceAmount ? Math.max(0, 120 - offer.priceAmount) : 40;
  const directScore = offer.direct ? 25 : 10;
  const durationScore =
    offer.durationMinutes ? Math.max(0, 30 - Math.floor(offer.durationMinutes / 60)) : 10;

  return priceScore + directScore + durationScore;
}