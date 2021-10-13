import express from 'express';

const app = express();

app.get('/', (req, res) => {
    let html = '';
    let p = '';
    for (let i = 1; i<= 50; i++){
        if(i % 2 === 0){
            p = `<p>${i} soy Par!</p>`;
            html += p;
        } else {
            p = `<p>${i} soy Impar!</p>`;
            html += p;
        }
    }
    res.send(html);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
