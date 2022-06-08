/* 
    Author: Chiekko Red Alino
    Date Created: 11/8/21
    Updated On:
    Updated By: 
    Description: api requests for camera text recognition & utils
*/

// API URL
const API_URL = 'http://192.168.68.103:8080';

// API Requests
export const REQUEST = {

  // Description: This endpoint is for test to connection.
  // Response: 200, body: “OK”
  test: function(){
    fetch(`${API_URL}/test`, {method: 'GET'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );
  },

  // Description: It will take some time for character recognition. 
  // If you upload an image to this endpoint, the response will be returned without waiting for the character recognition to finish.
  // Response: 202, id
  upload_later: function(data){
    fetch(`${API_URL}/upload-later`, {body: data, headers: {'content-type': 'multipart/form-data'},method: 'POST'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );
  },

  // Description: It is a simple endpoint that uploads an image and receives the character recognition result as a response.
  // Response: 200, ResultModel
  upload_immediately: async function(data){
    const details_scanned = await fetch(`${API_URL}/upload-immediately`, {body: data, headers: {'content-type': 'multipart/form-data'}, method: 'POST'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );

      return details_scanned;
  },

  // Description: Retrieves all calculated results for a user ID.
  // Response: 200, list[ResultModel]
  result: function(){
    fetch(`${API_URL}/result`, {method: 'GET'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );
  },

  // Description: Since character recognition is not perfect, user feedback is needed. 
  // Response: 200
  update: function(){
    fetch(`${API_URL}/update`, {method: 'GET'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );
  },

  // Description: 
  // Response: list[Image]
  load_image: function(){
    fetch(`${API_URL}/load-image`, {method: 'GET'})
      .then(async response => {
        let res = await response.json();
        res ? console.log('success') : console.log('unsuccessful');
        return res;
      })
      .catch(err => console.log(err)
      );
  },
}