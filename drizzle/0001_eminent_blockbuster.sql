CREATE TABLE `files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`url` text NOT NULL,
	`filename` varchar(255) NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSize` int NOT NULL,
	`category` enum('photo','document','other') NOT NULL DEFAULT 'other',
	`description` text,
	`uploadedBy` int NOT NULL,
	`uploadedAt` timestamp NOT NULL DEFAULT (now()),
	`deletedAt` timestamp,
	CONSTRAINT `files_id` PRIMARY KEY(`id`),
	CONSTRAINT `files_fileKey_unique` UNIQUE(`fileKey`)
);
