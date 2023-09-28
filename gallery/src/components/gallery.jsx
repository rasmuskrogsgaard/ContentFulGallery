
import { useState, useEffect } from "react";
import client from "../Utility/contentfulClient";

//sætter en state 
const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);





    useEffect(() => {
        client.getEntries({ content_type: 'NewGallery' })
            .then((response) => {
                const images = response.items[0]?.fields?.galleryItems || [];
                setGalleryItems(images);

            })
            .catch(console.error);
    }, []);



    return (

        <div>
            {galleryItems.map((item) => {
                const image = item.fields.file.url;
                const description = item.fields.description;
                return (
                    <div>
                        <img src={image}
                            alt={description} />

                    </div>

                );

            })}


        </div>

    );

};

export default Gallery;