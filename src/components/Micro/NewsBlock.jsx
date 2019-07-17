import React from 'react';

import { Col, Row } from 'reactstrap';

import styled from 'styled-components';

import ReadMoreReact from 'read-more-react';

const Wrapper = styled(Col)`
  padding: 0;
`;

const NewsOuter = styled.div`
  padding: 0;
  background: white;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 8px;
  margin-bottom: 14px;
  overflow: hidden;
`;

const Blurred = styled.div`
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  left: -25%;
  background: ${p => `url(${p.source})`} 150%/ cover border-box padding-box;
  border: inherit;
  border-color: transparent;
  background: inherit;
  background-clip: border-box;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  -webkit-clip-path: inset(0);
  clip-path: inset(0);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
  z-index: 2;
`;

const Caption = styled.div`
  width: 90%;
  margin-left: 5%;
  color: #282828;
`;

const Author = styled.div`
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 17px;
  padding-left: 14px;
`;

const Tags = styled.span`
  color: #1E90FF;
`;

const Tag = styled.span`
  cursor: pointer;
  &:hover {
    color: #006ad1;
  }
`;

const Creds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #9A9A9A;
  font-size: 10pt;
  padding-bottom: 10px;
`;

const More = styled.span`
  color: #9A9A9A;
`;

const Head = styled(Row)`
  img {
    width: 40px;
    height: 40px;
    margin-top: 8px;
  }
`;

const ReadMore = styled(ReadMoreReact)``;

// const isArray = v => Array.isArray(v); // shorten array native function

// export const NewsBlock = ({ avatar, author, picture, content, date, tags, comments, likes, dislikes }) => {
//   return (<Wrapper className="col-12 col-md-6 mb-4">
//     <NewsOuter className="col-12 col-md-11 rounded shadow">
//       <Head>
//         <img className="ml-5 rounded-circle" src={ avatar } alt="author's avatar pic" />
//         <Author>{ author }</Author>
//       </Head>
//       { picture && (isArray(picture) ? <ImagePreviewSlider source={ picture } /> : <ImagePreview source={ picture } />) }
//       <Caption>
//         <ReadMore text={ content } min={100} max={9999} ideal={180} readMoreText={<More> ...more</More>} />
//         { tags && <><br /><Tags>{ tags.map(t => <Tag>{ t } </Tag>) }</Tags></> }
//       </Caption>
//       <hr />
//       <Creds className="ml-2 ml-md-0 col-11 col-md-12 mt--4">
//         <div>
//           {date}
//         </div>
//         <div>
//           <i className="fas fa-heart text-red"></i> {likes}
//         </div>
//       </Creds>
//     </NewsOuter>
//   </Wrapper>);
// };

export const NewsBlock = ({ avatar, author, picture, content, date, tags, comments, likes, dislikes }) => {
  return (<Wrapper className="col-12 col-md-6 mb-4">
    <NewsOuter className="col-12 col-md-11 rounded shadow">
      <Head>
        <img className="ml-5 rounded-circle" src={ avatar } alt="author's avatar pic" />
        <Author>{ author }</Author>
      </Head>
      { picture && <Container>
        <Blurred source={ picture }>
          <Image src={ picture } />
        </Blurred>
        <Image src={ picture } />
      </Container> }
      <Caption>
        <ReadMore text={ content } min={100} max={9999} ideal={180} readMoreText={<More> ...more</More>} />
        { tags && <><br /><Tags>{ tags.map(t => <Tag>{ t } </Tag>) }</Tags></> }
      </Caption>
      <hr />
      <Creds className="ml-2 ml-md-0 col-11 col-md-12 mt--4">
        <div>
          {date}
        </div>
        <div>
          <i className="fas fa-heart text-red"></i> {likes}
        </div>
      </Creds>
    </NewsOuter>
  </Wrapper>);
};
