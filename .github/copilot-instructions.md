# AI Coding Assistant Instructions

This document provides essential context for AI coding assistants working in this codebase.

## Project Overview

This is a React-based bookstore web application built with Vite. It's a single-page application (SPA) with routing and multiple page components.

### Tech Stack
- React 19.x with Vite 7.x
- React Router v6 for navigation
- ESLint for code quality
- React Error Boundary for error handling

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── elements/     # Basic UI elements
│   └── shared/       # Layout components (Header, Footer, etc.)
├── pages/            # Route-level components
├── assets/          # Static assets
└── img/             # Image assets
```

## Key Conventions

### Component Organization
- Route components go in `src/pages/`
- Shared layout components go in `src/components/shared/`
- Basic UI elements go in `src/components/elements/`

### Images
- Book images should be placed in `src/img/book-home/`
- Team member images go in `src/img/team/`

### Routing
- Routes are defined centrally in `src/App.jsx`
- Follow the existing pattern for adding new routes

## Development Workflow

### Setup
```bash
npm install
npm run dev  # Starts dev server
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Error Handling
- Use React Error Boundary for component-level error handling
- See example usage in components for error handling patterns

## Common Tasks

### Adding a New Page
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Import and use shared layout components (Header, Footer) as needed

### Adding New Components
1. Place in appropriate directory under `src/components/`
2. Follow existing component patterns for consistency
3. Consider reusability and separation of concerns

### Images and Assets
- Add new book images to `src/img/book-home/`
- Add new team member images to `src/img/team/`
- Use relative paths from the component when importing images