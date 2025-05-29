# backend-db2

A simple TypeScript backend project using Express and MongoDB.

## Features

- Written in TypeScript
- Express.js server
- MongoDB integration using the official driver
- Environment variable support with dotenv
- Nodemon for development auto-reload
- Jest for unit testing

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or remote instance)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd backend-db2
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   MONGODB_URI="mongodb://<username>:<password>@localhost:27017"
   ```

### Running the Server

Start the development server with:

```sh
npm run dev
```

The server will start on the port specified in your `.env` file or default to `3000`.

### Project Structure

```
src/
  index.ts         # Main server entry point
tests/
  hello.spec.ts    # Example test
```

### Scripts

- `npm run dev` — Start the server with nodemon and ts-node
- `npm run build` — Compile TypeScript to JavaScript
- `npm run test` — Run tests with Jest
- `npm run lint` — Lint the codebase

### Testing

Run all tests with:

```sh
npm test
```

### Linting

Lint the codebase with:

```sh
npm run lint
```

## License

ISC

## Author

hailey
