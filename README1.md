# Currency Converter

A simple React currency converter app that allows you to convert between different currencies using live exchange rates.

## Features

- Convert any amount between supported currencies
- Live exchange rates fetched from a public API
- Swap currencies with a single click
- Responsive and modern UI with a background image

## Demo

![Screenshot](./image.png)
<!-- Replace with your actual screenshot file -->

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/puneetdixit2004/currency-converter.git
    cd currency-converter
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App

```sh
npm start
# or
yarn start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
  components/
    inputbox.jsx
  hook/
    useCurrencyInfo.js
  App.jsx
  index.js
```

## How It Works

- Enter an amount and select currencies to convert.
- Click **Convert** to see the result.
- Use the **swap** button to switch the "from" and "to" currencies.

## API Used

- [ExchangeRate API](https://open.er-api.com/v6/latest/USD)

