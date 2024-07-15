import React from 'react';

const MapInfo: React.FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.46224002829933!2d100.5328683784609!3d13.736729875595778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed5b0518373%3A0xbf09631895efa243!2sFaculty%20of%20Engineering%2C%20Chulalongkorn%20University!5e0!3m2!1sen!2sth!4v1712417218258!5m2!1sen!2sth"
            width={0}
            height={0}
            title='mapLibrary'
            style={{ border: 10 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-[300px]'
        >

        </iframe>
    );
};

export default MapInfo;
