'use client';
import { contentData as rawContentData, mapIdToPath } from './serviceActivitiesData';
import ContentBlock from '../../components/blocks/ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import { BasicInformation } from '@/app/helpers/types';
import useScrollToTop from '@/app/helpers/useScrollToTop';
import useResponsiveColumns from '@/app/helpers/useResponsiveColumns';
import H2 from '@/app/components/text/H2';
import ContentDescriptionText from '@/app/components/text/ContentDescriptionText';

const ServiceActivities: React.FC = () => {
  useScrollToTop();
  const columns = useResponsiveColumns(1);

  const contentData = rawContentData.filter(
    (item): item is BasicInformation & { id: string; coverImage: string } =>
      item.id !== undefined && item.coverImage !== undefined,
  );

  return (
    <PageContainer>
      <H1 title='USLUŽNE DELATNOSTI INFOTRGA' />
      <ContentDescriptionText
        text='U cilju što boljeg povezivanja kupaca i prodavaca i ostvarivanja efikasnije trgovine, poslovno delovanje Infotrga se odvija kroz osam uslužnih delatnosti.'
        align='center'
        color='black'
      />
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: true,
          mapIdToPath: (id: string) => mapIdToPath(id),
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description || ''}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
      </div>
    </PageContainer>
  );
};

export default ServiceActivities;
