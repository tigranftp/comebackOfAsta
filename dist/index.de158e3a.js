document.addEventListener("DOMContentLoaded", ()=>{
    // Unix timestamp (in seconds) to count down to
    var dayOfComeback = new Date("2024-02-02T03:27:00+0000").getTime() / 1000;
    // Set up FlipDown
    new FlipDown(dayOfComeback)// Start the countdown
    .start()// Do something when the countdown ends
    .ifEnded(()=>{
        console.log("The countdown has ended!");
    });
});

//# sourceMappingURL=index.de158e3a.js.map
