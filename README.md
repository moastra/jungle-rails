# Jungle

Jungle is a mini e-commerce application built with Rails 6.1. It serves as a teaching example to showcase the development of a fully functional e-commerce platform using Ruby on Rails. The application includes key features such as product management, user authentication, order processing, and admin functionality.

## Goal

The goal of Jungle is to demonstrate how to build a feature-rich, real-world e-commerce application with Rails. It focuses on essential functionalities like product listing, order processing, and user authentication.

## Functional Requirements

### Feature: Sold Out Badge

- **Major**: When a product has 0 quantity, a "Sold Out" badge should be displayed on the product list page.
- **Minor**: Ideally implemented as a boolean method in a view helper or the Product model.

### Feature: Admin Categories

- **Major**: Admin users can list and create new categories.
- **Major**: Admins can add new products using these new categories.
- **Major**: Restful routes (resources) are used, with no extra unused routes exposed.
- **Bonus**: Admin controllers inherit from an abstract controller (e.g., `Admin::BaseController`) with an authentication filter.

### Feature: User Authentication

- **Major**: Visitors can register, sign in, and log out from any page.
- **Major**: Registration requires an email, password, first name, and last name.
- **Major**: User passwords are securely stored using `has_secure_password` and bcrypt.
- **Major**: Users cannot sign up with an existing email (uniqueness validation).

### Enhancement: Order Details Page

- **Major**: Displays order items, including their image, name, description, quantities, and line item totals.
- **Major**: The final amount for the order is displayed.
- **Minor**: Displays the email used for the order.
- **Minor**: Visitors can place orders without signing in.

### Bug: Missing Admin Security

- **Major**: Admin functionality is protected by HTTP authentication (login/password).
- **Bonus**: This should ideally be implemented in an abstract top-level class for admin controllers (e.g., `Admin::BaseController`).

### Bug: Checking Out with Empty Cart

- **Major**: If the cart is empty, the `carts#show` page displays a message about the empty cart and provides a link to the home page instead of showing checkout options.

## Setup

1. Run `bundle install` to install dependencies.
2. Create `config/database.yml` by copying `config/database.example.yml`.
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`.
4. Run `bin/rails db:reset` to create, load, and seed the database.
5. Create an `.env` file based on `.env.example`.
6. Sign up for a Stripe account and place your test API keys in the `.env` file.
7. Run `bin/rails s -b 0.0.0.0` to start the server.

## Database

If Rails complains about database authentication, uncomment the user and password fields in `config/database.yml` under the development and test sections, and provide the correct credentials for an existing database user.

## Stripe Testing

To test the Stripe integration, use the following test credit card number: `4111 1111 1111 1111`.

For more information on Stripe testing, refer to their [documentation](https://stripe.com/docs/testing#cards).

## Dependencies

- Ruby on Rails 6.1
- PostgreSQL 9.x
- Bootstrap 5
- Stripe for payment processing

## Screenshots

#### Product List with Sold Out Badge
![Sold Out Badge](path/to/screenshot1.png)

#### Admin Categories
![Admin Categories](path/to/screenshot2.png)

