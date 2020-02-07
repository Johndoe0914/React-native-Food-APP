import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";



const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [ searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        if(results.length){
            return results.filter(result => {
                return result.price === price;
              });
            
        } else{
            return results.length
        }
      
      };
    
    return (
        <View>
    <SearchBar onTermSubmit={() => searchApi(term)} term={term} onTermChange={setTerm} />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length}</Text>
        <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")}/>
        <ResultsList title="Big Spender"results={filterResultsByPrice("$$$")}/> 
        </View>
    )
}
const styles = StyleSheet.create({
})

export default SearchScreen