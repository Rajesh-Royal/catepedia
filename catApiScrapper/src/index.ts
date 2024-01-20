import axios, { AxiosError } from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import {pipeline, type PipelineSource} from 'stream'
import * as util from 'util';
import type { CatApiResponse } from './catBreedInterface'

// Convert pipeline to Promise form to use with async/await
const pipelineAsync = util.promisify(pipeline);

// API endpoint
const url = 'https://api.thecatapi.com/v1/breeds';

axios.get<CatApiResponse[]>(url)
  .then(async response => {
    const data = response.data;
  
    // Create a directory to store the images
    const catDir = 'data/cat-images';
    const catImagesDirectory = path.join(__dirname, '..', catDir);
    if (!fs.existsSync(catImagesDirectory)) {
      fs.mkdirSync(catImagesDirectory, {recursive: true});
    }

    fs.appendFile('data/catBreeds.json', JSON.stringify(data), (err) => {
      if(err) console.error('failed to save catBreeds data to json', err);
    });

    // Loop through the data
    for (let cat of data) {
      // Get the image URL
      const imageUrl = 'https://cdn2.thecatapi.com/images/' + cat.reference_image_id + '.jpg';

      // Path to save the image
      const pathToSaveImage = path.resolve(catImagesDirectory, cat.reference_image_id + '.jpg');

      // Download and save the image
      const response = await axios<PipelineSource<any>>({
        method: 'get',
        url: imageUrl,
        responseType: 'stream'
      }).then((res) => {
        console.log(res);
        const logMessage = 'Downloaded Image ---------> ' + cat.reference_image_id + ' <----------------------\n';
        fs.appendFile('data/cat-download.log', logMessage, (err) => {
          if (err) throw err;
        });
        return res;
      }).catch((error) => {
        // Log the failed download
        const logMessage = 'Failed to Download the image ---------> ' + cat.reference_image_id + ` <---------------------- | error status: ${JSON.stringify(error)} \n`;
        fs.appendFile('data/cat-download-error.log', logMessage, (err) => {
          if (err) throw err;
        });
      });

      if (response && response?.data) {
        // Use pipeline to handle backpressure and errors properly
        await pipelineAsync(response.data, fs.createWriteStream(pathToSaveImage)).then(() => {
          // Log the download
          const logMessage = 'Image Saved ---------> ' + cat.reference_image_id + ' <----------------------\n';
          fs.appendFile('data/cat-save.log', logMessage, (err) => {
            if (err) throw err;
          });
        }).catch((error) => {
          // Log the failed download
          const logMessage = 'Failed to save the image ---------> ' + cat.reference_image_id + ` <---------------------- | error status: ${JSON.stringify(error)} \n`;
          fs.appendFile('data/cat-save-error.log', logMessage, (err) => {
            if (err) throw err;
          });
        });
      }

    }
  })
  .catch((error : AxiosError) => {
    console.log(error);
  });
