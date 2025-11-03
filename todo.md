# Taxi Service Website TODO

## Core Features
- [x] Hero section with video background
- [x] Bilingual support (English/Slovak) with language toggle
- [x] Navigation header with language switcher
- [x] Service sections (Airport Transfer, City Rides, etc.)
- [x] Pricing information section
- [x] Contact information and booking CTA
- [x] FAQ section
- [x] Footer with links and contact details
- [x] Responsive design for mobile/tablet/desktop
- [x] Visual design inspired by save.day (bold typography, colorful accents, smooth transitions)

## Content Integration
- [x] Extract and integrate content from lesttaxi repository
- [x] Add video from taxizv2 repository as background
- [x] Add photo from taxizv2 repository
- [x] Translate content to Slovak

## Design Elements
- [x] Implement save.day-inspired visual style (bold fonts, colorful buttons, smooth animations)
- [x] Color palette with accent colors (vibrant orange)
- [x] Typography hierarchy (Sora font for headings)
- [x] Smooth transitions and hover effects
- [x] Mobile-first responsive layout
- [x] Colored borders on cards (left and top borders)
- [x] Icon backgrounds with accent color

## Testing & Deployment
- [x] Test all language switching functionality
- [x] Verify video background loads correctly
- [x] Test responsive design on multiple devices
- [ ] Performance optimization
- [ ] SEO meta tags


## Full-Stack Upgrade
- [x] Upgrade project to web-db-user template (backend + database + authentication)
- [x] Set up database schema for taxi photos and documents
- [x] Configure user authentication system
- [x] Create admin dashboard for file management

## File Storage Integration
- [x] Implement S3 file storage integration
- [x] Create file upload API endpoint
- [x] Create file retrieval API endpoint
- [x] Build file management UI for admin panel
- [x] Add file deletion functionality
- [x] Implement file metadata storage in database

## File Management Features
- [x] Upload taxi photos and documents
- [x] Display files in gallery/list view
- [x] Delete files with confirmation
- [ ] File type validation (images, PDFs)
- [ ] File size limits enforcement
- [x] Presigned URLs for secure access


## User Requested Changes
- [x] Update pricing: Vienna €250, Budapest €170, Bratislava €180, Sliač €10
- [x] Remove "od" (from) text from pricing section
- [x] Update address to show only "Zvolen"
- [x] Set default language to Slovak
- [x] Change page title to "Profesionálna taxislužba Zvolen"
- [x] Fix mobile video display - video should be background on all devices, not standalone player
- [x] Ensure mobile hero section matches desktop layout with video background
- [x] Remove poster image from video, keep only video background
