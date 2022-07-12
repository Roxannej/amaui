import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiversity3Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity3Outlined'
      short_name='Diversity3'

      {...props}
    >
      <path d="M1 20v-4q0-.85.588-1.425Q2.175 14 3 14h3.275q.5 0 .95.25.45.25.725.675.725.975 1.788 1.525Q10.8 17 12 17q1.225 0 2.288-.55 1.062-.55 1.762-1.525.325-.425.762-.675.438-.25.913-.25H21q.85 0 1.425.575Q23 15.15 23 16v4h-7v-2.275q-.875.625-1.887.95Q13.1 19 12 19q-1.075 0-2.1-.337-1.025-.338-1.9-.963V20Zm11-4q-.95 0-1.8-.438-.85-.437-1.425-1.212-.425-.625-1.062-.987Q7.075 13 6.325 13q.55-.925 2.325-1.463Q10.425 11 12 11q1.575 0 3.35.537 1.775.538 2.325 1.463-.725 0-1.375.363-.65.362-1.075.987-.55.8-1.4 1.225Q12.975 16 12 16Zm-8-3q-1.25 0-2.125-.875T1 10q0-1.275.875-2.138Q2.75 7 4 7q1.275 0 2.138.862Q7 8.725 7 10q0 1.25-.862 2.125Q5.275 13 4 13Zm16 0q-1.25 0-2.125-.875T17 10q0-1.275.875-2.138Q18.75 7 20 7q1.275 0 2.138.862Q23 8.725 23 10q0 1.25-.862 2.125Q21.275 13 20 13Zm-8-3q-1.25 0-2.125-.875T9 7q0-1.275.875-2.138Q10.75 4 12 4q1.275 0 2.137.862Q15 5.725 15 7q0 1.25-.863 2.125Q13.275 10 12 10Z"/>
    </Icon>
  )
});

export default IconMaterialDiversity3Outlined;
