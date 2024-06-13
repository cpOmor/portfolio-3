export const modifyPayload = (values) => {
   const obj = { ...values };
   const file = obj['file']; // Get the file from the form values
 
   const formData = new FormData();
 
   // Append all other fields to FormData
   for (const key in obj) {
     if (key !== 'file') { // Skip the file field
       formData.append(key, obj[key]);
     }
   }
 
   // Append the file with the key 'image' as expected by the backend
   formData.append('image', file);
 
   return formData;
 };
 