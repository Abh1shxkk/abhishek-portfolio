<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProfileResource\Pages;
use App\Models\Profile;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProfileResource extends Resource
{
    protected static ?string $model = Profile::class;
    protected static ?string $navigationIcon = 'heroicon-o-user-circle';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'My Profile';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Basic Information')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('role')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('phone')
                            ->tel()
                            ->maxLength(50),
                        Forms\Components\TextInput::make('location')
                            ->maxLength(255),
                    ])->columns(2),
                
                Forms\Components\Section::make('Profile Details')
                    ->schema([
                        Forms\Components\Textarea::make('bio')
                            ->rows(4)
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('availability')
                            ->maxLength(50),
                        Forms\Components\TextInput::make('years_experience')
                            ->maxLength(50),
                    ]),
                
                Forms\Components\Section::make('Media')
                    ->schema([
                        Forms\Components\TextInput::make('avatar')
                            ->url()
                            ->maxLength(500),
                        Forms\Components\TextInput::make('resume_url')
                            ->url()
                            ->maxLength(500),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('role'),
                Tables\Columns\TextColumn::make('email'),
                Tables\Columns\TextColumn::make('location'),
                Tables\Columns\TextColumn::make('availability')->badge(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProfiles::route('/'),
            'create' => Pages\CreateProfile::route('/create'),
            'edit' => Pages\EditProfile::route('/{record}/edit'),
        ];
    }
}
