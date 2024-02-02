import React from 'react'
import { BestRoute, BestRouteType } from './components/best-route'
import { FlatList } from 'react-native';

type BestRoutesProps = {
  data: BestRouteType[];
}

export const BestRoutes = ({ data }: BestRoutesProps) => {
  return (
    <FlatList 
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <BestRoute title={item.title} amount={item.amount}/>
        )
      }}    
    />
  )
}
