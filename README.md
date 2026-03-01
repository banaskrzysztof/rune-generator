# Rune Generator

A React application that converts decimal numbers (1–9999) into their runic SVG representation.
The generated image can be downloaded as an SVG file.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/banaskrzysztof/rune-generator.git
cd rune-generator
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## Usage

1. Enter a number between **1 and 9999** in the input field
2. The runic representation is generated instantly as an SVG
3. Click **Download** to save the SVG file

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
