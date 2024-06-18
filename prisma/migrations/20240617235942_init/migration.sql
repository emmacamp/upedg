-- CreateTable
CREATE TABLE "Facilitator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "facilitator_name" TEXT NOT NULL,
    "facilitator_role" TEXT NOT NULL,
    "facilitator_skills" TEXT NOT NULL,
    "facilitator_description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "course_title" TEXT NOT NULL,
    "course_description" TEXT NOT NULL,
    "courseFlayerId" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Course_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "Facilitator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FacilitatorSocials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    CONSTRAINT "FacilitatorSocials_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "Facilitator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "details" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "Meeting_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Flayer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "public_id" TEXT NOT NULL,
    "secure_url" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "Flayer_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "public_id" TEXT NOT NULL,
    "secure_url" TEXT NOT NULL,
    "facilitatorId" TEXT NOT NULL,
    CONSTRAINT "Image_facilitatorId_fkey" FOREIGN KEY ("facilitatorId") REFERENCES "Facilitator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FacilitatorSocials_facilitatorId_key" ON "FacilitatorSocials"("facilitatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_courseId_key" ON "Meeting"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Flayer_courseId_key" ON "Flayer"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_facilitatorId_key" ON "Image"("facilitatorId");
