let comments = [];
loadComments();

document.getElementById('comment__add').addEventListener('submit',(event) => {
    event.preventDefault();

    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    let dateValue = document.getElementById('comment-time');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : timeConverter(),
        
    }
    
    commentName.value = '';
    commentBody.value = '';
    dateValue.value = '';
    comments.push(comment);
    saveComments();
    showComments();
});

function saveComments() {
    localStorage.setItem('comments',JSON.stringify(comments));
};

function loadComments() {
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments(){
    let commentsaveField = document.getElementById('commentsave__field');
    let out = '';
    let clicks = 0;
    comments.forEach(function(item){
        out += `<div class="commentsave-block" id="clear"><div class="commentsave__likes"><p class="time">${(item.time)}</p>`;
        out += `<input type="button" class="commentsave__likes-count" id="count">`;
        out += `<h5 id="counts">${clicks}</h5>`;
        out += `<input class="commentsave__likes-reset" id="reset" type="reset"></input></div>`;
        out += `<p class="alert">${item.name}</p>`;
        out += `<p class="alert">${item.body}</p></div>`;
    });
    commentsaveField.innerHTML = out;
};


function timeConverter() {
    let d = document.getElementById('comment-time').value;
    let a = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = 0;
        if(a.getMinutes() < 10){
            min = '0' + a.getMinutes()
        } else min = a.getMinutes();
    let time = date + ' ' + month + ' ' + year;
    if(date == +d % 100){
        return 'Today ' + hour + ':' + min;
    } else if(date - 1 == +d % 100){
        return 'Yesterday' + hour + ':' + min;
    } else
    return time;
};

document.getElementById('reset').addEventListener('click', (e) => {
    document.getElementById('clear').remove();
        let keys = Object.keys(localStorage);
        for(let key of keys) {
            let a = localStorage.getItem(key);
            let b = JSON.parse(a);
            console.log(b);
            for(let i = 0; i < b.length; i++){
                let c = b[i];
                c = localStorage.clear();
        console.log(b[i])};
        localStorage.removeItem(`${key}`);
        }
    });




