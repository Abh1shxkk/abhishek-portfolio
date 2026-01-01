<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user only if not exists
        User::firstOrCreate(
            ['email' => 'abhichauhan200504@gmail.com'],
            [
                'name' => 'Abhishek Chauhan',
                'password' => Hash::make('password'),
            ]
        );
        
        $this->call(PortfolioSeeder::class);
    }
}
