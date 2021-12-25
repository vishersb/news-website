import React from 'react';

export type styles = {
     mainWrapper: string,
     itemWrapper: string 
     img: string,
     description: string
     title: string,
     };

interface Props {
    classes: styles;
}

const ContentWrapper = ({classes}: Props) =>{
    const news = [
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/3RCnKa7RpMqZTlaS5s8JwEfDG5k=/0x0:6144x4779/625x625/filters:focal(2581x1899:3563x2881):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70310076/51412207042_d9b9722df0_6k.0.jpg',
        },
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/QnJElPZCDGd1s3PXiq6rWvP6gbA=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70313984/acastro_180427_1777_0001.0.jpg',
        },
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/Rk-3PZPg7cNvZrycA4aCx64RETY=/0x0:3000x2000/1075x1075/filters:focal(962x920:1442x1400):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70315692/RoundUpArt_NintendoSwitch.0.jpg',
        },
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/3RCnKa7RpMqZTlaS5s8JwEfDG5k=/0x0:6144x4779/625x625/filters:focal(2581x1899:3563x2881):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70310076/51412207042_d9b9722df0_6k.0.jpg',
        },
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/3RCnKa7RpMqZTlaS5s8JwEfDG5k=/0x0:6144x4779/625x625/filters:focal(2581x1899:3563x2881):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70310076/51412207042_d9b9722df0_6k.0.jpg',
        },
        {
            title: 'Test title',
            description: 'Test description test test',
            post: 'NASA has worked for nearly three decades to craft this telescope and get it to the launchpad. Now, the telescope is finally set to launch on top of a European Ariane 5 rocket out of Europe’s primary launch site in Kourou, French Guiana in South America, on Saturday, December 25th. But once the telescope is in space, there’s still a long way to go.',
            img: 'https://cdn.vox-cdn.com/thumbor/3RCnKa7RpMqZTlaS5s8JwEfDG5k=/0x0:6144x4779/625x625/filters:focal(2581x1899:3563x2881):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70310076/51412207042_d9b9722df0_6k.0.jpg',
        },
    ];
    console.log(`classes.mainWrapper`, classes.mainWrapper)
    return(
        <div className={classes.mainWrapper}>
            {news?.map((item, index)=>{
                return (<div key={index} className={classes.itemWrapper}>
                    <p className={classes.title}>{item.title} </p>
                    <img src={item.img} className={classes.img}></img>
                    <p className={classes.description}>{item.description}</p>
                </div>)
            })}
        </div>
    )
};
export { ContentWrapper }