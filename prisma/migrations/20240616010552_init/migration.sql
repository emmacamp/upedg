-- CreateTable
CREATE TABLE "Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_title" TEXT NOT NULL,
    "course_description" TEXT NOT NULL,
    "course_flayer" TEXT NOT NULL,
    "facilitatorId" INTEGER NOT NULL,
    "meetingId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Course_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "Facilitator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Course_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "Meeting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Facilitator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "facilitator_name" TEXT NOT NULL,
    "facilitator_role" TEXT NOT NULL,
    "facilitator_skills" TEXT NOT NULL,
    "facilitator_description" TEXT NOT NULL,
    "facilitator_image" TEXT NOT NULL,
    "facilitatorSocialsId" INTEGER NOT NULL,
    CONSTRAINT "Facilitator_facilitatorSocialsId_fkey" FOREIGN KEY ("facilitatorSocialsId") REFERENCES "FacilitatorSocials" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FacilitatorSocials" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "mail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
