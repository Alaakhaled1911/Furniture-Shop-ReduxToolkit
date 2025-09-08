# Furniture Store - React Application

A modern, responsive furniture e-commerce application built with React, Redux Toolkit, and Bootstrap.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Product Catalog**: Browse furniture by categories (chairs, living room, beds, lamps)
- **Shopping Cart**: Add/remove items with persistent cart state
- **Best Sellers**: Featured products section
- **User Authentication**: Login and user management
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **Redux Persist** - State persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd proj
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Component Architecture

### Layout Components

- **Header**: Navigation bar with cart and user info
- **Footer**: Site footer with links and contact info

### Page Components

- **Home**: Main landing page with hero section and featured products
- **About**: Company information and features

### Product Components

- **ProductList**: Grid display of products with filtering
- **BestSellers**: Featured products carousel

### UI Components

- **HeroSection**: Landing page hero with call-to-action
- **InfoSection**: Feature highlights grid

## 🔧 State Management

The application uses Redux Toolkit for state management with the following slices:

- **Products Slice**: Manages product data, cart items, and user info
- **Persistence**: Cart and user data persist across browser sessions

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features Implementation

### Product Management

- Local product data (moved from external JSON server)
- Category-based filtering
- Product search and sorting

### Shopping Cart

- Add/remove items
- Quantity management
- Persistent cart state
- Cart total calculation

### User Experience

- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Loading states and error handling
- Responsive navigation

## 🔮 Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication with JWT
- [ ] Payment processing
- [ ] Order management
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filters
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email support@furniturestore.com or create an issue in the repository.
