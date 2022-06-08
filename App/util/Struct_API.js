/* 
    Author: Chiekko Red Alino
    Date Created: 11/8/21
    Updated On:
    Updated By: 
    Description: api requests for camera text recognition & utils
*/

// API URL
const API_URL = 'http://192.168.68.103/php-booster/trunk/booster2/application/html/react-api';

// API Requests
export const STRUCT_API = { 
    GET: url => fetch(`${API_URL}/test`, {method: 'GET'}),
    POST: async function(data, url){
        try {
            const response = await fetch(`${API_URL}/${url}.php`, { body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }, method: 'POST' });
            return await response.json();
        } catch (err) {
            return console.log('Error API: '+err);
        }
      },
    // POST: url => data => fetch(`${API_URL}/login.php`, {body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}, method: 'POST'}),
    UPDATE: url => axios.post(`${API_URL}/${url}`),
    DELETE: url => axios.post(`${API_URL}/${url}`),
}