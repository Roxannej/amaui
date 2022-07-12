import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicNoteRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteRoundedW700Filled'
      short_name='MusicNote'

      {...props}
    >
      <path d="M9.725 21.95Q7.85 21.95 6.488 20.6Q5.125 19.25 5.125 17.375Q5.125 15.5 6.475 14.15Q7.825 12.8 9.7 12.8Q10.1 12.8 10.438 12.862Q10.775 12.925 11.125 13.05V5.2Q11.125 3.9 12.062 2.975Q13 2.05 14.3 2.05H16.3Q17.375 2.05 18.125 2.8Q18.875 3.55 18.875 4.625Q18.875 5.7 18.125 6.45Q17.375 7.2 16.3 7.2H14.3V17.375Q14.3 19.25 12.95 20.6Q11.6 21.95 9.725 21.95Z"/>
    </Icon>
  )
});

export default IconMaterialMusicNoteRoundedW700Filled;
