-- CreateEnum
CREATE TYPE "SearchMode" AS ENUM ('INSPIRATION', 'ROUTE');

-- CreateEnum
CREATE TYPE "SearchStatus" AS ENUM ('COMPLETED', 'FAILED', 'PARTIAL');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('CITY', 'AIRPORT');

-- CreateEnum
CREATE TYPE "Cabin" AS ENUM ('ECONOMY', 'PREMIUM', 'BUSINESS', 'FIRST');

-- CreateEnum
CREATE TYPE "RecommendationSource" AS ENUM ('LOWEST_FARES_BY_DESTINATION', 'LOWEST_FARE_OFFERS', 'AVAILABLE_OFFERS');

-- CreateEnum
CREATE TYPE "FavoriteType" AS ENUM ('DESTINATION', 'SEARCH', 'OFFER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "imageUrl" TEXT,
    "preferredOrigin" TEXT,
    "preferredCurrency" TEXT NOT NULL DEFAULT 'EUR',
    "preferredCabin" "Cabin",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Search" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "rawPrompt" TEXT NOT NULL,
    "mode" "SearchMode" NOT NULL,
    "status" "SearchStatus" NOT NULL DEFAULT 'COMPLETED',
    "originCode" TEXT,
    "originType" "LocationType",
    "destinationCode" TEXT,
    "destinationType" "LocationType",
    "departureDate" TIMESTAMP(3),
    "returnDate" TIMESTAMP(3),
    "fromDate" TIMESTAMP(3),
    "untilDate" TIMESTAMP(3),
    "budgetMax" INTEGER,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "cabin" "Cabin",
    "adults" INTEGER NOT NULL DEFAULT 1,
    "children" INTEGER NOT NULL DEFAULT 0,
    "infants" INTEGER NOT NULL DEFAULT 0,
    "flexibleDates" BOOLEAN NOT NULL DEFAULT false,
    "parsedQuery" JSONB,
    "rawApiResponse" JSONB,
    "recommendationText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" TEXT NOT NULL,
    "searchId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "priceAmount" DOUBLE PRECISION,
    "priceCurrency" TEXT,
    "rank" INTEGER NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "routeSummary" TEXT,
    "departureAirport" TEXT,
    "arrivalAirport" TEXT,
    "durationMinutes" INTEGER,
    "direct" BOOLEAN,
    "sourceType" "RecommendationSource" NOT NULL,
    "sourcePayload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "FavoriteType" NOT NULL,
    "label" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_searchId_fkey" FOREIGN KEY ("searchId") REFERENCES "Search"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
