document.addEventListener('DOMContentLoaded', function () {
    const queryForm = document.getElementById('queryForm');
    const queryList = document.getElementById('queryList');

    queryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const queryTitle = document.getElementById('queryTitle').value;
        const queryDescription = document.getElementById('queryDescription').value;

        const queryItem = document.createElement('div');
        queryItem.classList.add('query-item');
        queryItem.innerHTML = `
            <h3>${queryTitle}</h3>
            <p>${queryDescription}</p>
        `;

        queryList.appendChild(queryItem);

        // Clear form fields
        document.getElementById('queryTitle').value = '';
        document.getElementById('queryDescription').value = '';
    });
});
