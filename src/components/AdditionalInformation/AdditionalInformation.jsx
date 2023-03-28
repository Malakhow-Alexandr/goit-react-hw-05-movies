import { Outlet } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { Suspense } from 'react';

import {
  SectionInformation,
  MetaContainer,
  InformationTitle,
  InformationList,
  InformationLink,
} from './AdditionalInformation.styled';

const AdditionalInformation = () => {
  return (
    <SectionInformation>
      <MetaContainer>
        <InformationTitle>Additional information</InformationTitle>
        <InformationList>
          <li>
            <InformationLink to="cast">Cast</InformationLink>
          </li>
          <li>
            <InformationLink to="reviews">Reviews</InformationLink>
          </li>
        </InformationList>
      </MetaContainer>

      <Suspense
        fallback={
          <div style={{ marginLeft: '420px', marginRight: 'auto' }}>
            <ThreeCircles
              height="80"
              width="80"
              wrapperClass="spinner-wrapper"
              ariaLabel="three-circles-rotating"
              outerCircleColor="#0a598d"
              innerCircleColor="#260a8d"
              middleCircleColor="#6a0474"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </SectionInformation>
  );
};

export default AdditionalInformation;
