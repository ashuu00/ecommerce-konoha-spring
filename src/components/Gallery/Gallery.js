import { Center, Heading } from '@chakra-ui/react';
import { Box } from '@material-ui/core';
import React from 'react'
import Gallery from 'react-grid-gallery';

export default function GalleryDiv() {

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 174,
        
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://picsum.photos/id/127/720/480",
        thumbnail: "https://picsum.photos/id/127/320/400",
        thumbnailWidth: 480,
        thumbnailHeight: 400
},
{
    src: "https://picsum.photos/id/237/720/480",
    thumbnail: "https://picsum.photos/id/237/500/220",
    thumbnailWidth: 500,
    thumbnailHeight: 212
},
{
    src: "https://picsum.photos/id/211/720/480",
    thumbnail: "https://picsum.photos/id/211/320/400",
    thumbnailWidth: 520,
    thumbnailHeight: 300
},
{
    src: "https://picsum.photos/id/217/720/480",
    thumbnail: "https://picsum.photos/id/217/320/400",
    thumbnailWidth: 520,
    thumbnailHeight: 400
},
{
    src: "https://picsum.photos/id/237/720/480",
    thumbnail: "https://picsum.photos/id/237/320/400",
    thumbnailWidth: 520,
    thumbnailHeight: 400
},{
    src: "https://picsum.photos/id/247/720/480",
    thumbnail: "https://picsum.photos/id/247/320/400",
    thumbnailWidth: 480,
    thumbnailHeight: 400
},{
    src: "https://picsum.photos/id/109/720/480",
    thumbnail: "https://picsum.photos/id/109/320/400",
    thumbnailWidth: 480,
    thumbnailHeight: 400
},]
    return (
        <Box w="100%">
            <Center>
            <Heading as="h2">Our Image Gallery</Heading>
            </Center>
            <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true}/>
        </Box>
    )
}
