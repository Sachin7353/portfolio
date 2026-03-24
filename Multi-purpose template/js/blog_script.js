const heroImg = document.querySelector(".hero-img");
const form = document.querySelector(".comment-form");
const nameInput = form.querySelector("input[type='text']");
const messageInput = form.querySelector("textarea");
const commentList = document.getElementById("comment-list");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    heroImg.style.transform = `scale(${1 + scroll * 0.0002})`;
});

form.querySelector("button").addEventListener("click", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert("Enter name and comment");
        return;
    }

    const now = new Date().toLocaleString();
    const comment = createComment(name, message, now);

    commentList.prepend(comment);

    nameInput.value = "";
    messageInput.value = "";
});

function createComment(name, message, date) {

    const comment = document.createElement("div");

    comment.className = "comment";

    comment.innerHTML = `
<img src="https://i.pravatar.cc/50?u=${name}">
<div class="comment-body">
<h3>${name}</h3>
<div class="meta">${date}</div>
<p class="comment-text">${message}</p>

<div class="comment-actions">
<span class="reply-btn">Reply</span>
<span class="edit-btn">✏️ Edit</span>
<span class="like-btn">👍 0</span>
<span class="delete-btn">🗑 Delete</span>
</div>

</div>
<div class="reply-container"></div>
`;

    return comment;

}

commentList.addEventListener("click", function (e) {

    const comment = e.target.closest(".comment");

    if (e.target.classList.contains("like-btn")) {
        let count = e.target.dataset.likes || 0;
        count++;
        e.target.dataset.likes = count;
        e.target.textContent = `👍 ${count}`;
    }

    if (e.target.classList.contains("delete-btn")) {
        comment.remove();
    }

    if (e.target.classList.contains("edit-btn")) {

        const textEl = comment.querySelector(".comment-text");
        const oldText = textEl.textContent;

        const textarea = document.createElement("textarea");
        textarea.value = oldText;
        textarea.className = "edit-box";

        textEl.replaceWith(textarea);

        textarea.focus();

        textarea.addEventListener("blur", () => {
            const newText = document.createElement("p");
            newText.className = "comment-text";
            newText.textContent = textarea.value;
            textarea.replaceWith(newText);
        });

    }

    if (e.target.classList.contains("reply-btn")) {

        let box = comment.querySelector(".reply-box");

        if (box) {
            box.remove();
            return;
        }

        box = document.createElement("div");

        box.className = "reply-box";

        box.innerHTML = `
<textarea rows="2" placeholder="Write a reply"></textarea>
<button class="post-reply">Post Reply</button>
`;

        comment.appendChild(box);

    }

    if (e.target.classList.contains("post-reply")) {

        const text = e.target.previousElementSibling.value.trim();
        if (!text) return;

        const container = comment.querySelector(".reply-container");

        const reply = createComment("You", text, "Just now");

        container.appendChild(reply);

        updateReplyCounter(comment);

        e.target.parentElement.remove();
    }

});

function updateReplyCounter(comment) {

    const container = comment.querySelector(".reply-container");
    let counter = comment.querySelector(".reply-count");

    if (!counter) {
        counter = document.createElement("div");
        counter.className = "reply-count";
        comment.appendChild(counter);
    }

    const total = container.children.length;

    counter.textContent = total + (total > 1 ? " replies" : " reply");

}

const params = new URLSearchParams(window.location.search);

const blogId = params.get("id");

const blog = blogs.find(b => b.id == blogId);

if (blog) {

    document.getElementById("blog-title").textContent = blog.title;

    document.getElementById("blog-image").src = blog.image;

    document.getElementById("blog-category").textContent = blog.category;

    document.getElementById("blog-date").textContent = blog.date;

    document.getElementById("blog-read").textContent = blog.read;

    document.getElementById("blog-content").innerHTML = blog.content;

}