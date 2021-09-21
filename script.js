const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItem = [];

async function getData () {
    const res = await fetch('https://randomuser.me/api?results=50')
}