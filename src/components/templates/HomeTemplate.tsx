import React from 'react';
import get from 'lodash/get';
import ComponentsRenderer from './partials/ComponentsRenderer';
import Link from '../atoms/Link/Link';
import TemplateWrapper from './partials/TemplateWrapper';
import { Data } from '../../../prismic/types';

interface HomeTemplateProps {
  data: Data;
  sharedData?: Data;
  serverReqUrl: string;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ data, sharedData, serverReqUrl }) => (
  <TemplateWrapper pageId={data.id} data={data} sharedData={sharedData} serverReqUrl={serverReqUrl}>
    <main>
      <Link text={data.data.link_text} url={data.data.link} title="click me" />
      <ComponentsRenderer slices={get(data, 'data.body', [])} />
    </main>
  </TemplateWrapper>
);

export default HomeTemplate;
