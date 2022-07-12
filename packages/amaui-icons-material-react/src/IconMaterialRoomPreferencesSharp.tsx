import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomPreferencesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesSharp'
      short_name='RoomPreferences'

      {...props}
    >
      <path d="M3 21V19H5V3H15V4H19V10H17V6H15V12Q14.425 12 14 12Q13.575 12 13 12V5H7V19H12Q12 19.575 12 20Q12 20.425 12 21ZM17 22 16.7 20.5Q16.4 20.375 16.138 20.225Q15.875 20.075 15.625 19.875L14.175 20.375L13.175 18.65L14.3 17.65Q14.25 17.275 14.25 17.012Q14.25 16.75 14.3 16.375L13.175 15.375L14.175 13.65L15.625 14.15Q15.875 13.95 16.138 13.787Q16.4 13.625 16.7 13.5L17 12H19L19.3 13.5Q19.6 13.625 19.863 13.775Q20.125 13.925 20.375 14.125L21.825 13.625L22.825 15.35L21.7 16.35Q21.75 16.725 21.75 16.988Q21.75 17.25 21.7 17.625L22.825 18.625L21.825 20.35L20.375 19.875Q20.125 20.075 19.863 20.225Q19.6 20.375 19.3 20.5L19 22ZM18 19Q18.825 19 19.413 18.413Q20 17.825 20 17Q20 16.175 19.413 15.588Q18.825 15 18 15Q17.175 15 16.587 15.588Q16 16.175 16 17Q16 17.825 16.587 18.413Q17.175 19 18 19ZM11 13Q10.575 13 10.288 12.712Q10 12.425 10 12Q10 11.575 10.288 11.287Q10.575 11 11 11Q11.425 11 11.713 11.287Q12 11.575 12 12Q12 12.425 11.713 12.712Q11.425 13 11 13ZM7 19Q7 18.4 7 17.962Q7 17.525 7 16.925Q7 15.475 7 14.462Q7 13.45 7 12V5V19Z"/>
    </Icon>
  )
});

export default IconMaterialRoomPreferencesSharp;
