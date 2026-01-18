# SCIC-12 Assignment 10: Job Task

## Project Overview
This project is a simple **Next.js (App Router)** application with public and optionally protected pages. It demonstrates a basic authentication mechanism, item listing, item details, and optionally adding items for authenticated users. The project uses **Next.js 15/16**, **Express.js** for API handling, and **Tailwind CSS** for styling.

---

## Features Implemented

### 1. Landing Page
- Contains **7 relevant sections** (besides Navbar and Footer)
- Navbar includes navigation links to **Login** and **Items/Lists**
- Fully public, no authentication required

### 2. Authentication
- **Mock login** using hardcoded email & password
- Credentials stored in **cookies**
- Protected routes redirect unauthenticated users to login
- Optional: Google login using NextAuth.js (if implemented)
- On successful login, redirects to the **Items/Lists page**

### 3. Item List Page
- Publicly accessible
- Fetches items from an **Express.js API/JSON**
- Each item card shows:
  - Name
  - Description
  - Price
  - Image

### 4. Item Details Page
- Shows full details of a single product
- Publicly accessible

### 5. Optional Protected Page: Add Item
- Only accessible when logged in
- Form to add a new item
- Stores item data via the **Express.js server**
- Redirects unauthenticated users to login

### 6. Additional Enhancements
- Toast notifications on successful product creation (if implemented)
- Fully responsive layout using Tailwind CSS
- Navbar links appear as a dropdown on mobile

---

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Rehenabegum109/task-master
cd <project-folder>
