'use client'

import useLoadImage from '@/hooks/useLoadImage';
import { ISong } from '@/types';
import Image from 'next/image';
import { Suspense } from 'react';
import PlayButton from './PlayButton';

interface ISongItem {
  data: ISong
  onClick: (id: string) => void
}

const SongItem: React.FC<ISongItem> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data)

  return (
		<div
			onClick={() => onClick(data.id)}
			className='group relative flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3'
		>
			<div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
				<Suspense>
					<Image
						className='object-cover'
						src={imagePath || '/images/liked.jpg'}
            fill
						alt='Image'
					/>
				</Suspense>
			</div>
      <div className='flex flex-col items-start w-full pt-4 gap-y-1'>
        <p className='font-semibold truncate w-full'>
          {data.title}
        </p>
        <p className='text-neutral-400 text-sm pb-4 w-full truncate'>
          By {data.author}
        </p>
      </div>
      <div className='absolute bottom-24 right-5'>
        <PlayButton />
      </div>
		</div>
	)
}
 
export default SongItem;