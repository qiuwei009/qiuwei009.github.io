const globalComponents = (app) => {
    const files = import.meta.globEager('./*.vue');
    for (let i in files) {
        let name = i.split('./')[1].split('.vue')[0];
        app.component(name, files[i].default);
    }
};

export default globalComponents;