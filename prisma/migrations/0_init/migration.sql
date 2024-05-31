-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'REALTOR', 'OWNER', 'STAFF');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "CaseStatus" AS ENUM ('SCREENING', 'PROGRESSING', 'CALLBACK', 'DELIVERY', 'PAYMENT', 'COMPLETED', 'WAITING', 'EXPIRED');

-- CreateEnum
CREATE TYPE "NewsletterStatus" AS ENUM ('INACTIVE', 'CREATED', 'CONFIRMED', 'UNSUBSCRIBED', 'BOUNCED', 'COMPLAINT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailConfirmedAt" TIMESTAMP(3),
    "company" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "postalcode" TEXT,
    "city" TEXT,
    "referrer" TEXT NOT NULL,
    "counter" INTEGER NOT NULL DEFAULT 0,
    "userRole" "UserRole" DEFAULT 'USER',
    "userStatus" "UserStatus" DEFAULT 'ACTIVE',
    "caseStatus" "CaseStatus" DEFAULT 'SCREENING',
    "newsletterStatus" "NewsletterStatus" DEFAULT 'INACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedFromWebAt" TIMESTAMP(3) NOT NULL,
    "comment" TEXT,
    "conversion" TEXT,
    "realtorId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_realtorId_key" ON "User"("realtorId");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

