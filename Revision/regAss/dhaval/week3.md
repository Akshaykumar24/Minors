/*
Pagination
- Pagination means dividing the total results into smaller chunks which can be shown as pages to not overwhelm the customer and also more the data we pass to the frontend, slower the performance and we end up wasting users internet which may not be necessary so for these reasons we have pagination

- For Pagination we only need 2 things from the frontend , which is page number and items per page ( this may not be required if page size is fixed on the frontend ).

- The query for pagination is :-
`db.model.find({"query to be executed"}).skip(offset).limit(size)`

- so how to calculate offset and size ?
Now if we are on page 1 then we need first 10 results so offset is 0 and size is 10. so If we are on page 2 then we need results from 11 to 20 and size is 10. so from above dummy calculation we can formulate our page calculation as :-
`offset = ( page - 1) * size`
`size = size` ( same number that we received from frontend )

Finally we also need to calculate the totalPages for the query so that frontend can show the next and previous arrows properly, for e.g :- if the user is on last page then they will not show next and if he is on first page then they will not show previous and a lot of other cool things can be done with this totalPages data.
Emails
- The most common protocol for sending emails is SMTP ( Simple Mail Transfer Protocol ) but you may also want to know about IMAP and POP3 which are mostly used by our email clients.

- Sending emails is integral part of almost all applications and emails can be of 2 types

    - Transactional :- This are triggered by events that happen in the system like registration, payment, etc

    - Promotional :- These are sent in bulk and mostly for marketing purposes and are commonly generated through cron jobs or some UI given to the business team.

- For sending emails in Express and node in general we use the Nodemailer package and before sending an email you need to configure a few things

- configure an SMTP server to do the actual work of sending emails and there are many SMTP service providers like AWS SES, Sendgrid, Mailchimp but for testing the best provider is mailtrap.io which intercepts the mail send from your system to the recipient and you can clearly see how the email looks.

- Once you finalise the provider then you can create an account and it will give you some credentials which you need to save in your machine and use it for authentication with the SMTP provider.

- Once you have this then you can write the code and send an email ..
Validations
- validations are used to validate post form fields to ensure that whatever we need is present in the way we want it to be present and even though you guys are used to doing frontend validations but still validations must be performed on backend also as frontend code is available inside browser and user might modify it to bypass our validations hence backend validation is required and also remember to add validations to your database schema so that you have an additional layer of protection but you should never default to database validations.

- we will use [express-validator](https://express-validator.github.io/docs/) and documentation for the same is available at express validator.
File Uploads
- For uploading files you need to ensure that your frontend form is using encType of multipart/form-data and then you pass the file in the post request and this then we upload this file to local system and then optionally push it to cloud (In production systems DO NOT put things inside local system ) and once the file is saved, we will use the file path and save it in the database for retrieval later.

- We are using [multer](https://www.npmjs.com/package/multer) npm package to help us with file uploads and you can check how it is used in the video.
For video references I would recommend watching pre class videos for all of them
- [Pagination and emails ](https://masai-course.s3.ap-south-1.amazonaws.com/lecture/7279/material/f75dddd1e79826a219cb0bec217dc096/zoom_0.mp4)
- [Validations](https://masai-course.s3.ap-south-1.amazonaws.com/lecture/7323/material/3f24bb08a5741e4197af64e1f93a5029/zoom_0.mp4)
- [File Uploads](https://masai-course.s3.ap-south-1.amazonaws.com/lecture/7364/material/d82f9436247aa0049767b776dceab4ed/zoom_0.mp4)
*/
