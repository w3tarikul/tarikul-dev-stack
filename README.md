# tarikul-dev-stack

**Dev Stack** is a responsive web app that helps developers explore popular technologies and build their own tech stack. You can browse frontend, backend, database, language, styling, and DevOps tools, compare them by rating and difficulty, and add your favorites to a personal **Your Stack** panel.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| **React** | Building the UI with components, props, and state |
| **TypeScript** | Adding types for safer, easier-to-read code |
| **Tailwind CSS** | Styling and responsive layouts |
| **React-Toastify** | Alert messages for stack actions |
| **JSON** | Storing the technology data |
| **Vite** | Fast development server and build tool |

---

## ✨ Features

1. **Build your own stack** – Click **Add to Stack** on any technology card to add it to the Your Stack panel. The same technology can't be added twice, and each item can be removed one by one or all at once with **Remove All**.
2. **Instant feedback** – Toast alerts appear when you add a technology, try to add a duplicate, remove one, or clear the stack. A loading spinner shows while the technology data is being loaded.
3. **Fully responsive with a smart navbar** – The layout adapts to mobile, tablet, and desktop screens. On small screens the navbar shows a hamburger menu, and on every screen it hides when you scroll down and comes back when you scroll up.

---

## 🚀 Run It Locally

```bash
git clone https://github.com/w3tarikul/tarikul-dev-stack.git
cd tarikul-dev-stack
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📚 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React turns it into regular JavaScript that builds the page.

We use it because the UI is much easier to read and write. The markup and the data it shows live in the same place, and we can put JavaScript values inside `{ }`.

```tsx
<h3>{name}</h3>
<p>{description}</p>
```

### 2. What is the difference between props and state?

- **Props** are data a parent component **passes down** to a child. The child can read them but should not change them.
- **State** is data a component **owns and can change**. When state changes, React re-renders the component.

In this project, `TechCard` receives `technology`, `isAdded`, and `onAddToStack` as **props**, while `TechnologySection` keeps the selected `stack` in its own **state**.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` creates a piece of state inside a component. It gives back the current value and a function to update it, and updating it re-renders the component.

I used it in:

- **`TechnologySection`** – `technologies` (the loaded data), `stack` (selected technologies), and `isLoading` (loading state)
- **`Navbar`** – `activeLink` (highlighted link), `isMenuOpen` (mobile menu), and `isHidden` (smart sticky header)

```tsx
const [stack, setStack] = useState<Technology[]>([])
```

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code **after** a component renders. It is used for side effects such as fetching data or adding event listeners.

I needed it to load the JSON because fetching data directly in the component body would run on every render. Every time the data was saved to state, the component would render again and fetch again, creating an endless loop. With an empty dependency array `[]`, the effect runs only once, when the component first appears.

```tsx
useEffect(() => {
  fetch('/technologies.json')
    .then((response) => response.json())
    .then((data: Technology[]) => setTechnologies(data))
    .catch(() => toast.error('Could not load technologies. Please try again.'))
    .finally(() => setIsLoading(false))
}, [])
```

### 5. Why does every item in a .map() list need a unique key prop?

The `key` helps React tell list items apart. When an item is added, removed, or moved, React uses the key to update only that item instead of rebuilding the whole list. Keys should be unique and stable, so I used each technology's `id` instead of the array index.

```tsx
{technologies.map((technology) => (
  <TechCard key={technology.id} technology={technology} />
))}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition, usually with a ternary `? :` or `&&`.

In the Your Stack panel, if nothing is selected it shows an empty message; otherwise it shows the list of selected technologies:

```tsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <ul>
    {stack.map((technology) => (
      <li key={technology.id}>{technology.name}</li>
    ))}
  </ul>
)}
```

I also used it for the loading spinner and for switching the card button text to **✓ Added to Stack**.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent → child:** the parent passes data as **props**.
- **Child → parent:** the parent passes a **function** as a prop, and the child **calls that function** when something happens.

In this project, `TechnologySection` (parent) passes the technology data and a `handleAddToStack` function to `TechCard` (child):

```tsx
<TechCard
  technology={technology}
  isAdded={stack.some((item) => item.id === technology.id)}
  onAddToStack={handleAddToStack}
/>
```

When the button is clicked, the card calls the function and sends the technology back up, and the parent updates the stack:

```tsx
<button onClick={() => onAddToStack(technology)}>Add to Stack</button>
```
