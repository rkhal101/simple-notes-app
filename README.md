# Notes Application

Simple NodeJS application that allows you to create, delete, list and view notes using the command line. The application uses the [chalk](https://www.npmjs.com/package/chalk) API to customize the console. This application was developed as part of the [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2/).

## Commands

The following are the commands you can use in the application.

### Add a Note

    node app.js add --title="title-of-note" --body="body-of-note"
    
### Remove a Note

    node app.js remove --title="title-of-note"

### List Notes

    node app.js list
    
### Read Note

    node app.js read --title="title-of-note"


## Sample Commands and Corresponding Output
    node app.js add --title="Things to Do" --body="Don't forget to get groceries."

![add_note](/sample-output-images/add-note.png)

    node app.js add --title="Things to Do" --body="Don't forget to get groceries."

![add_existing_note](/sample-output-images/add-existing-note.png)

    node app.js read --title="Things to Do"

![read_note](/sample-output-images/read-note.png)

    node app.js read --title="Non existing note"

![read_non_existing_note](/sample-output-images/read-non-existing-note.png)

