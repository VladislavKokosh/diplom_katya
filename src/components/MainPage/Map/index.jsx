import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

const MyMap = () => {
  const coordinates = 
    [
      [53.137992, 25.877930],
      [52.439924, 24.848209],
      [52.152520, 23.755732],
      [52.304205, 23.481234],
      [52.146972, 25.535025],
      [52.312707, 25.597566],
      [52.517289, 25.845582],
      [52.935225, 25.594745],
      [52.401908, 23.821677],
      [52.318096, 23.722198],
      [52.241058, 24.381427],
      [52.111406, 26.102473],
      [52.334388, 25.991001],
      [52.638379, 24.583646],
      [52.057509, 27.211524],
      [52.076626, 27.347466],
      [53.162947, 24.463991],
      [53.149497, 24.817092],
      [53.220109, 26.405933]
    ];      
	return(
		<YMaps>
				<Map 
          defaultState={{ center: [52.680224, 25.301030], zoom: 8 }} 
          width={'100%'} 
          style={{marginTop: '20px', height: '600px'}}
        >
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
				</Map>
		</YMaps>
	)
}
    
export default MyMap
