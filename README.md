# Netflix Clone

A full-stack Netflix Clone built with MERN (MongoDB, Express, React, Node.js) that features user authentication, movie listings, a watch page, and admin functionalities.

## Features

- 🎬 **User Authentication** - Sign up, log in, and logout with secure JWT authentication.
- 🔍 **Search & Browse** - Find movies and TV shows using API integration.
- 📽 **Watch Page** - View trailers and movie details.
- 🛒 **User Dashboard** - Track watch history and saved content.
- 🔧 **Admin Panel** - Manage movies, users, and more.
- 📡 **API Integration** - Fetch movie data from an external API.

## Tech Stack

- **Frontend:** React, Zustand (State Management), Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Atlas)
- **Authentication:** JSON Web Token (JWT)
- **Database:** MongoDB with Mongoose ORM
- **UI Components:** Lucide React, React Player

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```
5. Start the frontend:
   ```bash
   npm run dev
   ```

## API Routes

### Authentication
- `POST /api/v1/auth/signup` - Register a new user
- `POST /api/v1/auth/login` - Login user & return JWT
- `GET /api/v1/auth/authCheck` - Check authentication status

### Movies & Content
- `GET /api/v1/movies` - Fetch all movies
- `GET /api/v1/movie/:id/details` - Get details of a specific movie
- `GET /api/v1/movie/:id/trailers` - Get movie trailers
- `GET /api/v1/movie/:id/similar` - Fetch similar movies

## Deployment

This project can be deployed using platforms like **Vercel** (Frontend) and **Render** or **Railway** (Backend).

## Contributing

1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit changes and push.
4. Submit a pull request.

---

⭐ Star this repository if you found it helpful!

