export const axi = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText).data.data);
                }, 3000);
            }
        };
        xhr.send();
    });
};