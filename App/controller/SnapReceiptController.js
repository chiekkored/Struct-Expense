/* 
    Author: Chiekko Red Alino
    Date Created: 11/8/21
    Updated On:
    Updated By: 
    Description: for screen controllers
*/
import { REQUEST } from "../util/TextRecog_API";

export const SnapReceiptController = {

    proceedScanReceipt: async function (data){
        const results = [];
        try {
            for (let index = 0; index < data.length; index++) {
                const photo = {
                    uri: data[index].source,
                    type: 'image/png',
                    name: 'receipt',
                  };
        
                var photo_data = new FormData();
                photo_data.append('user_id', 1);
                photo_data.append('image', photo);
    
                const scanned_details = await REQUEST.upload_immediately(photo_data);
                scanned_details['uri'] = data[index].source;
                results.push(scanned_details);
            }
            return results;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}