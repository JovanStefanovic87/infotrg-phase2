'use client';
import React, { useState } from 'react';
import { contentData, hyperlinks } from './BussinessCooperationData';
import ContentBlock from '../../components/blocks/ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import UnorderedList from '@/app/components/text/UnorderedList';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import { BasicInformation } from '@/app/helpers/types';
import ImageModal from '@/app/components/modals/ImageModal';
import useScrollToTop from '@/app/helpers/useScrollToTop';
import useResponsiveColumns from '@/app/helpers/useResponsiveColumns';
import ContentDescriptionText from '@/app/components/text/ContentDescriptionText';

const BussinessCooperation: React.FC = () => {
  useScrollToTop();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const columns = useResponsiveColumns(1);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  if (columns === null) return null;

  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' pb='0' />
      <div className='pt-8'>
        <ContentDescriptionText
          text='Strategija razvoja Infotrga odvija se kroz deset osnovnih koraka, tokom kojih su uspostavljena pravila međusobne komunikacije i raspodele radnih zaduženja među saradnicima.'
          align='center'
          color='black'
        />
      </div>
      <div className='px-2 pt-0 sm:pt-2'>
        <H2Title text='SAŽET PRIKAZ POSLOVNE SARADNJE' padding={10} />
      </div>
      {renderGridSystem({
        contentData,
        columns: columns,
        useLink: false,
        children: (block: BasicInformation) => (
          <ContentBlock
            title={''}
            description={block.description || ''}
            coverImage={block.coverImage}
            contentBlocks={[]}
            openContentModal={() => openImageModal(block.coverImage || '')}
            isLink={false}
          />
        ),
      })}
      <H2Title text='OPŠIRNIJI PRIKAZ POSLOVNE SARADNJE' padding={24} />
      <div className='sm:p-2'>
        <div className='flex justify-center bg-gradient-white p-8 items-start md:items-center rounded-md'>
          <UnorderedList items={hyperlinks} />
        </div>
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default BussinessCooperation;
