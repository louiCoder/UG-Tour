import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { RFValue } from 'react-native-responsive-fontsize';
import { HeaderLinker } from '../../Components';
import { HelperFunctions } from '../../Utils';

const TopCategories = ({ title }) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: RFValue(10) }}>
      {/* <HeaderLinker title="Top Categories" /> */}
      <Text style={{ fontSize: RFValue(16), fontWeight: 'bold', marginVertical: RFValue(15) }}>Top Categories</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginBottom: RFValue(5)
        }}
      >
        {[
          {
            title: 'Doctors',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          },
          {
            title: 'Hospitals',
            image: 'https://businessfocus.co.ug/wp-content/uploads/2018/02/Inside-the-hospital-1.jpg'
          },
          { title: 'Clinics', image: 'https://www.iah.co.ug/pics/IAH/emerncy.jpg' },
          {
            title: 'Pharmacies',
            image:
              'https://media3.s-nbcnews.com/i/newscms/2017_33/2120896/170815-pharmacy-mn-1340_88c4085f525919b7a2a081b9552b5ea8.jpg'
          },
          { title: 'Blood Banks', image: 'https://www.healthcareitnews.com/sites/hitn/files/bloodbankHITNstock.jpg' },
          {
            title: 'Fitness',
            image:
              'https://media1.s-nbcnews.com/j/newscms/2020_02/3179211/200109-stock-kettlebell-woman-gym-ew-541p_ae34ed0f6331ebc628395c9f307013d3.fit-760w.jpg'
          }
        ].map(({ title, image }) => (
          <Ripple
            key={HelperFunctions.keyGenerator()}
            style={{
              width: '32%',
              // borderWidth: 1,
              borderColor: '#eee',
              height: RFValue(100),
              marginBottom: RFValue(7),
              alignItems: 'center'
            }}
            onPress={() => alert('yes')}
          >
            <Image
              source={{
                uri: image
              }}
              style={{ height: RFValue(100), width: '100%', alignItems: 'center', justifyContent: 'center' }}
              // imageStyle={{ flex: 1 }}
              resizeMode="cover"
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#00000070',
                position: 'absolute',
                zIndex: 20,
                alignItems: 'center',
                justifyContent: 'center',
                padding: RFValue(10)
              }}
            >
              <Text style={{ fontSize: RFValue(12), color: '#fff', fontWeight: 'bold' }}>{title}</Text>
            </View>
          </Ripple>
        ))}
      </View>
    </View>
  );
};

export default TopCategories;
