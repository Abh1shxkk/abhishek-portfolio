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
        // Create test user directly without factory
        User::create([
            'name' => 'Abhishek Chauhan',
            'email' => 'abhichauhan200504@gmail.com',
            'password' => Hash::make('password'),
        ]);
        
        $this->call(PortfolioSeeder::class);
    }
}
