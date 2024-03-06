# Shopping Cart Application

## Overview

This repository is dedicated to a Shopping Cart Application developed with React. It demonstrates two distinct approaches for state management within React applications: one using the `useState` hook and the other leveraging `useReducer` alongside `useContext`. This project serves as an educational tool to showcase different methods of handling complex state logic in React.

## Features

- **Item Management**: Users can add, remove, or adjust the quantity of items in their shopping cart.
- **Dynamic Price Calculation**: The total price updates in real time as users change item quantities.
- **Persistent State**: The application uses local storage to persist the state of the shopping cart across browser sessions.

## Implementation Details

- **useState Implementation**: Initially, the shopping cart's state is managed using the `useState` hook. This approach keeps the logic simple and straightforward, making it suitable for applications with a relatively flat component hierarchy or less complex state management needs.
- **useReducer and useContext Implementation**: To address the limitations of the `useState` approach in more complex scenarios, the application is refactored to use `useReducer` for state logic and `useContext` for state sharing across components. This method provides a more scalable and maintainable approach to state management, especially in applications with deep component trees or where multiple components need access to the same state.

## Purpose

The main objective of this repository is to provide a practical comparison between using `useState` and `useReducer` with `useContext` for state management in React applications. It aims to help developers understand the trade-offs of each approach and make informed decisions when architecting their own applications.

## Getting Started

To get started with this project, clone the repository, install dependencies, and run the application in your local development environment. Explore the code to see how the shopping cart is implemented with each state management technique.

## Contributing

Contributions to this project are welcome. Whether it's improving the documentation, adding new features, or reporting bugs, your input is highly valued. Please feel free to submit pull requests or open issues to discuss proposed changes or enhancements.

## License

This project is open source and available under the [MIT License](LICENSE.md).
