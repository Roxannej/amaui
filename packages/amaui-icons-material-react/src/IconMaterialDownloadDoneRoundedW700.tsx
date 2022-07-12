import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadDoneRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneRoundedW700'
      short_name='DownloadDone'

      {...props}
    >
      <path d="M6.025 21.35Q5.375 21.35 4.912 20.888Q4.45 20.425 4.45 19.775Q4.45 19.125 4.912 18.663Q5.375 18.2 6.025 18.2H18.025Q18.675 18.2 19.138 18.663Q19.6 19.125 19.6 19.775Q19.6 20.425 19.138 20.888Q18.675 21.35 18.025 21.35ZM9.575 15.375Q9.275 15.375 8.988 15.262Q8.7 15.15 8.475 14.925L4.2 10.675Q3.75 10.225 3.75 9.537Q3.75 8.85 4.2 8.4Q4.65 7.95 5.325 7.95Q6 7.95 6.45 8.4L9.575 11.55L17.6 3.5Q18.05 3.05 18.725 3.05Q19.4 3.05 19.85 3.5Q20.3 3.95 20.3 4.625Q20.3 5.3 19.85 5.75L10.675 14.925Q10.45 15.15 10.163 15.262Q9.875 15.375 9.575 15.375Z"/>
    </Icon>
  )
});

export default IconMaterialDownloadDoneRoundedW700;
