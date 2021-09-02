// sanity test
   // alert("lets go!");
// learning loops   

// for 
   // for - when I know how many
// while
   // while - just keep doing it until i'm done
// do-while

// loop until we reach 10
/*
for (let idx = 10; idx >= 1; idx--)
{
    // we have the code we want repeat
    console.log(`Current iteration is ${idx}`);
}
// this line code will run when we exit the loop
alert('Done with the loop thangy');
*/

//Even in a while loop we still have end condition

// Classic user input for when to quit
// let whileNotEddie = true  // flag

// while (whileNotEddie)
// {
    // get name from user
    // let coolName = prompt("Enter a cool name").toUpperCase();

    //debug this with science
    //alert(coolName);
    // did they enter the name we wanted?
    // if ( coolName === "Eddie") {
        //   whileNotEddie = false;
    // }
// }

// alert('Done with the while loop thingy');

// keep asking the user for a cool name until they enter Eddie
/*while (x <= 10)
{
    console.log(`Current iteration is ${x}`);
    x++;
}

alert('Done with the while loop thingy');
*/
console.log('BREAK OFF THE ATTACK! Their shields are still up!');
setTimeout(itsATrap, 30000) // call the ducntion itsatrap after 3 seconds

// this is our callback function
?*function itsATrap() 
{
   const msg = "IT'S A TRAP!"
   console.log(msg);
   alert(msg);
}
