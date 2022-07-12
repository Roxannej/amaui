import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrackChangesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChangesSharp'
      short_name='TrackChanges'

      {...props}
    >
      <path d="M18.9 4.75Q20.325 6.125 21.163 7.987Q22 9.85 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2H13V10.275Q13.45 10.55 13.725 10.987Q14 11.425 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.425 10.275 10.975Q10.55 10.525 11 10.275V8.125Q9.7 8.475 8.85 9.537Q8 10.6 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 11.1 15.637 10.337Q15.275 9.575 14.65 9L16.075 7.575Q16.95 8.4 17.475 9.537Q18 10.675 18 12Q18 14.5 16.25 16.25Q14.5 18 12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 9.75 7.425 8.088Q8.85 6.425 11 6.075V4.05Q8.025 4.425 6.013 6.675Q4 8.925 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 10.275 19.325 8.775Q18.65 7.275 17.475 6.175Z"/>
    </Icon>
  )
});

export default IconMaterialTrackChangesSharp;
