import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnOutlined'
      short_name='TamperDetectionOn'

      {...props}
    >
      <path d="M14 17v-2h2V3H4v3H2V3q0-.825.588-1.413Q3.175 1 4 1h12q.825 0 1.413.587Q18 2.175 18 3v4.5l4-4v11l-4-4V15q0 .825-.587 1.413Q16.825 17 16 17Zm-9.55 3q-.425 0-.787-.163-.363-.162-.638-.437L0 16.4l.35-.35q.225-.225.5-.338.275-.112.55-.112.3 0 .575.112.275.113.475.338l.55.55V9.25q0-.325.225-.538.225-.212.525-.212.325 0 .537.212.213.213.213.538V13h1V7.75q0-.325.225-.537Q5.95 7 6.25 7q.325 0 .537.213Q7 7.425 7 7.75V13h1V8.75q0-.325.225-.538Q8.45 8 8.75 8q.325 0 .538.212.212.213.212.538V13h1V9.75q0-.325.225-.538Q10.95 9 11.25 9q.325 0 .538.212.212.213.212.538V18q0 .825-.575 1.413Q10.85 20 10 20ZM16 3v12V3Z"/>
    </Icon>
  )
});

export default IconMaterialTamperDetectionOnOutlined;