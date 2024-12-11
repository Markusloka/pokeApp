# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

---

# Task

Your task is to build a React application that fetches information about a Pokémon from the PokeAPI and displays it in a table. The focus should be on correctly fetching and displaying the data, as well as creating a simple interface for this.

# Requirements

## Technologies to use:

- React (with functional components and hooks like useState and useEffect).
- Optional CSS framework (e.g., Bootstrap, Material UI, or custom CSS) to create the table.

# API

You will fetch data from the PokeAPI: https://pokeapi.co/

Choose which data from the API you want to display in the table. It’s up to you which fields to include, but some example fields you can display are:

- Name (name)
- ID (id)
- Image (sprites.front_default)
- Type(s) (types)
- Weight (weight)
- Height (height)
- Base stats (stats, such as HP, attack, defense)

# Functionality

- **Input Field**: Let the user enter a Pokémon name or ID into an input field and click a button to search.
- **Table**: Display the Pokémon’s details in a table with columns for the fields you’ve chosen to include from the API. Include an image of each Pokémon.
- **Loading Indicator**: Show an indicator or text when data is being fetched from the API.
- **Error Handling**: If the user searches for a Pokémon that doesn't exist, or if the API call fails, display an error message.

You are free to add more functionality as well.

# Instructions

- **Setup**: Create a new React application with Create React App or any bundler of your choice.
- **API Calls**: Use fetch or a library like axios to fetch Pokémon information from the PokeAPI.
- **Design**: Use a CSS framework or custom styling. Entirely up to you.
- **Submission**: Submit your completed solution as a zip file or a GitHub link.
