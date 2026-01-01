# Abhishek Portfolio

A modern, full-stack developer portfolio built with React + TypeScript frontend and Laravel backend. Features a beautiful Filament admin dashboard for content management.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)
![Filament](https://img.shields.io/badge/Filament-3.3-FDAE4B?logo=laravel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

- **Filament Admin Dashboard** - Beautiful, modern admin panel for managing all portfolio content
- **Dark/Light Theme** - Toggle with persistent preference
- **Smooth Animations** - Reveal effects, spotlight cards, marquee
- **Project Carousel** - Interactive 3D card showcase
- **Responsive Design** - Works on all devices
- **API-Driven Content** - All content fetched from Laravel API

---

## Tech Stack

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide Icons

**Backend:** Laravel 12, PHP 8.2+, Filament 3.3, MySQL/PostgreSQL

**Admin Panel:** Laravel Filament with custom theme matching portfolio design

---

## Quick Start

### Frontend

```bash
# Install dependencies
npm install

# Add environment variables
cp .env.local.example .env.local
# Set VITE_API_URL=http://localhost:8000/api

# Run dev server (port 3000)
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

# Run migrations and seed data
php artisan migrate
php artisan db:seed

# Run server (port 8000)
php artisan serve
```

### Admin Dashboard

Access the admin panel at: `http://localhost:8000/admin`

Default credentials:
- Email: `admin@admin.com`
- Password: `admin123`

---

## Admin Dashboard Features

The Filament admin dashboard allows you to manage:

| Section | Description |
|---------|-------------|
| **My Profile** | Name, role, bio, avatar, resume URL, contact info |
| **Work Experience** | Job positions, companies, duration, descriptions, tech tags |
| **Skills** | Skill categories with technology items |
| **Projects** | Project showcase with images, descriptions, links, tags |
| **Education** | Degrees, schools, years |
| **Social Links** | GitHub, LinkedIn, Twitter, etc. |

---

## Project Structure

```
├── components/
│   ├── ui/             # Reusable UI components
│   ├── Hero.tsx        # Landing section
│   ├── Profile.tsx     # Bio & stats
│   ├── Experience.tsx  # Work timeline
│   ├── Skills.tsx      # Tech skills grid
│   ├── Showcase.tsx    # Project carousel
│   ├── Education.tsx   # Education timeline
│   └── Contact.tsx     # Social links
├── context/
│   └── ThemeContext.tsx    # Theme provider
├── services/
│   └── portfolioApi.ts     # API calls
├── portfolio-api/          # Laravel backend
│   ├── app/
│   │   ├── Filament/       # Admin panel resources
│   │   │   ├── Resources/  # CRUD resources
│   │   │   └── Widgets/    # Dashboard widgets
│   │   ├── Http/Controllers/
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/api.php
└── App.tsx                 # Main app
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

---

## Environment Variables

**Frontend (.env.local)**
```
VITE_API_URL=http://localhost:8000/api
```

**Backend (portfolio-api/.env)**
```
DB_CONNECTION=mysql
DB_DATABASE=pf_db
DB_USERNAME=root
DB_PASSWORD=
```

---

## Deployment

**Frontend:** Build with `npm run build`, deploy `dist/` folder

**Backend:** 
- Production URL: `https://abhishek-portfolio-kfdk.onrender.com`
- Uses PostgreSQL on Render
- Dockerfile included for containerized deployment

---

## Author

**Abhishek Chauhan** - Full Stack Developer

- GitHub: [@Abh1shxkk](https://github.com/Abh1shxkk)
- LinkedIn: [Abhishek Chauhan](https://www.linkedin.com/in/abhishek-chauhan-880496394)
- Twitter: [@abh1shxkk](https://x.com/abh1shxkk)

---

## License

MIT License
