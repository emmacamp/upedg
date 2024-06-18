-- CreateTable
CREATE TABLE "facilitators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "facilitator_name" TEXT NOT NULL,
    "facilitator_role" TEXT NOT NULL,
    "facilitator_skills" TEXT NOT NULL,
    "facilitator_description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "course_title" TEXT NOT NULL,
    "course_description" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "courses_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "facilitators" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "courses_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "meetings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "facilitator_socials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    CONSTRAINT "facilitator_socials_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "facilitators" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "meetings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "details" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "flayers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "public_id" TEXT NOT NULL,
    "secure_url" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "flayers_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "public_id" TEXT NOT NULL,
    "secure_url" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    CONSTRAINT "images_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "facilitators" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_meetingId_key" ON "courses"("meetingId");

-- CreateIndex
CREATE UNIQUE INDEX "facilitator_socials_facilitatorId_key" ON "facilitator_socials"("facilitatorId");

-- CreateIndex
CREATE UNIQUE INDEX "flayers_courseId_key" ON "flayers"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "images_facilitatorId_key" ON "images"("facilitatorId");
