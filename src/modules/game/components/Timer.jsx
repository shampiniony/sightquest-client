import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CustomText } from '@/components/ui/custom-text';

export const Timer = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 10,
  });

  useEffect(() => {
    if (time.minutes > 0 || time.seconds > 0 || time.hours > 0) {
      const interval = setInterval(
        () => [
          setTime({
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds - 1,
          }),
        ],
        1000
      );
      if (time.seconds == 0 && time.minutes > 0) {
        setTime({
          hours: time.hours,
          minutes: time.minutes - 1,
          seconds: 59,
        });
      }
      if (time.seconds == 0 && time.minutes == 0 && time.hours > 0) {
        setTime({
          hours: time.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      }
      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <View className='h-20 flex-row'>
      <View className='absolute h-20 bg-[#E5E5E5] w-68 rounded-2xl flex justify-center items-center px-8'>
        <CustomText size='3xl'>
          {`${time.hours.toString().padStart(2, '0')}:  ${time.minutes
            .toString()
            .padStart(2, '0')}:  ${time.seconds.toString().padStart(2, '0')}`}
        </CustomText>
      </View>
    </View>
  );
};
