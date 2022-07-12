import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksRoundedW700Filled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M20.65 19.225Q20 19.225 19.538 18.763Q19.075 18.3 19.075 17.65V3.375Q19.075 3.375 19.075 3.375Q19.075 3.375 19.075 3.375H8.8Q8.15 3.375 7.688 2.912Q7.225 2.45 7.225 1.8Q7.225 1.15 7.688 0.687Q8.15 0.225 8.8 0.225H19.075Q20.4 0.225 21.312 1.137Q22.225 2.05 22.225 3.375V17.65Q22.225 18.3 21.763 18.763Q21.3 19.225 20.65 19.225ZM3.975 22.8Q3.175 23.15 2.475 22.675Q1.775 22.2 1.775 21.35V8.525Q1.775 7.2 2.688 6.287Q3.6 5.375 4.925 5.375H13.925Q15.25 5.375 16.163 6.287Q17.075 7.2 17.075 8.525V21.35Q17.075 22.2 16.375 22.675Q15.675 23.15 14.875 22.8L9.425 20.425Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksRoundedW700Filled;
