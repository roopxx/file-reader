# File Reader Frontend Application

This is a simple frontend application built using React and Tailwind CSS. The application allows users to search for specific terms within a text file, displays search results with highlighted matches, and provides a search history feature.

## Functionality

- **Search Box**: Users can enter search terms in the input field and click the "Search" button or press the "Enter" key to search for occurrences of the term within the provided text file.
- **Search Results**: The application displays the total occurrences of the search term in the text file and highlights the matching terms in the content.
- **Search History**: Previous search queries are saved and displayed as a dropdown list when the user clicks on the search input field. The search history is limited to 5 items and is displayed in reverse chronological order.
- **Keyboard Shortcuts**: Users can interact with the application using keyboard shortcuts for efficiency. Pressing the "Escape" key clears the search term and results, while pressing the "s" key focuses on the search input field.

## Setup

To set up and run the project locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/roopxx/file-reader.git
   ```

2. **Navigate to Project Directory**: Change your current directory to the project directory:

   ```
   cd file-reader
   ```

3. **Install Dependencies**: Install project dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. **Start the Development Server**: After installing dependencies, start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn run dev
   ```

5. **Access the Application**: Once the development server is running, open your web browser and navigate to `http://localhost:3000` to access the File-reader application.

## Usage

1. Enter a search term in the search input field.
2. Press the "Search" button or press the "Enter" key to search for occurrences of the term within the text file.
3. View the search results, including the total occurrences and highlighted matches.
4. Click on the search input field to view and select from the search history dropdown list.
5. Use the "Escape" key to clear the search term and results, and use the "s" key to focus on the search input field.
