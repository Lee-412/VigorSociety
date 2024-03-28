import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselAid = () => (
    <div className="Aid-carousel">
        <Carousel effect="fade" id='slide'>
            <div>
              <h3 style={contentStyle}>"Your problems  are my solutions."</h3>
            </div>
        </Carousel>
    </div>
  
);

export default CarouselAid;