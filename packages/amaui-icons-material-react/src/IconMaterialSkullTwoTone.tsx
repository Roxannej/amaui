import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkullTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullTwoTone'
      short_name='Skull'

      {...props}
    >
      <path d="M5.55 22.425V18.05q-.85-.45-1.575-1.2t-1.262-1.675q-.538-.925-.838-1.987-.3-1.063-.3-2.188 0-4.175 2.913-6.813Q7.4 1.55 12 1.55t7.525 2.637Q22.45 6.825 22.45 11q0 1.125-.3 2.188-.3 1.062-.838 1.987-.537.925-1.262 1.675t-1.575 1.2v4.375ZM8.575 19.9v2.525H10.7V19.9h2.625v2.525h2.125V16.3q.925-.375 1.663-.925.737-.55 1.25-1.238.512-.687.787-1.487t.275-1.65q0-2.9-2.05-4.663Q15.325 4.575 12 4.575q-3.3 0-5.35 1.762Q4.6 8.1 4.6 11q0 .85.275 1.65.275.8.788 1.487.512.688 1.237 1.238.725.55 1.675.925Zm1.525-3.275h3.8l-1.9-3.8Zm-1.6-3.45q.925 0 1.562-.638Q10.7 11.9 10.7 11q0-.925-.638-1.562Q9.425 8.8 8.5 8.8q-.9 0-1.537.638-.638.637-.638 1.562 0 .9.638 1.537.637.638 1.537.638Zm7 0q.925 0 1.562-.638Q17.7 11.9 17.7 11q0-.925-.638-1.562Q16.425 8.8 15.5 8.8q-.9 0-1.537.638-.638.637-.638 1.562 0 .9.638 1.537.637.638 1.537.638ZM8.575 19.9v-3.6q-.95-.375-1.675-.925-.725-.55-1.237-1.238-.513-.687-.788-1.487T4.6 11q0-2.9 2.05-4.663Q8.7 4.575 12 4.575q3.325 0 5.375 1.762Q19.425 8.1 19.425 11q0 .85-.275 1.65-.275.8-.787 1.487-.513.688-1.25 1.238-.738.55-1.663.925v3.6-.375h-2.125v.375H10.7v-.375H8.575v.375Z"/>
    </Icon>
  )
});

export default IconMaterialSkullTwoTone;