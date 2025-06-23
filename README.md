# **ReUI Components Library**  

Developing a UI component library using React TS + Vite + Tailwind CSS. 

🚀 A modern, reusable UI components library built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## 🔥 Features
- ✅ **React + TypeScript** for strong typing & maintainability  
- ✅ **Tailwind CSS** for rapid styling & responsiveness  
- ✅ **Vite** for lightning-fast bundling & development  
- ✅ **Reusable & customizable** components for easy integration  
- ✅ **Optimized for performance**


## 🚧 Under Development 🚀  
This UI components library is **actively being built** and **improved on the go**.  

- 🛠 **New components** are being added continuously.
- **Existing components** are to be redeveloped as needed, and additional customizations are required for the user.
- **Existing readme doc** is also a part of the process, where it will be updated every time with an updated version.
- 🔧 **Optimizations** and feature enhancements will come over time.  
- 📅 **Roadmap updates** will be shared in upcoming releases.  

Below is the guide to let you demonstrate my work.

```md
## 🛠️ How to Use  
You can **test and integrate this UI library** into your own project by following these steps:

## 1. Clone the Repository
```sh
git clone https://github.com/ParagNukte/reui-component-library
```

### **2. Navigate to the Cloned Repository (reui)**  
```sh
cd reui
```

### **3. Install the Local Package in Your Project**  
Replace `"D:\Components\ui-v4\reui"` with the actual path where the package (.tgz file) is stored to install the:  
```sh
npm install D:\Components\ui-v4\reui
```

### **4. Add the Library to Your Global CSS File**  
Modify your global stylesheet (e.g., `index.css` or `global.css`) to include the `Tailwind CSS` styles and classes:  
```css
@import "tailwindcss";

@source "../node_modules/reui";      <--- add this line, don't forget to replace the path of the .tgz file.
```

### **5. Ensure Peer Dependencies Are Installed**  
This library requires `react`, `react-dom`, and `tailwindcss` as peer dependencies; they are included by default in Vite. Install them if missing:  
```sh
npm install react react-dom
```

Now you can start using the components inside your project! 🚀  


### Basic Usage with Primary Variant

To use the **`Button`** component with its default primary styling, you can simply import it and include it in your JSX.

```jsx
import React from 'react';
import { Button } from 'reui'; // Adjust the import path to your library

const App = () => {
  const handleClick = () => {
    // Handle button click logic here
    console.log("Primary button clicked!");
  };

  return (
    <div className="p-4">
      <Button onClick={handleClick}>
        Get Started
      </Button>
    </div>
  );
};

export default App;

```
## NOTE:: If you are using this in the NextJS app, do not forget to use `"use client"` to successfully render the component.



Feel free to explore, contribute, and suggest improvements! 😊
