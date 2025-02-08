let currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

onload = () => {
    let posts = document.querySelector(".posts");
    let postCount = Number(window.localStorage.getItem("posts")) || 0;
        
    if (postCount !== 0) {
         posts.textContent = `You have created ${postCount +1} reviews of our products.`;
        
        } else {            
            posts.textContent = `Thank you for posting your first product review.`;
        }

        postCount++;

        window.localStorage.setItem("posts", postCount);
    };