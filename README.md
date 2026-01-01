# Abhishek Portfolio

A modern, full-stack developer portfolio built with React + TypeScript frontend and Laravel backend. Features admin dashboard, and beautiful animations.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

- **Admin Dashboard** - Full content management system
- **Dark/Light Theme** - Toggle with persistent preference
- **Smooth Animations** - Reveal effects, spotlight cards, marquee
- **Project Carousel** - Interactive 3D card showcase
- **Responsive Design** - Works on all devices

---

## Tech Stack

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS, React Router, Lucide Icons

**Backend:** Laravel 12, PHP 8.2+, Laravel Sanctum, MySQL/SQLite


---

## Quick Start

### Frontend

```bash
# Install dependencies
npm install

# Add environment variables
cp .env.local.example .env.local
# Set GEMINI_API_KEY and VITE_API_URL

# Run dev server
npm run dev
```

### Backend

```bash
cd portfolio-api

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate
php artisan migrate

# Run server
php artisan serve
```

---

## Project Structure

```
├── components/
│   ├── admin/          # Admin panel (Dashboard, Login, CRUD pages)
│   ├── ui/             # Reusable UI (Buttons, Cards, Animations)
│   ├── Hero.tsx        # Landing section
│   ├── Profile.tsx     # Bio & stats
│   ├── Experience.tsx  # Work timeline
│   ├── Skills.tsx      # Tech skills grid
│   ├── Showcase.tsx    # Project carousel
│   ├── Education.tsx   # Education timeline
│   ├── Contact.tsx     # Social links
│   └── AIChat.tsx      # AI chatbot
├── services/
│   ├── geminiService.ts    # AI integration
│   └── portfolioApi.ts     # API calls
├── context/
│   └── ThemeContext.tsx    # Theme provider
├── portfolio-api/          # Laravel backend
│   ├── app/Http/Controllers/
│   ├── app/Models/
│   ├── database/migrations/
│   └── routes/api.php
└── App.tsx                 # Main app with routing
```

---

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Profile data |
| GET | `/api/experiences` | Work history |
| GET | `/api/skills` | Skills list |
| GET | `/api/projects` | Projects |
| GET | `/api/education` | Education |
| GET | `/api/socials` | Social links |
| POST | `/api/contact` | Contact form |

### Admin (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Login |
| GET/PUT | `/api/admin/profile` | Manage profile |
| CRUD | `/api/admin/experiences` | Manage experience |
| CRUD | `/api/admin/skills` | Manage skills |
| CRUD | `/api/admin/projects` | Manage projects |
| CRUD | `/api/admin/education` | Manage education |
| CRUD | `/api/admin/socials` | Manage socials |

---

## Environment Variables

**Frontend (.env.local)**
```
GEMINI_API_KEY=your_key
VITE_API_URL=http://localhost:8000/api
```

**Backend (portfolio-api/.env)**
```
DB_CONNECTION=mysql
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
```

---

## Deployment

**Frontend:** Build with `npm run build`, deploy `dist/` folder

**Backend:** Use included `Dockerfile` or deploy to Render/Railway

---

## Author

**Abhishek Chauhan**

- GitHub: [@Abh1shxkk](https://github.com/Abh1shxkk)
- LinkedIn: [Abhishek Chauhan](https://www.linkedin.com/in/abhishek-chauhan-880496394)
- Twitter: [@abh1shxkk](https://x.com/abh1shxkk)

---

## License

MIT License
