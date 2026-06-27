# 📝 Todo App using React, Redux Toolkit & TypeScript

A modern Todo application built with **React**, **Redux Toolkit**, **TypeScript**, **Tailwind CSS v4**, and **React Toastify**. This project demonstrates state management with Redux, persistent storage using Local Storage, custom animated checkboxes, and a responsive UI.

---

## 🚀 Features

* ✅ Add new todos
* ✏️ Edit existing todos
* 🗑️ Delete todos
* ✔️ Mark todos as completed
* 💾 Persistent storage using Local Storage
* 🚫 Prevent duplicate todos
* 🔍 Minimum character validation
* ⌨️ Press **Enter** to add a todo
* 📱 Fully responsive design
* 🎨 Custom animated checkbox
* 🔔 Toast notifications

---

## 🛠️ Technologies Used

* React
* TypeScript
* Redux Toolkit
* React Redux
* Tailwind CSS v4
* React Toastify
* UUID
* React Icons

---

## 📂 Project Structure

```
src/
│
├── features/
│   └── slices/
│       └── TodoSlice.ts
│
├── pages/
│   └── Todo.tsx
│
├── store/
│   └── store.ts
│
├── App.tsx
└── main.tsx
```

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd todo-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📚 Packages Used

```bash
npm install @reduxjs/toolkit
npm install react-redux
npm install react-toastify
npm install react-icons
npm install uuid
```

TypeScript types

```bash
npm install -D @types/uuid
```

---

## ⚙️ Redux Store

The application uses **Redux Toolkit** for global state management.

### State

```ts
interface TodoItem {
    id: string;
    dets: string;
}
```

### Actions

* `addTodo`
* `deleteTodo`

---

## 💾 Local Storage

Todos are automatically saved in Local Storage.

```
todos
```

Completed todos are stored separately.

```
checkedTodos
```

This allows the application to persist data even after refreshing the page.

---

## ✨ Functionality

### Add Todo

* Generates a unique UUID
* Prevents duplicate entries
* Validates minimum length
* Shows success notification

### Edit Todo

* Loads the selected todo back into the input field
* Removes the old todo
* Allows updating the text

### Delete Todo

* Removes the todo from Redux
* Updates Local Storage
* Displays a toast notification

### Complete Todo

* Toggle completion status
* Animated custom checkbox
* Line-through styling
* Saved in Local Storage

---

## ⌨️ Keyboard Support

Press **Enter** while the input field is focused to add a new todo.

---

## 📱 Responsive Design

The UI adapts to different screen sizes using Tailwind CSS.

Examples include:

* Responsive input layout
* Responsive todo cards
* Mobile-friendly action buttons
* Flexible spacing

---

## 🎨 Styling

Custom CSS includes:

* Animated checkbox
* Pulse animation
* Dark theme
* Responsive utilities
* Custom width helper
* User selection disabled

---

## 🧠 TypeScript Concepts Used

* Interfaces
* Type aliases
* Generic `useState`
* Typed Redux actions
* Typed Redux state
* `PayloadAction`
* `RootState`
* Type-only imports

---

## 📸 Preview

* Add Todo
* Edit Todo
* Delete Todo
* Complete Todo
* Persistent Local Storage
* Responsive Mobile Layout

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Muhammad Waqas (Hadi)**

Frontend Developer

Built with ❤️ using React, Redux Toolkit, TypeScript, and Tailwind CSS.
