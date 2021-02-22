import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

const MyMap = () => {
return(
  <YMaps>
    <Map 
      defaultState={{ center: [52.530297, 24.907256], zoom: 17 }} 
      width={'100%'} 
      style={{marginTop: '10px', height: '600px'}}
    >
      <Placemark geometry={[52.530297, 24.907256]} />
    </Map>
  </YMaps>
)
}
    
export default MyMap
