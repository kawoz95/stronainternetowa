import React from "react";
import { Galleria } from 'primereact/galleria';

const images = [
    {
        imageSrc: "/images/gallery/1balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/2balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/3balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/4balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/5balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/6balustrada_galeria.jpg"
    },
    {
        imageSrc: "/images/gallery/7balustrada_galeria.jpg"
    }
];

const Gallery = ()=>{

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4,

        },
        {
            breakpoint: '767px',
            numVisible: 3

        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return (
        <div style={{ height: "600px" }} className="flex justify-content-center align-items-center" >
            <img src={item.imageSrc} style={{ width: '100%'}} />
        </div>
        )
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.imageSrc} height={50} />
    }

    return (<div className="card flex justify-content-center">
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ width: '640px' }}
            item={itemTemplate} thumbnail={thumbnailTemplate} autoPlay circular showThumbnailNavigators={false} showItemNavigators/>
    </div>
    )
} 

export default Gallery;