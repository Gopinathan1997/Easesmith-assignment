# 🌿 Plant Shop - Product Listing

This project is a simple **Plant Shop** app built with **React.js**. The app allows users to view products, interact with a popup for adding items to the cart, and get redirected to a "Thank You" page.

## 🛠️ Implementation Overview
## 📋 Features

- **Product Listing**: Displays plants with images, names, and prices.
- **Product Rating**: Each product includes a rating feature using star icons.
- **View Product**: Redirects to a "Thank You" page upon viewing a product.
- **Add to Cart Modal**: Popup modal to confirm adding a product to the cart.
- **Home Redirect**: Users can return to the home page from the "Thank You" page.


### View Product and Redirection to "Thank You" Page
When the user clicks on the **View Product** button:
- The app programmatically redirects to a "Thank You" page using **React Router**.
- The "Thank You" page includes the name of the viewed product, passed as a parameter in the URL.

### Add to Cart Modal
Clicking the **Add to Cart** button opens a popup modal. The modal is implemented using **reactjs-popup**, allowing users to confirm their choice and close the modal when finished.

### Home Redirect
The user can navigate between the main product listing page (home) and the "Thank You" page. Clicking "View Product" redirects the user to the "Thank You" page, and they can return to the home page easily.

## 🏆 Challenges Faced

While implementing this project, I initially tried using **React Bootstrap Modal** for the "Add to Cart" functionality. However, it did not give the expected result in terms of design and behavior. As a result, I switched to **reactjs-popup**, which provided a cleaner, more flexible solution for handling modals.



## 🚀 Getting Started

Follow these steps to set up the project locally:

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/plant-shop.git
