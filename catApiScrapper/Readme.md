# Cat API Scrapper

This is a node script that scrapes the [TheCatAPI](https://thecatapi.com/) breeds data and stores it locally in JSON and image files. You can use this data in your main application or for any other purpose.

## Requirements

To run this script, you need to have the following installed:

* Node.js (version 14 or higher)
* TypeScript (version 4 or higher)
* Axios (version 1.6.5 or higher)

## Installation

To install this script, follow these steps:

1. Clone this repository or download the zip file.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Run `npm run build` to compile the TypeScript files into JavaScript files.
4. Run `npm start` to execute the script.

## Usage

The script will fetch the breeds data from the API endpoint and save it in the following files:

* `data/catBreeds.json`: This file contains an array of objects, each representing a cat breed with various properties such as name, origin, temperament, etc.
* `data/cat-images`: This directory contains the images of each cat breed, named by their reference image ID. For example, `MTgwODA3MA.jpg` is the image of the Abyssinian breed.
* `data/cat-download.log`: This file logs the successful downloads of the images.
* `data/cat-download-error.log`: This file logs the failed downloads of the images and the error status.
* `data/cat-save.log`: This file logs the successful saves of the images.
* `data/cat-save-error.log`: This file logs the failed saves of the images and the error status.

You can use these files in your main application or for any other purpose. For example, you can display the cat breeds and their images in a web page or a mobile app.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.