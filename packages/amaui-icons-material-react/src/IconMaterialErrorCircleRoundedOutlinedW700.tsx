import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorCircleRoundedOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorCircleRoundedOutlinedW700'
      short_name='ErrorCircleRounded'

      {...props}
    >
      <path d="M12 13.05q.65 0 1.113-.463.462-.462.462-1.112v-3.45q0-.65-.462-1.1-.463-.45-1.113-.45-.65 0-1.112.462-.463.463-.463 1.113v3.45q0 .65.463 1.1.462.45 1.112.45Zm0 4.8q.725 0 1.225-.5.5-.5.5-1.225 0-.725-.5-1.238-.5-.512-1.225-.512-.725 0-1.225.512-.5.513-.5 1.238t.5 1.225q.5.5 1.225.5Zm0 5q-2.275 0-4.25-.85t-3.438-2.312Q2.85 18.225 2 16.25q-.85-1.975-.85-4.25T2 7.75q.85-1.975 2.312-3.438Q5.775 2.85 7.75 2q1.975-.85 4.25-.85t4.25.85q1.975.85 3.438 2.312Q21.15 5.775 22 7.75q.85 1.975.85 4.25T22 16.25q-.85 1.975-2.312 3.438Q18.225 21.15 16.25 22q-1.975.85-4.25.85ZM12 12Zm0 7.7q3.2 0 5.45-2.238Q19.7 15.225 19.7 12q0-3.225-2.25-5.463Q15.2 4.3 12 4.3T6.55 6.537Q4.3 8.775 4.3 12t2.25 5.462Q8.8 19.7 12 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialErrorCircleRoundedOutlinedW700;
