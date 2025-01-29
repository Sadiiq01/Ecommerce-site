# eCommerce Website

## Overview
This is a modern eCommerce website built using React, TypeScript, React Query, Tailwind CSS, and a dummy API for product data. It allows users to browse products, view product details, add items to the cart, and complete orders.

## Features
- Display a list of products
- Product details page
- Add to cart functionality
- Cart management
- Checkout process
- Responsive design

## Technologies Used
- React.js
- TypeScript
- React Router
- React Query
- Tailwind CSS
- Axios (for API requests)
- DummyJSON API (for product data)

## Installation
### Prerequisites
Make sure you have **Node.js** and **npm** (or yarn) installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-site.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ecommerce-site
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```
5. Open `http://localhost:5173/` in your browser.

## Project Structure
```
📂 ecommerce-site
├── 📂 src
│   ├── 📂 components   # Reusable components
│   ├── 📂 pages        # Page components (Home, Product Details, etc.)
│   ├── 📂 context      # Context API for state management
│   ├── 📂 hooks        # Custom hooks
│   ├── 📂 utils        # Utility functions
│   ├── 📂 types        # TypeScript type definitions
│   ├── 📜 App.tsx      # Main application component
│   ├── 📜 main.tsx     # Entry point
├── 📜 package.json     # Project dependencies
├── 📜 README.md        # Project documentation
```

## API Usage
This project fetches products from the **DummyJSON API**.
- **Get all products:** `https://dummyjson.com/products`
- **Get a single product:** `https://dummyjson.com/products/:id`

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to your branch: `git push origin feature-name`
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or questions, contact **Sadiiq Mukhtaar Maxamed** via email: [sadiiqmukhtaar@gmail.com](mailto:sadiiqmukhtaar@gmail.com).

