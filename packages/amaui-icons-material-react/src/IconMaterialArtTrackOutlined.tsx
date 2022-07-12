import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArtTrackOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackOutlined'
      short_name='ArtTrack'

      {...props}
    >
      <path d="M3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H13Q13.825 5 14.413 5.588Q15 6.175 15 7V17Q15 17.825 14.413 18.413Q13.825 19 13 19ZM3 17H13Q13 17 13 17Q13 17 13 17V7Q13 7 13 7Q13 7 13 7H3Q3 7 3 7Q3 7 3 7V17Q3 17 3 17Q3 17 3 17ZM17 19V5H19V19ZM21 19V5H23V19ZM4 15H12L9.4 11.5L7.5 14L6.1 12.15ZM3 7Q3 7 3 7Q3 7 3 7V17Q3 17 3 17Q3 17 3 17Q3 17 3 17Q3 17 3 17V7Q3 7 3 7Q3 7 3 7Z"/>
    </Icon>
  )
});

export default IconMaterialArtTrackOutlined;
