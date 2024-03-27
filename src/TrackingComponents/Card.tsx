import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface linkData {
    data: string
    data_title: string
}

const CardNutrion = (props:linkData) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={props.data} />}
  >
    <Meta title={props.data_title} description="www.vigorsociety.com" />
  </Card>
);

export default CardNutrion;