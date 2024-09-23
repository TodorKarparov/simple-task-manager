# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Project structure

```bash
 /src
|-- /assets            # Static files like images and global styles
|-- /components        # Reusable components
|   |-- /common        # Generic components like Button, Input, etc.
|   |-- /layout        # Components that dictate layout
|-- /features          # Feature-based grouping
|   |-- /auth          # Authentication related components and logic
|       |-- AuthForm.tsx   # Component for login/signup forms
|       |-- useAuth.ts     # Custom hook for authentication logic
|       |-- authService.ts # Service to handle API calls for auth
|-- /models            # MobX stores and models
|   |-- userStore.ts   # Store for user-related data
|-- /pages             # Components representing pages
|   |-- HomePage.tsx   # Example home page
|   |-- LoginPage.tsx  # Login page component
|-- /services          # Services for API calls
|   |-- api.ts         # Setup axios or fetch instances
|-- /utils             # Utility functions and helpers
|-- App.tsx            # Main app component
|-- index.tsx          # Entry point that renders the App component
|-- vite-env.d.ts      # Vite-specific typings
|-- globals.d.ts       # Global type definitions
```

1. **Components**: This directory contains all the reusable UI elements. Splitting them into common for very generic components like buttons and inputs, and layout for components that might dictate page layout helps in isolation and reusability.

2. **Features**: Grouping by feature (like auth for authentication) keeps related logic bundled together. This can include form components, hooks for business logic, and services that interact with the backend.

3. **Models**: This is where you define your MobX stores. For instance, a userStore can manage user authentication state, current user information, and session tokens.

4. **Services**: Dedicated service files (like authService.ts) handle API requests. These abstract away the API logic from UI components, making your application easier to maintain.

5. **Pages**: Represents the components that are mapped to routes. Each page component corresponds to a route in your application.
