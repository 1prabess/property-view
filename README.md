


# Property View - Django Practice Project
A Django web app for uploading, processing, and visualizing property data from CSV files using Pandas. The app displays key insights through charts and graphs.
## Features

- Upload property data from CSV files.
- Process and visualize data using **Pandas**.
- Display insights with **charts** and **graphs**.

## CSV Data Format

Ensure your CSV file follows this format:

| property_name | property_price | property_rent | emi  | tax  | other_exp |
| -------------- | -------------- | ------------- | ---- | ---- | --------- |
| orchid         | 500000         | 5000          | 500  | 150  | 32        |
| esplanade      | 300000         | 3000          | 300  | 230  | 34        |
| supreme        | 400000         | 4000          | 400  | 455  | 67        |
| magante        | 600000         | 6000          | 600  | 211  | 97        |
| belair         | 1000000        | 10000         | 1000 | 345  | 554       |

## Installation

1. Clone the repository

2. Set up the virtual environment:

   ```
   python3 -m venv env
   source env/bin/activate  # On macOS/Linux
   ```

3. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

## Running the Project

1. Apply database migrations:

   ```
   python manage.py migrate
   ```

2. Run the development server:

   ```
   python manage.py runserver
   ```

3. Access the app at `http://127.0.0.1:8000`.


