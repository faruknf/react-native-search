import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgSearch from '../svg/Search';
import globalStyles from '../styles';
import {Dimensions} from 'react-native';
import {useEffect} from 'react/cjs/react.development';

function Search() {
  const {width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    input: {
      height: 50,
      backgroundColor: globalStyles.primaryColor,
      color: globalStyles.textColor,
      borderRadius: 5,
      paddingLeft: 10,
      paddingRight: 40,
    },
    viewContainer: {
      padding: globalStyles.mainPadding,
      flexDirection: 'column',
    },
    icon: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
    title: {
      marginTop: 10,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    descText: {
      fontSize: 14,
      marginTop: 10,
    },
    tags: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      marginTop: 10,
      marginLeft: -2,
      marginRight: -2,
    },
    tag: {
      width: (width - 88) / 3,
      aspectRatio: 1,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 4,
      backgroundColor: 'white',
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tagName: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    job: {
      marginTop: 30,
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
    },
    applyButton: {
      backgroundColor: globalStyles.primaryColor,
      marginTop: 10,
      padding: 8,
    },
  });

  const [tagsData, setTagsData] = useState([]);
  const [companiesData, setCompaniesData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [value, setValue] = useState('');
  const [isShowResult, setIsShowResult] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/tag')
      .then(response => response.json())
      .then(data => {
        setTagsData(prev => {
          return [...data.payload];
        });
      })
      .catch(e => console.log(e));
    fetch('http://localhost:3001/company')
      .then(response => response.json())
      .then(data => {
        setCompaniesData(prev => {
          return [...data.payload];
        });
      })
      .catch(e => console.log(e));
  }, []);

  function onChangeText(text) {
    if (text === '') {
      setIsShowResult(false);
    }
    setValue(text);
  }
  function onPress(id) {}

  function onSubmitEditing() {
    fetch(`http://localhost:3001/job/search?search=${value}`)
      .then(response => response.json())
      .then(data => {
        setSearchData(prev => {
          return [...data.payload];
        });
        setIsShowResult(true);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.viewContainer}>
        <View>
          <TextInput
            placeholder="Find a Job"
            placeholderTextColor="#ccc"
            selectionColor="white"
            style={styles.input}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <View style={styles.icon}>
            <SvgSearch stroke="white" />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {searchData && isShowResult ? (
            searchData.map(job => (
              <View key={job._source.id} style={styles.job}>
                <Text style={styles.titleText}>{job._source.title}</Text>
                <Text style={styles.descText}>{job._source.description}</Text>
                <TouchableOpacity
                  style={styles.applyButton}
                  onPress={() => onPress(job._source.id)}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <>
              <View style={styles.title}>
                <Text style={styles.titleText}>Tags</Text>
              </View>
              <View style={styles.tags}>
                {tagsData &&
                  tagsData.map(tag => (
                    <View key={tag._id} style={styles.tag}>
                      <Text style={styles.tagName}>{tag.name}</Text>
                    </View>
                  ))}
              </View>
              <View style={styles.title}>
                <Text style={styles.titleText}>Companies</Text>
              </View>
              <View style={styles.tags}>
                {companiesData &&
                  companiesData.map(company => (
                    <View key={company._id} style={styles.tag}>
                      <Text style={styles.tagName}>{company.name}</Text>
                    </View>
                  ))}
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default Search;
