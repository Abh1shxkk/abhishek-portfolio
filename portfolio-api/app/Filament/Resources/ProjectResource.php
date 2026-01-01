<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 4;
    protected static ?string $navigationLabel = 'Projects';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Project Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('category')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('e.g., Web Application'),
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->rows(4),
                        Forms\Components\TagsInput::make('tags')
                            ->placeholder('Add technologies'),
                    ]),
                
                Forms\Components\Section::make('Links & Media')
                    ->schema([
                        Forms\Components\TextInput::make('image')
                            ->url()
                            ->maxLength(500),
                        Forms\Components\TextInput::make('url')
                            ->url()
                            ->maxLength(500),
                    ]),
                
                Forms\Components\Section::make('Settings')
                    ->schema([
                        Forms\Components\TextInput::make('order')
                            ->numeric()
                            ->default(0),
                        Forms\Components\Toggle::make('is_active')
                            ->default(true),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->circular(),
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('category')->badge(),
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
