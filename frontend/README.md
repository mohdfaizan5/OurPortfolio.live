```sh
npm create vite@latest
```

> Note: you will face issues if your path has some ` `, `#, %*` character, remove them and run.

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add this to content value in `tailwind.config.js` 
```sh
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

