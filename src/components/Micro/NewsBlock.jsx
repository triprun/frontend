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

const ImagePreview = styled.div`
  /* position: relative; */
  /* border: solid -90px rgba(#000, .03); */
  height: 400px;
  max-height: 400px;
  background: ${p => `url(${p.source})`} 50%/ cover border-box padding-box;
  font-size: 4em;
  margin-bottom: 20px;
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;

  /* &:before {
      position: absolute;
      z-index: -1;
      top: -90px; right: -90px; bottom: -90px; left: -90px;
      border: inherit;
      border-color: transparent;
      background: inherit;
      background-clip: border-box;
      -webkit-filter: blur(9px);
      filter: blur(9px);
      -webkit-clip-path: inset(0);
      clip-path: inset(0);
      content: ''
  } */
`;

const ImagePreviewSlider = styled.div`
  /* position: relative; */
  /* border: solid -90px rgba(#000, .03); */
  height: 400px;
  max-height: 400px;
  background: ${p => `url(${p.source})`} 50%/ cover border-box padding-box;
  font-size: 4em;
  margin-bottom: 20px;
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;

  /* &:before {
      position: absolute;
      z-index: -1;
      top: -90px; right: -90px; bottom: -90px; left: -90px;
      border: inherit;
      border-color: transparent;
      background: inherit;
      background-clip: border-box;
      -webkit-filter: blur(9px);
      filter: blur(9px);
      -webkit-clip-path: inset(0);
      clip-path: inset(0);
      content: ''
  } */
`;

const Blurred = styled.div`
  background: ${p => `url(${p.source})`} 50%/ cover border-box padding-box;
  border: inherit;
  border-color: transparent;
  background: inherit;
  background-clip: border-box;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-clip-path: inset(0);
  clip-path: inset(0);
  margin-top: 8px;
  margin-bottom: 14px;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  max-height: 400px;
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

const isArray = v => Array.isArray(v); // shorten array native function

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
      { picture && <Blurred source={ picture }><Image src={ picture } /></Blurred> }
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
