import { ArrowIcon } from '@/assets/icons/arrow.icon';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface IScrenHeaderBackProps {
  onPress?: () => void;
}

export const ScreenHeaderBack = ({ onPress }: IScrenHeaderBackProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='w-full h-12'>
      <TouchableOpacity
        className='absolute left-8'
        onPress={async () => {
          if (onPress) onPress();
          navigation.goBack();
        }}
      >
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
