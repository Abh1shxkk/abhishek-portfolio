<![CDATA[<div align="center">

# 🚀 Abhishek Portfolio

### A Modern Full-Stack Developer Portfolio with AI-Powered Chat & Admin Dashboard

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=flat-square&logo=laravel)](https://laravel.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)

[Live Demo](https://abhishek-portfolio.onrender.com) • [API Docs](#api-endpoints) • [Features](#-features)

</div>

---

## 📋 Overview

A sleek, modern portfolio website built with React + TypeScript frontend and Laravel PHP backend. Features an AI-powered chatbot (Gemini 2.5 Flash), dark/light theme toggle, smooth animations, and a complete admin dashboard for content management.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ARCHITECTURE OVERVIEW                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌──────────────────┐         ┌──────────────────┐         ┌────────────┐  │
│   │                  │   API   │                  │   DB    │            │  │
│   │  React Frontend  │◄───────►│  Laravel Backend │◄───────►│  MySQL/    │  │
│   │  (TypeScript)    │  REST   │  (PHP 8.2+)      │         │  SQLite    │  │
│   │                  │         │                  │         │            │  │
│   └────────┬─────────┘         └──────────────────┘         └────────────┘  │
│            │                                                                 │
│            │ Gemini API                                                      │
│            ▼                                                                 │
│   ┌──────────────────┐                                                       │
│   │   AI Chatbot     │                                                       │
│   │  (Gemini 2.5)    │                                                       │
│   └──────────────────┘                                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### 🎨 Frontend
- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Dark/Light Theme** - Persistent theme toggle with system preference detection
- **AI Chat Assistant** - Gemini 2.5 Flash powered chatbot for portfolio Q&A
- **Animated Components** - Reveal effects, spotlight cards, border beam buttons
- **Project Carousel** - Interactive 3D card carousel for showcasing work
- **Skills Marquee** - Auto-scrolling skills display

### 🔧 Backend
- **RESTful API** - Clean Laravel API architecture
- **Admin Dashboard** - Full CRUD operations for all portfolio sections
- **Authentication** - Laravel Sanctum token-based auth
- **Database Models** - Profile, Projects, Experience, Education, Skills, Socials

### 📱 Sections
| Section | Description |
|---------|-------------|
| Hero | Dynamic intro with availability status & CTA buttons |
| Profile | Bio, location, experience stats |
| Experience | Timeline-based work history |
| Skills | Categorized technical skills grid |
| Projects | Interactive carousel showcase |
| Education | Academic timeline |
| Contact | Social links & email integration |

---

## 🛠️ Tech Stack

### Frontend
```
React 19.2 + TypeScript 5.8
├── Vite (Build tool)
├── React Router DOM (Routing)
├── Tailwind CSS (Styling)
├── Lucide React (Icons)
├── @google/genai (AI Chat)
└── Axios (HTTP Client)
```

### Backend
```
Laravel 12 + PHP 8.2+
├── Laravel Sanctum (Auth)
├── Eloquent ORM (Database)
├── MySQL/SQLite (Storage)
└── Docker (Containerization)
```

---

## 📁 Project Structure

```
abhishek-portfolio/
├── 📂 components/
│   ├── 📂 admin/           # Admin dashboard components
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── AdminLogin.tsx
│   │   ├── AdminProfile.tsx
│   │   ├── AdminExperience.tsx
│   │   ├── AdminSkills.tsx
│   │   ├── AdminProjects.tsx
│   │   ├── AdminEducation.tsx
│   │   └── AdminSocials.tsx
│   ├── 📂 ui/              # Reusable UI components
│   │   ├── BorderBeamButton.tsx
│   │   ├── Reveal.tsx
│   │   ├── SpotlightCard.tsx
│   │   └── TextReveal.tsx
│   ├── Hero.tsx
│   ├── Profile.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Showcase.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── AIChat.tsx
│   └── Marquee.tsx
├── 📂 context/
│   └── ThemeContext.tsx    # Dark/Light theme provider
├── 📂 services/
│   ├── apiClient.ts        # Axios instance
│   ├── geminiService.ts    # AI chat integration
│   └── portfolioApi.ts     # API service layer
├── 📂 portfolio-api/       # Laravel Backend
│   ├── 📂 app/
│   │   ├── 📂 Http/Controllers/
│   │   │   ├── 📂 Admin/   # Admin CRUD controllers
│   │   │   └── 📂 API/     # Public API controllers
│   │   └── 📂 Models/      # Eloquent models
│   ├── 📂 database/
│   │   ├── migrations/     # Database schema
│   │   └── seeders/        # Sample data
│   └── 📂 routes/
│       └── api.php         # API routes
├── App.tsx                 # Main app with routing
├── types.ts                # TypeScript interfaces
├── constants.ts            # Static data & config
└── index.tsx               # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PHP 8.2+
- Composer
- MySQL/SQLite

### Frontend Setup

```bash
# Clone repository
git clone https://github.com/Abh1shxkk/abhishek-portfolio.git
cd abhishek-portfolio

# Install dependencies
npm install

# Configure environment
cp .env.local.example .env.local
# Add your GEMINI_API_KEY and VITE_API_URL

# Start development server
npm run dev
```

### Backend Setup

```bash
cd portfolio-api

# Install PHP dependencies
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed

# Start server
php artisan serve
```

### Environment Variables

**Frontend (.env.local)**
```env
GEMINI_API_KEY=your_gemini_api_key
VITE_API_URL=http://localhost:8000/api
```

**Backend (portfolio-api/.env)**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
```

---

## 🔌 API Endpoints

### Public Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Get profile data |
| GET | `/api/experiences` | List all experiences |
| GET | `/api/skills` | List skill categories |
| GET | `/api/projects` | List all projects |
| GET | `/api/education` | List education history |
| GET | `/api/socials` | List social links |
| POST | `/api/contact` | Submit contact form |

### Admin Routes (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Admin authentication |
| GET/PUT | `/api/admin/profile` | Manage profile |
| CRUD | `/api/admin/experiences` | Manage experiences |
| CRUD | `/api/admin/skills` | Manage skills |
| CRUD | `/api/admin/projects` | Manage projects |
| CRUD | `/api/admin/education` | Manage education |
| CRUD | `/api/admin/socials` | Manage social links |

---

## 🎯 Application Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER JOURNEY                                    │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
    │  Hero   │────►│ Profile │────►│  Work   │────►│ Contact │
    │ Section │     │  Stats  │     │Showcase │     │  Form   │
    └────┬────┘     └─────────┘     └─────────┘     └─────────┘
         │
         │ AI Chat Button (floating)
         ▼
    ┌─────────────────────────────────────────┐
    │           AI CHAT ASSISTANT             │
    │  ┌─────────────────────────────────┐    │
    │  │ User: "What skills do you have?"│    │
    │  └─────────────────────────────────┘    │
    │  ┌─────────────────────────────────┐    │
    │  │ AI: "I specialize in Laravel,   │    │
    │  │ React, PHP, JavaScript..."      │    │
    │  └─────────────────────────────────┘    │
    └─────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                            ADMIN WORKFLOW                                    │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────┐     ┌───────────┐     ┌──────────────────────────────┐
    │  Login  │────►│ Dashboard │────►│  Manage Content              │
    │  /admin │     │  Stats    │     │  • Profile  • Projects       │
    └─────────┘     └───────────┘     │  • Skills   • Education      │
                                      │  • Experience • Socials      │
                                      └──────────────────────────────┘
```

---

## 🌐 Deployment

### Frontend (Render/Vercel/Netlify)
```bash
npm run build
# Deploy ./dist folder
```

### Backend (Render/Railway)
```bash
# Use included Dockerfile
docker build -t portfolio-api .
docker run -p 8000:8000 portfolio-api
```

### Render Blueprint
The `render.yaml` file is included for one-click deployment on Render.

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| Clean, professional light theme | Sleek dark theme with accent colors |

| Admin Dashboard | AI Chat |
|-----------------|---------|
| Full content management | Gemini-powered assistant |

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Abhishek Chauhan](https://github.com/Abh1shxkk)**

[![GitHub](https://img.shields.io/badge/GitHub-Abh1shxkk-181717?style=flat-square&logo=github)](https://github.com/Abh1shxkk)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/abhishek-chauhan-880496394)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat-square&logo=twitter)](https://x.com/abh1shxkk)

</div>
]]>