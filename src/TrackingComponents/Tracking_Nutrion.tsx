import './Tracking.css'
import React from 'react';
import { Flex, Progress } from 'antd';

const TrackingComponent: React.FC = () => (
   <div className='tracking'>
    <Flex gap="small" wrap="wrap" className='progress-container'>
        <div className='p1'>
            <Progress type="circle" percent={75} size={200} strokeColor={'#42f5f2'} />
            <p>Progress</p>
        </div> 
        <div className='p2'>
            <Progress type="circle" percent={70} status="exception" size={200} />
            <p>Long term goal</p>
        </div>
        <div className='p3'>
            <Progress type="circle" percent={100} size={200} />
            <p>Today goal</p>
        </div>
    </Flex>
   </div> 
  
);

export default TrackingComponent;
