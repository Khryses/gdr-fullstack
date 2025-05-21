-- CreateEnum
CREATE TYPE "Role" AS ENUM ('player', 'master', 'admin');

-- CreateEnum
CREATE TYPE "Stato" AS ENUM ('attivo', 'bloccato', 'cancellato');

-- CreateEnum
CREATE TYPE "Razza" AS ENUM ('varghul', 'umano', 'naga');

-- CreateEnum
CREATE TYPE "MessaggioTipo" AS ENUM ('azione', 'dialogo', 'pensiero', 'sistema', 'master');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "ruolo" "Role" NOT NULL,
    "stato" "Stato" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "razza" "Razza" NOT NULL,
    "livello" INTEGER NOT NULL,
    "esperienza" INTEGER NOT NULL,
    "reputazione" INTEGER NOT NULL,
    "fazione" TEXT,
    "visibile" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Statistica" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "valore" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Statistica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "privata" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "tipo" "MessaggioTipo" NOT NULL,
    "contenuto" TEXT NOT NULL,
    "visibile" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roomId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "XPLog" (
    "id" TEXT NOT NULL,
    "descrizione" TEXT NOT NULL,
    "valore" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "XPLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReputazioneLog" (
    "id" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "valore" INTEGER NOT NULL,
    "visibile" BOOLEAN NOT NULL DEFAULT true,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "ReputazioneLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Statistica" ADD CONSTRAINT "Statistica_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "ChatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "XPLog" ADD CONSTRAINT "XPLog_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReputazioneLog" ADD CONSTRAINT "ReputazioneLog_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
