import React from 'react';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Person',
        name: 'Nawa',
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Cat',
        name: 'Ji-yeon',
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Cat',
        name: 'Babe',
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Cat',
        name: 'Parabola',
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Dog',
        name: 'Bobby',
    },
    {
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Cat',
        name: 'Teeee',
    },
    {
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Dog',
        name: 'Teddy',
    },
    {
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Dog',
        name: 'HIII',
    },
    {
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        alt: 'Turtle',
        name: 'Eiei',
    },
];

const Item = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
    return (
        <div className="flex items-center gap-10">
            <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
            <p className="font-bold text-lg">{name}</p>
        </div>
    );
};

const MemberBox: React.FC = () => {
    return (
        <div className='bg-[#0F082C]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center w-3/4 mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 text-white font-semibold"
                    >
                        <Item src={image.src} alt={image.alt} name={image.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MemberBox;

