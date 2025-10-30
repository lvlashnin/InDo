# InDo - A Modern Kanban-Style Todo App

A simple yet powerful Kanban-style todo application designed for efficient task management. InDo provides a smooth and responsive user interface for tracking personal or team projects.

---

### 🔗 **Live Demo**

**[View Live Demo](https://indo-x6o6.onrender.com/)** 👈

<br>

---

## 🚀 Features

- **📝 Full CRUD Operations:** Easily create, read, update, and delete your tasks.
- **📌 Kanban Board:** Visualize your workflow with "Todo", "In Progress", and "Done" columns.
- **🖐️ Drag & Drop:** Intuitively change task status by dragging and dropping tasks between columns.
- **🔍 Real-time Search:** Instantly find specific tasks by their titles.
- **🎨 Modal Forms:** Convenient interface for adding and editing tasks without page reloads.
- **📱 Responsive Design:** Seamless experience across all devices, from desktop to mobile.

---

## 🛠️ Tech Stack

### Frontend:

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** Adds static type definitions to JavaScript for enhanced code reliability.
- **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
- **@hello-pangea/dnd:** A powerful and accessible drag and drop library, compatible with React 18+.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

### Backend:

- **Node.js & Express:** A JavaScript runtime and a web framework for building robust APIs.
- **MongoDB:** A flexible NoSQL document database for storing task data.
- **Render:** A unified platform to build and run all your apps and websites.

---

## ⚙️ Installation and Setup

To get this project up and running on your local machine, follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/lvlashnin/InDo
cd InDo
```

**2. Install client-side dependencies:**

```bash
cd client
npm install
```

**3. Configure environment variables:**

In the `client` folder, create a `.env.local` file and add your API URL. If you're using the backend from this project, it's already deployed on Render.

```env
# client/.env.local

VITE_API_URL=https://indo-s082.onrender.com/api
```

**4. Start the client application:**

```bash
npm run dev
```

The application will then be accessible at `http://localhost:5173` (or another port indicated in your console).

---

## 📂 Project Structure

```
client/
├── public/
└── src/
    ├── app/
    │   └── store.ts      # Redux Store configuration
    ├── components/       # Reusable UI components (TodoCard, Modal, etc.)
    ├── features/         # Redux logic (slices, thunks) for specific features
    │   ├── modal/
    │   ├── search/
    │   └── todos/
    ├── hooks/            # Custom React hooks (useAppDispatch, etc.)
    ├── types/            # Global TypeScript type definitions
    ├── App.tsx           # Main application component
    └── main.tsx          # Entry point of the application

server/
├── src/
│   ├── config/         # Environment variables, DB connection
│   ├── controllers/    # Request handling logic
│   ├── models/         # Mongoose schemas and models
│   ├── routes/         # API route definitions
│   └── server.ts       # Express server setup and entry point
└── package.json
```

---

## 👤 Author

- **Serhii**
