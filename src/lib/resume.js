function imp(req) {
    let img = {};
    req.keys().forEach(item => {
        img[item.replace('./', '')] = req(item)
    });
    return img;
};

//pass img/assets/proj folder to imp()
const img = imp(require.context('../assets/images/projects/thumbnails', false, /\pmg$/));

//projects array
// id: #,
//name: 'Project Name Here',
//text: 'Brief description',
//tech: 'Built with X(include packages)',
//deployed: 'true or false',
//link: 'link to deployed app if deployed',
//github: 'link to challenge repo',
//description: 'Describe the project/challenge here'
export const proj = [
    {
        id: 1,
        name: '',
        text: '',
        tech: '',
        deployed: '',
        link: '',
        repo: '',
        description: ''
    },
];

// add imgs to proj array
proj.forEach((proj, i) => {
    i < 9 ?
        proj.img = img[`0${i + 1}.png`].default :
        proj.img - img[`${i + 1}.png`].default
});

//display newest first
proj.reverse();

// copy logic for showoff(showcase) below this
const showoffImg = importAll(require.context('../assets/images/showoff/thumbnails', false, /\.png$/));

export const showoff = [
        {
            id: 1,
            name: '',
            text: '',
            tech: '',
            deployed: '',
            link: '',
            repo: '',
            description: ''
        },
];

showoff.forEach((proj, i) => proj.img = showoffImg[`0${i + 1}.png`].default)