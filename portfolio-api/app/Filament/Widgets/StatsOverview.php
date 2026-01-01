<?php

namespace App\Filament\Widgets;

use App\Models\Profile;
use App\Models\Experience;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Education;
use App\Models\SocialLink;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            Stat::make('Projects', Project::count())
                ->description('Total projects showcased')
                ->descriptionIcon('heroicon-m-rectangle-stack')
                ->color('success'),
            Stat::make('Skills', Skill::sum(\DB::raw('JSON_LENGTH(items)')))
                ->description('Technologies mastered')
                ->descriptionIcon('heroicon-m-cpu-chip')
                ->color('info'),
            Stat::make('Experience', Experience::count())
                ->description('Work positions')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('warning'),
            Stat::make('Social Links', SocialLink::where('is_active', true)->count())
                ->description('Active connections')
                ->descriptionIcon('heroicon-m-share')
                ->color('primary'),
        ];
    }
}
