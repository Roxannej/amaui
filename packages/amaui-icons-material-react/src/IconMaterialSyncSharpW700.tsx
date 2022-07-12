import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSharpW700'
      short_name='Sync'

      {...props}
    >
      <path d="M13.475 3.5H19.95V5.875H18.025L18.1 5.975Q19.4 7.3 20.013 8.838Q20.625 10.375 20.625 11.95Q20.625 15.125 18.575 17.525Q16.525 19.925 13.375 20.525V17.275Q15.2 16.85 16.338 15.338Q17.475 13.825 17.475 11.95Q17.475 10.975 17.087 10.025Q16.7 9.075 15.9 8.225L15.85 8.175V10H13.475ZM10.525 20.5H4.05V18.125H5.975L5.9 18.025Q4.575 16.725 3.975 15.175Q3.375 13.625 3.375 12.05Q3.375 8.875 5.425 6.475Q7.475 4.075 10.625 3.475V6.725Q8.8 7.15 7.663 8.662Q6.525 10.175 6.525 12.05Q6.525 13.025 6.913 13.975Q7.3 14.925 8.1 15.775L8.15 15.825V14H10.525Z"/>
    </Icon>
  )
});

export default IconMaterialSyncSharpW700;
