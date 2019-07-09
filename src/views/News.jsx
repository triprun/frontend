import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip
} from 'reactstrap';

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

// core components
import { Header } from 'components/Headers/Header.jsx';
import { NewsBlock } from 'components/Micro/NewsBlock.jsx';

const { pictures } = require('./pictures');

const mocked = {
  avatar: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNjEwMjc0MzE2/james-franco-245869-1-402.jpg',
  author: 'James Franco',
  picture: 'https://www.bridgemi.com/sites/default/files/hero_images/california.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus eu iaculis auctor, sem libero egestas nisi, quis tempor orci risus a metus. Praesent molestie sollicitudin erat, quis tempus orci mollis a. Phasellus bibendum turpis a justo pretium, rutrum porttitor turpis vulputate.',
  date: 'Just Now',
  tags: ['#cali', '#downtown', '#trip'],
  comments: [],
  likes: 30,
  dislikes: 3
};

const mocked2 = {
  avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Mario_Puzo.jpg/220px-Mario_Puzo.jpg',
  author: 'Mario Castellini',
  picture: 'http://maketourism.com/images/9609046815a35397074b727.883068062017_12_16_16_19_12_user3.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus eu iaculis auctor, sem libero egestas nisi, quis tempor orci risus a metus.',
  date: '2 hours ago',
  tags: ['#italy', '#sicilia', '#pizza'],
  comments: [],
  likes: 19,
  dislikes: 0
};

const mocked3 = {
  avatar: 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png',
  author: 'Ed Nash',
  picture: 'https://img1.coastalliving.timeinc.net/sites/default/files/styles/landscape_3_2/public/image/2017/01/main/miami-florida-luxury-destination-2017-144863422.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus eu iaculis auctor, sem libero egestas nisi, quis tempor orci risus a metus.',
  date: 'Yesterday',
  // tags: ['#FL', '#USA'],
  comments: [],
  likes: 8,
  dislikes: 8
};

const mocked4 = {
  avatar: 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png',
  author: 'Kojima Tyosi',
  // picture: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus eu iaculis auctor, sem libero egestas nisi, quis tempor orci risus a metus.',
  date: '12.06.2019',
  // tags: ['#Japan', '#Tokyo', '#Sushi', '#Neon'],
  comments: [],
  likes: 133,
  dislikes: 27
};

export const News = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="col-12" style={{ margin: 0, padding: 0 }}>
          <NewsBlock { ...mocked } />
          <NewsBlock { ...mocked2 } />
          <NewsBlock { ...mocked3 } />
          <NewsBlock { ...mocked4 } />
        </Row>
      </Container>
    </>
  );
};
