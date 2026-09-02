# Formix - Form Builder

Formix is an easy-to-use platform for teams to quickly make custom forms, set up smart conditional rules, and collect files like photos and videos in one place.

## 🎥 Demo Video

Here is a quick walkthrough of how Formix works, creating a custom form with logic and submitting it:

<video controls src="https://github.com/user-attachments/assets/2e2d714f-90cc-4c07-85c3-1f8c4cca66c3" width="100%"></video>


## ✨ Core Features

- **Form Builder**: A simple drag-and-drop tool to make custom forms.
- **Conditional Logic**: Set up "if/then" rules to show or hide questions based on what the user selects.
- **Dynamic Dropdowns**: Automatically load live options from the database (like locations or job sites) directly into dropdown menus.
- **Media Uploads**: Easily collect and save pictures and videos directly from the form.
- **Submissions Hub**: View all form answers in a clean table format.
- **Mobile Friendly**: Works perfectly on phones, tablets, and desktop computers.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Base UI / Radix primitives
- **Drag & Drop**: `@dnd-kit` for premium, collision-aware interactive reordering
- **Storage**: Supabase Storage (Buckets)
- **Icons**: Lucide React

### Backend
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL (Supabase)
- **Tools**: Pydantic

## 🏗️ Architecture & Database

Formix handles scalable and customizable forms using a dynamic JSON-driven approach:

- **Dynamic Form Schema**: Forms are built and stored using a flexible `JSONB` format in PostgreSQL.
- **Dynamic Renderer**: The frontend includes a dynamic rendering engine that parses the `JSONB` schema. It automatically generates the correct React components, handles state, enforces validation rules, and manages conditional logic on the fly.
- **Flexible Submissions**: Eeach submission record is stored dynamically, mapping each unique `field_id` to the user's answered value.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (Late v18 or newer)
- Python 3.10+
- Supabase Project & URL

### 2. Installation

#### Frontend
```bash
cd frontend
pnpm install
pnpm run dev
```

#### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload
```

### 3. Environment Variables

**Frontend (`frontend/.env`):**
```env
NEXT_PUBLIC_APP_NAME="Formix"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:8000"
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_key
```

**Backend (`backend/.env`):**
```env
SUPABASE_URL=your_url
SUPABASE_SERVICE_KEY=your_service_key
```

### 4. Run the app
Open http://localhost:3000 in your browser for the frontend and http://localhost:8000 for the backend.

**Note on Backend Cold Starts (Render.com free tier):** The backend is hosted on Render's free tier, so the server goes to sleep after 15 minutes of inactivity. When you try to access the app again after it sleeps, the first request will take about 50 seconds to boot up. After that, it runs fast as usual.
