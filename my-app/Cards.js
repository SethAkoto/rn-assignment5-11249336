import React from "react";
import { ScrollView,View, StyleSheet, Image, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const cardDetails = [
    {id: '1', cardnumber: '4305     4501     8864     1127', cardname: 'Seth Akoto', cvv: '478', expiry: '12/2026', icon: require('../assets/mastercard.png'), background: require('../assets/background.png'), backgroundColor: '#000080'},
    {id: '2', cardnumber: '4120     7864     1254     0123', cardname: 'Seth Akoto', cvv: '745', expiry: '06/2027',icon: require('../assets/visa.png'), background: require('../assets/background.png'), backgroundColor: '#6B8E23'},
]

const CreditCard = ({cardnumber, cardname, icon, background, expiry, backgroundColor, cvv}) => {
    return(
<View style={[styles.card ,{backgroundColor}]}>
<Image source ={background} style={styles.background}/>
<View>
    <View style={styles.cardHeader}>
    <MaterialIcons name="sim-card" size={24} color="white" style={{ transform: [{ rotate: '90deg' }], opacity: 0.5}}/>
    <MaterialIcons name="wifi" size={24} color="white" style={{ transform: [{ rotate: '90deg' }], opacity: 0.5}}/>
    </View>
    <View style={styles.cardBody}>
       
    <Text style={styles.cardNumber}>{cardnumber}</Text>
    <Text style={styles.cardName}>{cardname}</Text>
   
    <View style={styles.cardFooter}>

<View>
    <Text style={{fontWeight: 200, color: '#FFFFFF',}}>Expiry Date</Text>
    <Text style={styles.cardExpiry}>{expiry}</Text>
    </View>
    <View>
    <Text style={{fontWeight: 200,  color: '#FFFFFF',}}>CVV</Text>
    <Text style={styles.cardCvv}>{cvv}</Text>
    </View>
    <Image source={icon} style={styles.icon}/>

</View>

</View>
</View>
</View>
    )
}

 function Cards() {
    return(
        <>
        <ScrollView showsHorizontalScrollIndicator={false} style={{flexGrow: 0}} scrollEnabled={true}>
<View style={styles.cardRow}>
    {cardDetails.map(card => (
        <CreditCard key={card.id} cardnumber={card.cardnumber} cardname={card.cardname} icon={card.icon} background={card.background} expiry={card.expiry} cardtype={card.cardtype} backgroundColor={card.backgroundColor} cvv={card.cvv}/>
    ))}
</View>
</ScrollView>
</>
    );
 }

 const styles = StyleSheet.create({
     card: {
         height: 200,
         width: 330,
         borderRadius: 25,
         margin: 20,
         padding: 15,      
         shadowColor: "#000",
         shadowOffset: {
         width: 0,
         height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5,
     },
     cardHeader: {
        marginBottom: 20,
         flexDirection: "row",
            justifyContent: "space-between",
            
     },
     cardRow:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         
     },

     background:{
         width: '100%',
         height: '100%',
         position: 'relative',
         opacity: 1,
     },
     icon:{
         width: 62,
         height: 48,     
         position: 'absolute',
         bottom: 0,
         right: 0,
        
     },
     background:{
         width: '100%',
         height: '100%',
         position: 'absolute',
         opacity: 0.2,
     }, 
     cardBody:{
         flexDirection: "column",
         justifyContent: "space-between",
         rowGap: 15,
         
     },
     cardFooter:{
         flexDirection: "row",
         columnGap: 15,
         height: 40,
         color: '#FFFFFF',
     },
     cardNumber: {
        fontSize: 27,
        fontWeight: 500,
        color: '#FFFFFF',     
     },
     cardName: {
        fontSize: 18,
       color: '#FFFFFF',
     },
     cardExpiry:{
        color: '#FFFFFF',
     }, 
     cardCvv:{
        color: '#FFFFFF',
     }

 })
 export default Cards;