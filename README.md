# Quest - Quest Creating App

I created this app with the intentions of creating a workspace board for developers to track their own progress on their own projects or with other miscellenious things like creating a PC. Quest lets you create a quest and with that quest you can add any amount of activities that'll help you complete your own quest. It serves as a way to keep track of your own progress.

## How Does it Work

It's as simple as signing in or creating an account. Using the firebase SDK you can also login with Google if you dont want the hastle. As you sign in you can create a board. This board is going to be the place where you can create all your goals. You can add quest to those goals. If you feel like a quest belongs to another goal you can simply drag and drop that quest into any goal.
## Stack

I used react for the frontend and express, node, firebase, and postgres for the backend. The cool thing about this project is that it has a database hosted in heroku, so if you logout it still saves the progress on your quest. Logging in is easy as well as I added the Google signin feature from firebase.

## Things I've Learned

The best thing that I've learned from this project is that I could manipulate useState with functions as long as the useState is some sort of Object. For example, I had a useState of an array I could manipulate that arr with a filter using setArray(array.filter()) because it's gonna return an array, but I could now manipulate that same array because the filter serves as a function that I can manipulate to my customs.

