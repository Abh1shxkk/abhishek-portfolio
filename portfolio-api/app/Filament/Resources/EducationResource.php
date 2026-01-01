<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EducationResource\Pages;
use App\Models\Education;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class EducationResource extends Resource
{
    protected static ?string $model = Education::class;
    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 5;
    protected static ?string $navigationLabel = 'Education';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('degree')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('school')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('year')
                    ->required()
                    ->maxLength(50),
                Forms\Components\TextInput::make('description')
                    ->maxLength(255),
                Forms\Components\TextInput::make('order')
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('school')->searchable(),
                Tables\Columns\TextColumn::make('degree'),
                Tables\Columns\TextColumn::make('year')->badge(),
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
            'index' => Pages\ListEducation::route('/'),
            'create' => Pages\CreateEducation::route('/create'),
            'edit' => Pages\EditEducation::route('/{record}/edit'),
        ];
    }
}
