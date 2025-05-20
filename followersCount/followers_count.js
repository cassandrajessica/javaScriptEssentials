// starting point counter
let count = 0;

// function increases follower count
function increaseCount() {
    count++;
    displayCount(); // hosting example
    checkCountValue();  // hosting example
}

// will display followers through html found on <p>
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

//function to send message based on followers gained
function checkCountValue() {
    if(count === 10) {
        alert("Your insta post gained 10 followers! Congrats!");
    } else if(count === 20) {
        alert("Your insta post gained 20 followers! Nice Job!");
    }
}

// function resets follower count back to 0
function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML = count;
    alert("Follower count has been reset");
}