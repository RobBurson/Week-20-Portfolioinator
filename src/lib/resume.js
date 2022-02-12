function imp(req) {
    let img = {};
    req.keys().forEach(item => {
        img[item.replace('./', '')] = req(item)
    });
    return img;
};

//pass img/assets/proj folder to imp()
const img = imp(require.context('../assets/images/projects/thumbnails', false, /\pmg$/));