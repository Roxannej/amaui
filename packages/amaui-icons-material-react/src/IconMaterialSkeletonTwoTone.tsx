import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkeletonTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkeletonTwoTone'
      short_name='Skeleton'

      {...props}
    >
      <path d="M12 22.4q-1.175 0-2.05-.25-.875-.25-1.875-.9L5.3 19.5q-.65-.45-1.05-1.212-.4-.763-.4-1.563 0-1.575 1.113-2.6Q6.075 13.1 7.8 13.1q.975 0 1.7.312.725.313 1.35.988h.075l.025-1.95q-1.45-.075-2.587-.325-1.138-.25-1.938-.663-.8-.412-1.212-.962Q4.8 9.95 4.8 9.275q0-.5.325-.95.325-.45.925-.85Q5.925 7.25 5.863 7 5.8 6.75 5.8 6.475q0-.6.413-1.1.412-.5 1.137-.875-.025-.1-.038-.175Q7.3 4.25 7.3 4.15q0-.725.775-1.4Q8.85 2.075 10 1.8v2.025q-.125.025-.238.1Q9.65 4 9.6 4.05q.1.1.4.25.3.15.95.2V1h2.125v3.5q.65-.05.95-.2.3-.15.4-.25-.05-.075-.175-.138-.125-.062-.25-.112v-2q1.15.275 1.925.95.775.675.775 1.4 0 .075-.025.35.725.4 1.125.9t.4 1.075q0 .275-.063.525-.062.25-.187.475.6.4.925.85.325.45.325.95 0 .675-.412 1.225-.413.55-1.201.962-.787.413-1.924.663-1.138.25-2.588.325v1.95h.05q.575-.675 1.388-.988.812-.312 1.687-.312 1.7 0 2.825 1.037 1.125 1.038 1.125 2.613 0 .85-.4 1.587-.4.738-1.1 1.188l-2.725 1.725q-1.025.65-1.875.9-.85.25-2.05.25Zm-1.05-11.9V9.45q-1.1-.05-1.862-.213-.763-.162-1.413-.462-.3.15-.525.3-.225.15-.325.25.35.5 1.5.787 1.15.288 2.625.388Zm-2.7 7.25q.3 0 .525-.225Q9 17.3 9 17q0-.3-.225-.525-.225-.225-.525-.225-.3 0-.525.225Q7.5 16.7 7.5 17q0 .3.225.525.225.225.525.225Zm2.7-10.275v-1q-.75-.05-1.237-.175-.488-.125-.938-.325-.35.15-.587.287-.238.138-.388.288.2.375 1.075.6.875.225 2.075.325Zm2.125 3.025q1.475-.1 2.625-.388 1.15-.287 1.5-.787-.125-.1-.35-.25-.225-.15-.525-.275-.65.3-1.412.45-.763.15-1.838.2Zm0-3q1.2-.075 2.05-.325.85-.25 1.1-.625-.15-.15-.413-.3-.262-.15-.587-.275-.425.2-.925.325t-1.225.175Zm2.675 10.25q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525-.225-.225-.525-.225-.3 0-.525.225Q15 16.7 15 17q0 .3.225.525.225.225.525.225Z"/>
    </Icon>
  )
});

export default IconMaterialSkeletonTwoTone;