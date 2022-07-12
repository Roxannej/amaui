import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaundryRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundryRoundedW700'
      short_name='Laundry'

      {...props}
    >
      <path d="M5.5 13.6q.675-.3 1.425-.45Q7.675 13 8.4 13V6.9L5.025 8.75 4.4 7.7l4-2.3q.55.95 1.513 1.475.962.525 2.087.525 1.125 0 2.163-.513 1.037-.512 1.562-1.412l3.85 2.225-.6 1.05L15.6 6.9v9.65q.325 0 .625-.137.3-.138.675-.463l1.6-1.4v-2.725l.225.125q.575.3 1.188.137.612-.162.937-.737L22.75 8q.325-.575.163-1.188-.163-.612-.713-.962l-4.45-2.575q-.575-.325-1.175-.55-.6-.225-1.25-.225-.5 0-.912.262-.413.263-.638.688-.275.475-.737.762Q12.575 4.5 12 4.5t-1.037-.288q-.463-.287-.738-.762-.225-.425-.637-.688-.413-.262-.913-.262-.65 0-1.25.225t-1.175.55L1.8 5.85q-.575.325-.738.95-.162.625.163 1.2l1.925 3.35q.325.575.938.737.612.163 1.187-.137l.225-.125Zm2.875 4.325q-.35 0-.675.113-.325.112-.575.312L5.7 19.55q-.45.4-1.05.337-.6-.062-1-.512t-.338-1.05q.063-.6.513-1l1.4-1.2q.65-.575 1.475-.85Q7.525 15 8.375 15q.85 0 1.663.275.812.275 1.462.85l2.9 2.475q.25.2.575.313.325.112.675.112.35 0 .662-.112.313-.113.563-.313l1.4-1.2q.475-.4 1.075-.35.6.05 1 .525.375.475.325 1.063-.05.587-.5.987l-1.4 1.2q-.65.575-1.463.838-.812.262-1.662.262-.85 0-1.675-.262-.825-.263-1.475-.838L9.6 18.35q-.25-.2-.563-.312-.312-.113-.662-.113ZM12 7.4Z"/>
    </Icon>
  )
});

export default IconMaterialLaundryRoundedW700;