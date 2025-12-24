<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;
use App\Models\Experience;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Education;
use App\Models\SocialLink;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing data first
        Profile::truncate();
        Experience::truncate();
        Skill::truncate();
        Project::truncate();
        Education::truncate();
        SocialLink::truncate();

        // Profile
        Profile::create([
            'name' => 'Abhishek Chauhan',
            'role' => 'Full Stack Developer',
            'location' => 'Meerut, UP',
            'email' => 'abhichauhan200504@gmail.com',
            'phone' => '+91 8279422813',
            'bio' => '🚀 Computer Science Engineering graduate with hands-on experience in Laravel, PHP, JavaScript, and React-based frontend development. Skilled in building responsive and dynamic web applications with a strong foundation in data structures, algorithms, and problem-solving. Currently expanding expertise in backend development, focusing on databases, APIs, and server-side programming, with the goal of transitioning into a backend engineering role.',
            'availability' => 'Open',
            'years_experience' => '6+ Months',
            'avatar' => 'https://res.cloudinary.com/dfsdezrkr/image/upload/v1766513936/image_3_sesdcl.png',
            'resume_url' => 'https://abhishek-portfolio-kfdk.onrender.com/resume.pdf'
        ]);

        // Experience
        Experience::create([
            'position' => 'Full Stack Developer',
            'company' => 'Global Matrix Solution',
            'duration' => 'September 2025 — Present',
            'description' => 'Building and maintaining dynamic full-stack applications using Laravel, PHP, JavaScript, and React. Delivered key projects including Skills360.ai (job-seeking platform), Medi BillSuite (billing & inventory management), and InvoicePro (invoice & expense management). Focused on performance optimization, responsive UI, real-time features, and SEO-friendly development to enhance overall user experience.',
            'tags' => ['Laravel', 'JavaScript', 'Tailwind CSS', 'React'],
            'order' => 1
        ]);

        // Skills
        Skill::create([
            'title' => 'Core Stack',
            'items' => ['Laravel', 'JavaScript', 'React', 'Node.js', 'MySQL', 'PostgreSQL'],
            'order' => 1
        ]);
        Skill::create([
            'title' => 'Design & Tools',
            'items' => ['System Design', 'Docker', 'AWS', 'Git'],
            'order' => 2
        ]);
        Skill::create([
            'title' => 'Creative Dev',
            'items' => ['Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Alpine.js', 'Shadcn', 'Canvas API'],
            'order' => 3
        ]);

        // Projects
        Project::create([
            'title' => 'Skills360.ai',
            'category' => 'Web Application',
            'description' => 'A Laravel-based platform featuring user authentication, an intuitive admin panel, AI-powered job matching, and a built-in resume builder to streamline the hiring and job search experience.',
            'image' => 'https://res.cloudinary.com/dfsdezrkr/image/upload/v1766512932/Screenshot_2025-12-23_233159_zajcd4.png',
            'tags' => ['Laravel', 'Tailwind CSS'],
            'url' => 'https://www.skills360.ai/',
            'order' => 1,
            'is_active' => true
        ]);
        Project::create([
            'title' => 'Medi BillSuite',
            'category' => 'Web Application',
            'description' => 'A Laravel-based billing solution with GST calculations, inventory tracking, customer/supplier management, quotations, sales reports, and role-based user permissions.',
            'image' => 'https://res.cloudinary.com/dfsdezrkr/image/upload/v1766512893/Screenshot_2025-12-23_225227_nvqqj1.png',
            'tags' => ['Laravel', 'Tailwind CSS'],
            'url' => 'https://proseoaudittool.com/medi/login',
            'order' => 2,
            'is_active' => true
        ]);
        Project::create([
            'title' => 'InvoicePro',
            'category' => 'Web Application',
            'description' => 'A Laravel-based invoicing platform featuring user authentication, role-based admin panel, client management, invoice generation with PDF export, expense tracking, payment management, and detailed financial reports (Revenue, Expenses, Profit/Loss) to streamline business billing and financial operations.',
            'image' => 'https://res.cloudinary.com/dfsdezrkr/image/upload/v1766512893/Screenshot_2025-12-23_225335_p2aqd1.png',
            'tags' => ['Laravel', 'Tailwind CSS'],
            'url' => 'https://invoicepro-qnea.onrender.com/dashboard',
            'order' => 3,
            'is_active' => true
        ]);

        // Education
        Education::create([
            'degree' => 'Bachelor of Engineering Technology',
            'school' => 'IIMT University',
            'year' => '2025',
            'description' => 'Computer Science',
            'order' => 1
        ]);
        Education::create([
            'degree' => 'Intermediate',
            'school' => 'R S M S Vidya Mandir',
            'year' => '2021',
            'description' => 'PCM',
            'order' => 2
        ]);
        Education::create([
            'degree' => 'High School',
            'school' => 'R S M S Vidya Mandir',
            'year' => '2019',
            'description' => '',
            'order' => 3
        ]);

        // Social Links
        SocialLink::create([
            'platform' => 'GitHub',
            'url' => 'https://github.com/Abh1shxkk',
            'username' => '@Abh1shxkk',
            'order' => 1,
            'is_active' => true
        ]);
        SocialLink::create([
            'platform' => 'LinkedIn',
            'url' => 'https://www.linkedin.com/in/abhishek-chauhan-880496394',
            'username' => '@abhishekchauhan',
            'order' => 2,
            'is_active' => true
        ]);
        SocialLink::create([
            'platform' => 'Twitter',
            'url' => 'https://x.com/abh1shxkk',
            'username' => '@abh1shxkk',
            'order' => 3,
            'is_active' => true
        ]);
    }
}
