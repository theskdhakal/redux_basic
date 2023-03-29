1. build ui components
2. set redux store
   a. create store file
   b. set up store with react app through index.js
   c.create slice and add to the store of (2.a).
3. on input field change, call action creater from slice to update state inside the Form Compponent
4. to read the data from step #3 in real time, bring the state data inside the formcontainer component.
5. on form submit inside the form Component, call another action create ti update another state inside the slice.
6. to display the list of name(data) created by step #5 in the display component, pull the state variable inside the Display Component and loop through the array and display it.
