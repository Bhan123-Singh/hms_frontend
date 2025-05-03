# hms frontend
## Setup Instruction
step-1: Clone the Project  

```
git clone  https://github.com/Bhan123-Singh/hms_frontend.git

```
step-2: move in to directory

```
cd hms_frontend
 
```
step-3: install Dependencies

```
npm install

```
step-4: run the server

```
npm run dev

```

### Setup istruction for tailwind
[Tailwind official instruction doc]
(https://tailwindcss.com/docs/installation/tailwind-cli )


step-1: Install Tailwindcss
```
npm install tailwindcss @tailwindcss/vite

```
step-2: Confige the vite plugin
```
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

```
step-3: Import Tailwind CSS in index.css file

```
@import "tailwindcss"

```
step-4: add link in index.html file

```
  <link href="/src/styles.css" rel="stylesheet">
  
```
step-5: Start your build process

```
npm run dev

```

### Adding plugins and dependencies
```
npm install
 @reduxjs/toolkit
 react-redux
 react-router-dom
 react-icons react-chart-2
 chart.js 
 daisyui
 axios
 react-hot-toast
 @tailwindcss/line-clamp

```
### Add the Toaster for message

```
react-hot-toast

```
