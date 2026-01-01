<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SocialLinkResource\Pages;
use App\Models\SocialLink;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SocialLinkResource extends Resource
{
    protected static ?string $model = SocialLink::class;
    protected static ?string $navigationIcon = 'heroicon-o-share';
    protected static ?string $navigationGroup = 'Settings';
    protected static ?int $navigationSort = 6;
    protected static ?string $navigationLabel = 'Social Links';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('platform')
                    ->required()
                    ->maxLength(100),
                Forms\Components\TextInput::make('url')
                    ->url()
                    ->required()
                    ->maxLength(500),
                Forms\Components\TextInput::make('username')
                    ->maxLength(100),
                Forms\Components\TextInput::make('order')
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('platform')->searchable(),
                Tables\Columns\TextColumn::make('username'),
                Tables\Columns\TextColumn::make('url')->limit(30),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('order')->sortable(),
            ])
            ->defaultSort('order')
            ->reorderable('order')
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSocialLinks::route('/'),
            'create' => Pages\CreateSocialLink::route('/create'),
            'edit' => Pages\EditSocialLink::route('/{record}/edit'),
        ];
    }
}
